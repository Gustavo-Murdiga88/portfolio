import dayjs from "dayjs";
import { Metadata } from "next";

const today = dayjs().format("DD/MM/YYYY");

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
  title: `Liturgia Diária 🙏 ${today}`,
  description: "Aqui será mostrado à você a liturgia diária da igreja católica",
  authors: [
    {
      name: "Gustavo Murdiga",
    },
  ],
  appleWebApp: {
    capable: false,
    statusBarStyle: "black-translucent",
    title: "Liturgia Diária",
  },
  category: "Religion",
  keywords: [
    "liturgia",
    "evangelho",
    "gospel",
    "católico",
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
    title: `Liturgia Diária 🙏 ${today}`,
    description: "Liturgia diária",
    tags: ["gospel", "evangelho"],
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759287677/jesus_ld4tyz.jpg",
    ],
  },
  twitter: {
    site: "@GuMurdiga",
    description: "Tenha seu minuto de fé!",
    title: `Liturgia Diária 🙏 ${today}`,
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759287677/jesus_ld4tyz.jpg",
    ],
  },
};
