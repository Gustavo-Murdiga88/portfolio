/* eslint-disable tailwindcss/no-custom-classname */
import Script from "next/script";

type ADSProps = {
  type: "fluid" | "autorelaxed" | "auto";
};
export function Ads({ type }: ADSProps) {
  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      />
      {type === "autorelaxed" && (
        <ins
          className="adsbygoogle block"
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-6252769412873895"
          data-ad-slot="5951299864"
        />
      )}

      {type === "fluid" && (
        <ins
          className="adsbygoogle block"
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-ad-client="ca-pub-6252769412873895"
          data-ad-slot="2143190443"
        />
      )}

      {type === "auto" && (
        <ins
          className="adsbygoogle block"
          data-ad-client="ca-pub-6252769412873895"
          data-ad-slot="6445397530"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </>
  );
}
