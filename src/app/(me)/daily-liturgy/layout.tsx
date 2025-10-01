import dayjs from "dayjs";
import { Metadata } from "next";
import type { ReactNode } from "react";

const today = dayjs().format("DD/MM/YYYY");

export const metadata: Metadata = {
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
  creator: "GM DEV",
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

export default function DailyLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-[47.5rem] flex-1">
      {children}
    </main>
  );
}
