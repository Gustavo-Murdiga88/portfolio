import dayjs from "dayjs";
import { ChevronRight, Github, Linkedin, Paperclip } from "lucide-react";
import { Metadata } from "next";
import Img from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

import { metadata as meta } from "./meta";

export const metadata: Metadata = meta;

export default async function Home() {
  "use cache";
  const date = dayjs();

  const myYearsOld = date.get("year") - 1999;

  return (
    <ViewTransition name="home" enter={"fade-left"} exit={"fade-out-left"}>
      <div className="my-4 flex min-h-dvh items-center justify-center md:my-0">
        <section className="h-fit w-full max-w-[45rem]">
          <div className="rounded-xs border border-zinc-700/50 p-4">
            <header className="relative h-[7.75rem] rounded-xs border-[0.125rem] border-zinc-700">
              <div
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1651407552395-e780d88e1e14?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                  backgroundPosition: "40% 65%",
                }}
                className="absolute h-[120px] w-full rounded-xs bg-no-repeat object-cover"
              />

              <Img
                src="https://github.com/gustavo-murdiga88.png"
                height={100}
                width={100}
                loading="eager"
                placeholder="blur"
                fetchPriority="high"
                data-main
                data-section="home"
                blurDataURL="data:image/png;base64,"
                decoding="sync"
                className="relative left-16 top-[45%] -translate-x-1/2 rounded-full border-[0.125rem] border-zinc-700"
                alt="Uma imagem que representa o perfil do Gustavo Murdiga"
              />
            </header>

            <div className="mt-4 flex items-center justify-end gap-1 pr-4">
              <Link
                className="rounded-xs p-2 text-zinc-50 transition-colors hover:bg-zinc-700"
                href="https://github.com/Gustavo-Murdiga88"
                target="_blank"
              >
                <Github size={18} />
              </Link>
              <Link
                className="rounded-xs p-2 text-zinc-50 transition-colors hover:bg-zinc-700"
                href="https://www.linkedin.com/in/gustavomurdiga"
                target="_blank"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="/curr.pdf"
                target="_blank border border-zinc-600/30"
                className="rounded-xs p-2 text-zinc-50 transition-colors hover:bg-zinc-700"
                prefetch={false}
              >
                <Paperclip size={18} />
              </Link>
            </div>

            <ul className="mx-2 mt-2 flex flex-col gap-1">
              <li>
                <strong className="block text-[0.875rem] font-semibold">
                  Gustavo Murdiga
                  <br />
                  <span className="text-zinc-200">
                    Desenvolvedor full-stack senior
                  </span>
                  <br />
                  na
                  <Link
                    href={"https://remessaonline.com.br"}
                    target="_blank border border-zinc-600/30"
                    className="ml-1 hover:underline"
                  >
                    Remessa online
                  </Link>
                </strong>
              </li>
              <li>
                <Link
                  href="mailto:gumurdiga@gmail.com"
                  className="block py-2 text-[0.75rem] font-semibold text-zinc-200 underline transition-colors hover:underline hover:underline-offset-2"
                >
                  gumurdiga@gmail.com
                </Link>
              </li>
              <li className="block text-[12px] font-semibold text-zinc-50 transition-colors">
                {myYearsOld} anos
              </li>
            </ul>

            <nav className="mx-2 mt-3">
              <strong className="block border-b border-zinc-700 py-1 text-[0.875rem] text-zinc-50">
                Menus
              </strong>
              <ul className="flex flex-col gap-2 py-2 text-[0.75rem] text-zinc-50">
                <li>
                  <Link
                    href="/about"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Sobre
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Habilidades
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Projetos
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/setup"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Setup
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Blog
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/daily-liturgy"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Liturgia diária
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between rounded-xs border border-zinc-600/30 p-3 font-semibold transition-colors hover:bg-zinc-700"
                  >
                    Contato
                    <ChevronRight size={16} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </ViewTransition>
  );
}
