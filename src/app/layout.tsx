import "./globals.css";
import "@/lib/nodemailer";

import { Viewport } from "next";
import { Poppins } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ReactNode } from "react";
import { Toaster } from "sonner";

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
    <ViewTransitions>
      <html lang="pt-br" className="dark" suppressHydrationWarning>
        <body
          className={`${poppins.className} px-2 ${poppins.variable} h-svh bg-gradient-to-r from-zinc-900 to-zinc-800 font-poppins text-zinc-50 antialiased selection:bg-emerald-400 selection:text-zinc-950`}
        >
          <Toaster />
          {children}
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
    </ViewTransitions>
  );
}
