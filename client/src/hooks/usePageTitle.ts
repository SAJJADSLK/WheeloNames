import { useEffect } from "react";

/**
 * Sets the document <title> (and updates it on unmount back to default).
 * Gives every route a unique, descriptive browser-tab / search title.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

export const SITE_NAME = "Wheeloname";
