/* eslint-disable tailwindcss/no-custom-classname */
import { ChevronLeft, Cross, Github, Home, Linkedin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { ReactNode } from "react";
import { ViewTransition } from "react";

import { Title } from "@/components/title";

export default function MeLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransition name="me">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="5951299864"
      ></ins>
      <Script id="adsbygoogle-init">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="6445397530"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="adsbygoogle-init-2">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="6253825845"
      ></ins>
      <Script id="adsbygoogle-init-3">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-6252769412873895"
        data-ad-slot="2143190443"
      ></ins>
      <Script id="adsbygoogle-init-4">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>

      <div className="flex min-h-dvh flex-col">
        <Title id="setup" title="Meus Equipamentos">
          <nav
            aria-label="Ações"
            className="flex flex-1 items-center justify-end gap-2"
          >
            <Link
              href="/"
              title="Voltar"
              className="mr-auto flex items-center gap-1 p-1 text-[0.75rem] text-zinc-500/90 transition-colors duration-300 hover:text-zinc-50"
              aria-labelledby="voltar"
            >
              <ChevronLeft id="voltar" size={18} />
              Voltar
            </Link>

            <Link
              aria-labelledby="home"
              href="/"
              title="Página principal"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Home id="home" aria-label="Bíblia" size={18} />
            </Link>

            <Link
              aria-labelledby="bible"
              href="/daily-liturgy"
              title="Liturgia diária"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Cross id="bible" aria-label="Bíblia" size={18} />
            </Link>

            <Link
              aria-labelledby="github"
              href="https://github.com/Gustavo-Murdiga88"
              target="_blank"
              title="github"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Github id="github" aria-label="github" size={18} />
            </Link>
            <Link
              aria-labelledby="LinkedIn"
              href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
              target="_blank"
              title="LinkedIn"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Linkedin id="LinkedIn" aria-label="LinkedIn" size={18} />
            </Link>
          </nav>
        </Title>
        {children}
      </div>
    </ViewTransition>
  );
}
