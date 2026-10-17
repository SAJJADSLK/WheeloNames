/* =============================================================
   AdBanner — Google AdSense compliant ad slot unit
   - Adheres to Google AdSense Ad Placement Policies
   - Only renders when a valid numeric slot ID is provided
   - Standard responsive container without hidden/zero-height masking
   ============================================================= */

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-3811332485680799";

interface AdBannerProps {
  slot: string;
  format?: string;
  className?: string;
}

export default function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const validSlot = typeof slot === "string" && /^\d{6,}$/.test(slot);

  useEffect(() => {
    if (!validSlot || !insRef.current) return;
    try {
      if (!insRef.current.getAttribute("data-adsbygoogle-status")) {
        const w = window as any;
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      }
    } catch {
      // Script blocked or pending
    }
  }, [validSlot]);

  if (!validSlot) return null;

  return (
    <div className={`adsense-wrapper w-full my-4 flex justify-center items-center overflow-hidden min-h-[90px] ${className}`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
