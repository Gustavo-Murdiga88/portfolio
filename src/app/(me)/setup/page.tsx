import { Metadata } from "next";
import Img from "next/image";
import Link from "next/link";

import json from "./setup.json";

export const metadata: Metadata = {
  title: `Meus equipamentos 🤓`,
  description:
    "Com o tempo muitas pessoas me perguntam sobre meu periféricos no setup, a partir daí achei muito legal colocar aqui uma lista de todos os meus equipamentos para que vocês possam se espelhar ou até mesmo comprá-los. Desfrute de livros e equipamentos que venho adquirindo para melhorar minha experiência na criação de novas aplicações que mudam a vida das pessoas.",
  authors: [
    {
      name: "Gustavo Murdiga",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
  keywords: [
    "setup",
    "equipamentos",
    "tecnologia",
    "gadgets",
    "hardware",
    "periféricos",
    "computadores",
    "acessórios",
    "teclado",
    "mouse",
    "monitor",
    "fones de ouvido",
    "cadeira gamer",
    "mesa de trabalho",
    "iluminação",
    "produtividade",
    "streaming",
    "gaming setup",
    "workstation",
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
    title: `Meus equipamentos 🤓`,
    description:
      "Com o tempo muitas pessoas me perguntam sobre meu periféricos no setup, a partir daí achei muito legal colocar aqui uma lista de todos os meus equipamentos para que vocês possam se espelhar ou até mesmo comprá-los. Desfrute de livros e equipamentos que venho adquirindo para melhorar minha experiência na criação de novas aplicações que mudam a vida das pessoas.",
    tags: ["gospel", "evangelho"],
    images: [
      "https://img.freepik.com/vetores-gratis/ilustracao-detalhada-da-sala-do-jogador_23-2148923561.jpg?t=st=1724184277~exp=1724187877~hmac=bfdb4335e66eec37aab5386c4ae17d7977ed385dbdf0dc0916d37eff26adfb5c&w=1024",
    ],
  },
  twitter: {
    site: "@GuMurdiga",
    description:
      "Com o tempo muitas pessoas me perguntam sobre meu periféricos no setup, a partir daí achei muito legal colocar aqui uma lista de todos os meus equipamentos para que vocês possam se espelhar ou até mesmo comprá-los. Desfrute de livros e equipamentos que venho adquirindo para melhorar minha experiência na criação de novas aplicações que mudam a vida das pessoas.",
    title: `Meus equipamentos 🤓`,
    images: [
      "https://img.freepik.com/vetores-gratis/ilustracao-detalhada-da-sala-do-jogador_23-2148923561.jpg?t=st=1724184277~exp=1724187877~hmac=bfdb4335e66eec37aab5386c4ae17d7977ed385dbdf0dc0916d37eff26adfb5c&w=1024",
    ],
  },
};

export default function SetupPage() {
  return (
    <div className="mx-auto max-w-[45rem] py-6">
      <main className="px-5 py-4 md:mx-auto md:w-full">
        <h1 className="mb-4 text-lg font-semibold">Meu setup</h1>
        <p className="text-justify text-[0.75rem] font-semibold leading-relaxed text-zinc-200/50">
          Com o tempo muitas pessoas me perguntam sobre meu periféricos no
          setup, a partir daí achei muito legal colocar aqui uma lista de todos
          os meus equipamentos para que vocês possam se espelhar ou até mesmo
          comprá-los. Desfrute de livros e equipamentos que venho adquirindo
          para melhorar minha experiência na criação de novas aplicações que
          mudam a vida das pessoas.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {json.equipments.map(({ img, link, name, height, width }) => (
            <Link
              key={img}
              href={link}
              target="_blank"
              className="min-h-[13.8125rem] rounded-xs border border-zinc-400/20 p-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-800/30"
            >
              <div className="z-10 flex h-full flex-col gap-4">
                <figure className="flex flex-1 items-center self-center">
                  <Img
                    alt={`Imagem do produto ${name}`}
                    height={height}
                    quality={100}
                    width={width}
                    decoding="sync"
                    loading="eager"
                    fetchPriority="high"
                    className="rounded-xs object-cover transition-all duration-200 hover:scale-105"
                    src={img}
                  />
                </figure>
                <h1 className="z-10 truncate border-zinc-400/20 text-center text-[0.875rem] font-semibold tracking-tight">
                  {name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
