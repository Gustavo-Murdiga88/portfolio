import { Atom, Github, Linkedin } from "lucide-react";
import Img from "next/image";
import Link from "next/link";

import { Title } from "@/components/title";

export function Main() {
	const currentYear = new Date().getFullYear();
	const myYearsOld = currentYear - 1999;

	return (
		<section aria-label="Apresentação" className="mx-auto max-w-page">
			<Title id="home" title="Apresentação" data-main data-section="home">
				<nav aria-label="Redes sociais" className="ml-auto flex gap-4">
					<Link
						aria-labelledby="github"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Github id="github" aria-label="github" />
					</Link>
					<Link
						aria-labelledby="LinkedIn"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Linkedin id="LinkedIn" aria-label="LinkedIn" />
					</Link>
				</nav>
			</Title>

			<article className="relative my-10 flex flex-col-reverse items-center justify-center gap-10 px-6 lg:my-0 lg:min-h-[50rem] lg:flex-row lg:gap-24 2xl:min-h-[890px]">
				<div className="absolute left-1/2 top-1/2  h-1/2 w-1/2  -translate-x-1/2 -translate-y-1/2 bg-blue-200 blur-[100px] md:h-[25rem] md:w-[25rem] md:blur-[15.625rem] " />

				<div
					data-aos="fade-up"
					className="z-10 flex flex-col items-start justify-center gap-6"
				>
					<div className="prose prose-zinc">
						<h1 className="mb-2 text-2xl font-semibold leading-tight tracking-tighter text-neutral-100 lg:text-3xl">
							Gustavo Murdiga
						</h1>
						<strong className="subtitle text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline hover:underline-offset-8 lg:text-lg">
							Desenvolvedor Full-stack
						</strong>
						<p className="text-[0.75rem] font-semibold tracking-tighter text-neutral-100 md:text-base">
							Sou um engenheiro de software com 4 anos de experiência,
							especializado em tecnologias como React.js, Next.js, Node.js,
							NestJS e AWS. <br />
							Brasileiro, nascido em Jaú no interior de São paulo, com{" "}
							{myYearsOld} anos, católico, estudante e um desenvolvedor que
							buscar ser melhor, não apenas nas linhas de código, mas como
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
				<figure
					data-aos="fade-up"
					className="relative min-h-[300px] min-w-[18.75rem] overflow-hidden rounded-full before:absolute before:inset-0 before:origin-center before:scale-[200%] before:animate-rotate-linear before:bg-profile"
				>
					<Img
						src="https://github.com/gustavo-murdiga88.png"
						height={292}
						width={292}
						loading="eager"
						placeholder="blur"
						fetchPriority="high"
						data-main
						data-section="home"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkD9l9BAADXAHcNBnuMgAAAABJRU5ErkJggg=="
						decoding="sync"
						className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2  -translate-y-1/2 rounded-full object-cover"
						alt="Uma imagem que representa o perfil do Gustavo Murdiga"
					/>
				</figure>
			</article>
		</section>
	);
}
