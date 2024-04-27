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
						aria-label="github"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<span className="sr-only">github</span>
						<Github />
					</Link>
					<Link
						aria-label="LinkedIn"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<span className="sr-only">LinkedIn</span>
						<Linkedin />
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
							Jauense de {myYearsOld} anos, entusiasta e dedicado a criar novos
							projetos, busco constantemente desafios que me permitam aprimorar
							minhas habilidades tanto no front-end quanto no back-end. Minha
							experiência sólida em tecnologias como React, Next.js, Node.js e
							Flutter me proporcionou a capacidade de enfrentar obstáculos
							complexos e contribuir para projetos inovadores. Tenho paixão por
							superar desafios, desenvolver soluções robustas e manter-me
							atualizado com as últimas tendências tecnológicas. Estou sempre
							preparado para criar projetos ambiciosos.
						</p>
					</div>
					<Link
						target="_blank"
						aria-label="Minhas informações"
						href="/curr.pdf"
						data-main
						data-section="home"
						className="flex w-full animate-gradient items-center justify-center gap-4 rounded-xs bg-subtitle bg-[length:300%_300%] p-2 px-4 text-base font-semibold text-neutral-950 lg:max-w-[15.625rem]"
					>
						Minhas informações
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
						loading="lazy"
						quality={100}
						data-main
						data-section="home"
						decoding="async"
						className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2  -translate-y-1/2 rounded-full object-cover"
						alt="Uma imagem que representes o perfil do Gustavo Murdiga"
					/>
				</figure>
			</article>
		</section>
	);
}
