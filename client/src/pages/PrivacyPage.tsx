import Header from "@/components/Header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p>
              Wheeloname ("we", "our", or "us") operates the Wheeloname.com website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you interact with our site, including pages visited, time spent, and actions taken.</li>
              <li><strong>Device Information:</strong> Information about your device, including browser type, operating system, and device identifiers.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
              <li><strong>Wheel Data:</strong> The wheels you create are stored in your browser's local storage. We do not collect or store this data on our servers.</li>
              <li><strong>Analytics Data:</strong> Information collected through Google Analytics to understand site usage patterns.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To improve our service and user experience</li>
              <li>To display personalized ads through Google AdSense</li>
              <li>To track analytics and usage patterns</li>
              <li>To debug and troubleshoot technical issues</li>
              <li>To understand user preferences and behavior</li>
              <li>To enhance site security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Google AdSense & Advertising</h2>
            <p>
              We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to this website and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Cookies</h2>
            <p className="mb-3">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Analytics:</strong> Google Analytics cookies to track site usage</li>
              <li><strong>Advertising:</strong> Google AdSense cookies for ad serving</li>
              <li><strong>Preferences:</strong> Cookies to remember your theme and language preferences</li>
              <li><strong>Functionality:</strong> Cookies to enable core website functionality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> For usage tracking and analytics</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li><strong>Vercel:</strong> For website hosting and deployment</li>
              <li><strong>Google Fonts:</strong> For typography and font delivery</li>
            </ul>
            <p className="mt-3">These third parties may collect information about you as described in their respective privacy policies.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Data Security</h2>
            <p>
              We implement security measures to protect your data. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Your Rights</h2>
            <p className="mb-3">You have the following rights regarding your information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt-out of analytics and advertising</li>
              <li>The right to disable cookies in your browser settings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-3">
              <strong>Email:</strong> support@wheeloname.com<br />
              <strong>Website:</strong> www.wheeloname.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
            </p>
          </div>

          <div className="text-sm text-gray-500 mt-12 pt-6 border-t">
            <p><strong>Last Updated:</strong> June 5, 2026</p>
            <p><strong>Effective Date:</strong> June 5, 2026</p>
          </div>
        </section>
      </main>
    </div>
  );
}
