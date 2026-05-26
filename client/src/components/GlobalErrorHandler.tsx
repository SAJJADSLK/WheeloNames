/* =============================================================
   GlobalErrorHandler — Wheeloname Clone
   Handles global errors and provides user-friendly feedback
   ============================================================= */

import { useEffect } from "react";
import { toast } from "sonner";

export function GlobalErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason);
      toast.error("Something went wrong. Please try again.");
    };

    // Handle global errors
    const handleError = (event: ErrorEvent) => {
      console.error("Global error:", event.error);
      // Only show toast for non-network errors
      if (event.error?.message && !event.error.message.includes("NetworkError")) {
        toast.error("An unexpected error occurred. Please refresh the page.");
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
