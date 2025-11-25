import { Metadata } from "next";

export const metadata: Metadata = {
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
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/daily-liturgy`,
    languages: {
      "pt-BR": `${process.env.NEXT_PUBLIC_SITE_URL}/daily-liturgy`,
    },
  },
  title: `Sobre mim`,
  description:
    "Aqui você encontrará informações sobre minha trajetória profissional, habilidades e paixões no desenvolvimento full-stack. Descubra como minha experiência e dedicação podem contribuir para o sucesso do seu próximo projeto.",
  authors: [
    {
      name: "Gustavo Murdiga",
    },
  ],
  appleWebApp: {
    capable: false,
    statusBarStyle: "black-translucent",
    title: "Sobre mim",
  },
  category: "technology",
  keywords: [
    "sobre mim",
    "trajetória profissional",
    "habilidades",
    "paixões",
    "desenvolvimento full-stack",
    "evangelho do dia",
    "liturgia diária",
    "igreja católica",
    "fé",
    "oração",
    "devocional",
    "espiritualidade",
    "bíblia",
    "palavra de Deus",
    "meditação",
    "santo",
    "sacramento",
    "missal",
    "celebração",
    "liturgia das horas",
    "reflexão bíblica",
    "vida cristã",
  ],
  creator: "Gustavo Murdiga",
  openGraph: {
    type: "article",
    locale: "pt-br",
    title: `Sobre mim`,
    description:
      "Aqui você encontrará informações sobre minha trajetória profissional, habilidades e paixões no desenvolvimento full-stack. Descubra como minha experiência e dedicação podem contribuir para o sucesso do seu próximo projeto.",
    tags: [
      "sobre mim",
      "trajetória profissional",
      "habilidades",
      "paixões",
      "desenvolvimento full-stack",
    ],
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759287677/jesus_ld4tyz.jpg",
    ],
  },
  twitter: {
    site: "@GuMurdiga",
    description:
      "Aqui você encontrará informações sobre minha trajetória profissional, habilidades e paixões no desenvolvimento full-stack. Descubra como minha experiência e dedicação podem contribuir para o sucesso do seu próximo projeto.",
    title: `Sobre mim`,
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759287677/jesus_ld4tyz.jpg",
    ],
  },
};
