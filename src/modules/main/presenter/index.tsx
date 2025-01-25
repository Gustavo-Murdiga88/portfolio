"use client";

import { Atom, Book, Github, Laptop, Linkedin } from "lucide-react";
import Img from "next/image";
import Link from "next/link";

import { Title } from "@/components/title";

export function Main() {
	const currentYear = new Date().getFullYear();
	const myYearsOld = currentYear - 1999;
	const exp = currentYear - 2020;

	return (
		<section aria-label="Apresentação" className="mx-auto max-w-page">
			<Title id="home" title="Apresentação" data-main data-section="home">
				<nav aria-label="Ações" className="ml-auto flex items-center gap-4">
					<Link
						aria-labelledby="bible"
						href="/setup"
						title="Meu setup"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Laptop id="setup" aria-label="setup" />
					</Link>

					<Link
						aria-labelledby="bible"
						href="/daily-liturgy"
						title="Liturgia diária"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Book id="bible" aria-label="Bíblia" size={20} />
					</Link>

					<Link
						aria-labelledby="github"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
						title="github"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Github id="github" aria-label="github" size={20} />
					</Link>
					<Link
						aria-labelledby="LinkedIn"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
						title="LinkedIn"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Linkedin id="LinkedIn" aria-label="LinkedIn" size={20} />
					</Link>
				</nav>
			</Title>

			<article className="relative my-10 flex flex-col-reverse items-center justify-center gap-10 px-6 lg:my-0 lg:min-h-[50rem] lg:flex-row lg:gap-24 2xl:h-svh">
				<div className="z-10 flex flex-col items-start justify-center gap-6">
					<div className="prose prose-zinc text-center md:text-left">
						<h1 className="mb-2 text-2xl font-semibold leading-tight tracking-tighter text-neutral-100 lg:text-3xl">
							Gustavo Murdiga
						</h1>
						<strong className="subtitle text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline hover:underline-offset-8 lg:text-lg">
							Desenvolvedor Full-stack
						</strong>
						<p className="text-balance text-[0.75rem] font-semibold tracking-normal text-neutral-100 md:text-base">
							Sou um engenheiro de software com +{exp} anos de experiência,
							especializado em tecnologias como React.js, Next.js, Node.js,
							NestJS e AWS. <br />
							Brasileiro, nascido em Jaú no interior de São paulo, com{" "}
							{myYearsOld} anos, católico, estudante e um desenvolvedor que
							busca ser melhor, não apenas nas linhas de código, mas como
							pessoa.
						</p>
					</div>
					<Link
						target="_blank"
						aria-label="Minhas informações"
						href="/curr.pdf"
						data-main
						data-section="home"
						className="flex w-full animate-gradient items-center justify-center gap-4 rounded-xs bg-subtitle bg-[length:300%_300%] p-2 px-4 text-base font-semibold text-neutral-950 lg:max-w-[200px]"
					>
						saiba mais
						<Atom size={18} />
					</Link>
				</div>
				<figure className="relative flex min-h-[300px] min-w-[18.75rem] items-center justify-center overflow-hidden rounded-full before:absolute before:inset-0 before:origin-center before:scale-[200%] before:animate-rotate-linear before:bg-profile">
					<div className="flex size-[18.25rem] items-center justify-center overflow-hidden rounded-full">
						<Img
							src="https://github.com/gustavo-murdiga88.png"
							height={292}
							width={292}
							loading="eager"
							placeholder="blur"
							fetchPriority="high"
							data-main
							data-section="home"
							blurDataURL="data:image/png;base64,"
							decoding="sync"
							className="pointer-events-none absolute rounded-full"
							alt="Uma imagem que representa o perfil do Gustavo Murdiga"
						/>
					</div>
				</figure>
			</article>
		</section>
	);
}
