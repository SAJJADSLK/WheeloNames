// Wheeloname Service Worker
// Enables offline functionality and caching

const CACHE_NAME = "wheeloname-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
];

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Silently fail if assets aren't available during install
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // Skip external requests
  if (!event.request.url.includes(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type === "error") {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache successful responses
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Return cached response if network fails
          return caches.match(event.request);
        });
    })
  );
});

// Handle background sync for offline actions
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-wheels") {
    event.waitUntil(syncWheels());
  }
});

async function syncWheels() {
  try {
    // Sync wheel data when connection is restored
    const wheels = localStorage.getItem("wheeloname-wheels");
    if (wheels) {
      // Could send to server here
      console.log("Syncing wheels:", wheels);
    }
  } catch (error) {
    console.error("Sync failed:", error);
  }
}

// Handle push notifications
self.addEventListener("push", (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || "Wheeloname";
  const options = {
    body: data.body || "Check out what's new!",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663675103243/Keu92i8at8VAdKDhSKgXT4/wheeloname-favicon-2wzufQWDpYBWNPmEntMmYz.webp",
    badge: "https://d2xsxph8kpxj0f.cloudfront.net/310519663675103243/Keu92i8at8VAdKDhSKgXT4/wheeloname-favicon-2wzufQWDpYBWNPmEntMmYz.webp",
    tag: data.tag || "notification",
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      // Check if window already exists
      for (let client of clientList) {
        if (client.url === "/" && "focus" in client) {
          return client.focus();
        }
      }
      // Open new window if none exists
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    })
  );
});
