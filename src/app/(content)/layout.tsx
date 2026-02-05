import Script from "next/script";
import { ViewTransition } from "react";

import { BackButton } from "@/components/back-button";
import { Title } from "@/components/title";

interface IBlogLayoutProps {
  children: React.ReactNode;
}
export default function BlogLayout({ children }: IBlogLayoutProps) {
  return (
    <ViewTransition name="blog">
      <Script
        async
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      />

      <Script id="adsbygoogle-init">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Title id="blog" title="Blog">
        <nav
          aria-label="Ações"
          className="flex flex-1 items-center justify-end gap-2"
        >
          <BackButton />
        </nav>
      </Title>

      {children}

      {/* <ins
        className="adsbygoogle block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="5951299864"
      />
      <ins
        className="adsbygoogle block"
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="2143190443"
      />
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="6445397530"
        data-ad-format="auto"
        data-full-width-responsive="true"
      /> */}
    </ViewTransition>
  );
}
