"use client";

import Script from "next/script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const analyticsId = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  if (!analyticsId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${analyticsId}');`}
      </Script>
    </>
  );
}

export function trackEvent(name: string, parameters?: Record<string, string | number | boolean>) {
  window.gtag?.("event", name, parameters ?? {});
}
