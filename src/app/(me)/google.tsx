/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import Script from "next/script";

export function GoogleAd() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="5951299864"
        suppressHydrationWarning
      />
      <Script id="adsbygoogle-init">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="6445397530"
        data-ad-format="auto"
        data-full-width-responsive="true"
        suppressHydrationWarning
      />
      <Script id="adsbygoogle-init-2">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle block text-center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="6253825845"
        suppressHydrationWarning
      />
      <Script id="adsbygoogle-init-3">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle block"
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="2143190443"
        suppressHydrationWarning
      />
      <Script id="adsbygoogle-init-4">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  );
}
