import "./globals.css";
import "@/lib/nodemailer";

import { Viewport } from "next";
import { Poppins } from "next/font/google";
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
        className={`${poppins.className} px-2 ${poppins.variable} h-svh bg-gradient-to-r from-zinc-900 to-zinc-800 font-poppins text-zinc-50 antialiased selection:bg-emerald-400 selection:text-zinc-950`}
      >
        <Toaster />
        {children}
        <CookieBanner />
        <GoogleAnalytics />
        <section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(struttedData) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(struttedDataOrganization),
            }}
          />
        </section>
      </body>
    </html>
  );
}
