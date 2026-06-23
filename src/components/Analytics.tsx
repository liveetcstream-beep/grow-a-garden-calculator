"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export default function Analytics() {
  const [loadAnalytics, setLoadAnalytics] = useState(false);

  useEffect(() => {
    const handleInteraction = () => setLoadAnalytics(true);

    // Load automatically after 3.5 seconds if no interaction
    const timer = setTimeout(() => setLoadAnalytics(true), 3500);

    // Load immediately on interaction
    window.addEventListener("scroll", handleInteraction, { once: true });
    window.addEventListener("mousemove", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  if (!loadAnalytics) return null;

  return <GoogleAnalytics gaId="G-SCYE342DM5" />;
}
