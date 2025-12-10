import type { Metadata, Viewport } from "next";

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

export const metadata: Metadata = {
  title: {
    template: "Gustavo Murdiga | %s",
    default: "Gustavo Murdiga",
  },
};
