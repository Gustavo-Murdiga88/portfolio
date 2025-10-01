import { ChevronLeft, Cross, Github, Home, Linkedin } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { unstable_ViewTransition as ViewTransitions } from "react";

import { Title } from "@/components/title";

export default function MeLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions name="me" exit={"fade-out-right"} enter={"fade-right"}>
      <div className="flex min-h-dvh flex-col">
        <Title id="setup" title="Meus Equipamentos">
          <nav
            aria-label="Ações"
            className="flex flex-1 items-center justify-end gap-2"
          >
            <Link
              href="/"
              title="Voltar"
              className="mr-auto flex items-center gap-1 p-1 text-[0.75rem] text-zinc-500/90 transition-colors duration-300 hover:text-zinc-50"
              aria-labelledby="voltar"
            >
              <ChevronLeft id="voltar" size={18} />
              Voltar
            </Link>

            <Link
              aria-labelledby="home"
              href="/"
              title="Página principal"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Home id="home" aria-label="Bíblia" size={18} />
            </Link>

            <Link
              aria-labelledby="bible"
              href="/daily-liturgy"
              title="Liturgia diária"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Cross id="bible" aria-label="Bíblia" size={18} />
            </Link>

            <Link
              aria-labelledby="github"
              href="https://github.com/Gustavo-Murdiga88"
              target="_blank"
              title="github"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Github id="github" aria-label="github" size={18} />
            </Link>
            <Link
              aria-labelledby="LinkedIn"
              href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
              target="_blank"
              title="LinkedIn"
              className="rounded-xs p-2 text-zinc-50 transition-colors duration-300 hover:bg-zinc-700/30 focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              <Linkedin id="LinkedIn" aria-label="LinkedIn" size={18} />
            </Link>
          </nav>
        </Title>
        {children}
      </div>
    </ViewTransitions>
  );
}
