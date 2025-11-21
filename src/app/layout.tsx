import "./globals.css";
import "@/lib/nodemailer";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Viewport } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { ReactNode } from "react";
import { Toaster } from "sonner";

import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";

import { options, struttedData, struttedDataOrganization } from "./meta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata = options;
export const viewport: Viewport = {
  maximumScale: 1,
  minimumScale: 1,
  viewportFit: "auto",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121214" },
    { media: "(prefers-color-scheme: light)", color: "#c3c3c3" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6252769412873895"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${poppins.className} px-2 ${poppins.variable} h-svh bg-gradient-to-r from-zinc-950 to-zinc-900 font-poppins text-zinc-50 antialiased selection:bg-emerald-400 selection:text-zinc-950`}
      >
        <Toaster />
        {children}
        <CookieBanner />
        <footer className="mt-3 border-t border-zinc-700 p-4">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="mb-4 text-sm font-semibold text-zinc-50">
              Gustavo Murdiga
            </h2>
            <div className="flex justify-center gap-2">
              <Link
                aria-labelledby="github"
                href="https://github.com/Gustavo-Murdiga88"
                target="_blank"
                title="github"
                rel="noopener noreferrer"
                className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
              >
                <Github className="size-4 text-zinc-600" id="github" />
              </Link>
              <Link
                aria-labelledby="LinkedIn"
                href="https://www.linkedin.com/in/gustavomurdiga/"
                target="_blank"
                title="LinkedIn"
                rel="noopener noreferrer"
                className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
              >
                <Linkedin className="size-4 text-zinc-600" id="linkedin" />
              </Link>
              <Link
                aria-labelledby="twitter"
                href="https://x.com/GuMurdiga"
                title="Página principal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
              >
                <Twitter className="size-4 text-zinc-600" id="twitter" />
              </Link>
            </div>

            <ul className="mt-3 list-none text-[0.75rem] text-zinc-500">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 transition-colors hover:text-zinc-50 hover:underline"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-400 transition-colors hover:text-zinc-50 hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-zinc-400 transition-colors hover:text-zinc-50 hover:underline"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
            <span className="mt-4 block text-center text-[10px] text-zinc-500">
              Feito com ♥️ <br /> por Gustavo Murdiga
            </span>
            <span className="block text-center text-[10px] text-zinc-500">
              &#169; {new Date().getFullYear()} - Todos os direitos
            </span>
          </div>
        </footer>
        <GoogleAnalytics />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(struttedData) }}
        />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(struttedDataOrganization),
          }}
        />
      </body>
    </html>
  );
}
