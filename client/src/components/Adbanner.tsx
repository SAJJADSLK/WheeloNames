/* =============================================================
   AdBanner — AdSense unit that stays invisible until an ad fills
   - While AdSense is pending/unapproved (or ad blocked) the unit takes
     no space, so there is no empty box or "Advertisement" gap.
   - The ad code stays in the page. As soon as Google fills the unit
     (data-ad-status="filled") it expands and shows automatically.
   - Needs a real numeric slot ID from AdSense (Ads → By ad unit).
     slot="auto" is rejected by Google with HTTP 400, so such units are
     skipped until you paste a real ID.
   ============================================================= */

import { useEffect, useRef, useState } from "react";

const AD_CLIENT = "ca-pub-3811332485680799";

interface AdBannerProps {
  slot: string;
  format?: string;
}

export default function AdBanner({ slot, format = "auto" }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const [filled, setFilled] = useState(false);
  const validSlot = /^\d{6,}$/.test(slot);

  useEffect(() => {
    const ins = insRef.current;
    if (!ins || !validSlot) return;

    const observer = new MutationObserver(() => {
      setFilled(ins.getAttribute("data-ad-status") === "filled");
    });
    observer.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });

    try {
      // Guard against double pushes (React StrictMode) which AdSense reports as an error.
      if (!ins.getAttribute("data-adsbygoogle-status")) {
        const w = window as any;
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      }
    } catch {
      // AdSense script not loaded (blocked or pending). Stay collapsed.
    }

    return () => observer.disconnect();
  }, [validSlot]);

  if (!validSlot) return null;

  // Collapsed with height 0 (not display:none): AdSense needs a measurable width to fill the unit.
  return (
    <div style={filled ? undefined : { height: 0, overflow: "hidden" }}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
