/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-XXXXXXXXXX";

export function GoogleAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      const consentData = JSON.parse(consent);
      if (consentData.analytics) {
        // @ts-ignore
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500,
            });
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}
