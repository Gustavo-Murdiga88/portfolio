import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  creator: "Gustavo Murdiga",
  publisher: "Gustavo Murdiga",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg",
  },
  appleWebApp: {
    title: "Blog - Gustavo Murdiga",
    statusBarStyle: "black-translucent",
    capable: false,
  },
  description:
    "Artigos sobre desenvolvimento web, tecnologia, JavaScript, React, Next.js e dicas de programação por Gustavo Murdiga.",
  keywords: [
    "blog",
    "artigos",
    "desenvolvimento web",
    "javascript",
    "react",
    "nextjs",
    "programação",
    "tecnologia",
  ],
  openGraph: {
    title: "Blog - Gustavo Murdiga",
    description: "Artigos sobre desenvolvimento web, tecnologia e programação",
    type: "website",
    siteName: "Blog - Gustavo Murdiga",
    url: "https://gustavo-murdiga.vercel.app/blog",
    locale: "pt_BR",
    countryName: "Brazil",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Blog - Gustavo Murdiga",
      },
    ],
  },
  twitter: {
    title: "Blog - Gustavo Murdiga",
    description: "Artigos sobre desenvolvimento web, tecnologia e programação",
    card: "summary_large_image",
    creator: "@GustavoMurdiga",
    site: "https://gustavo-murdiga.vercel.app/blog",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Blog - Gustavo Murdiga",
      },
    ],
  },
};
