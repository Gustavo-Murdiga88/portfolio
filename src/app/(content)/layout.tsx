import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Title } from "@/components/title";

interface IBlogLayoutProps {
  children: React.ReactNode;
}
export default function BlogLayout({ children }: IBlogLayoutProps) {
  return (
    <>
      <Title id="setup" title="Blog">
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
        </nav>
      </Title>

      {children}
    </>
  );
}
