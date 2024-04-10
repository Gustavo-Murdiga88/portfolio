import { Atom } from "lucide-react";
import Img from "next/image";
import Link from "next/link";

export function Main() {
	const currentYear = new Date().getFullYear();
	const myYearsOld = currentYear - 1999;

	return (
		<section
			aria-label="Apresentação"
			data-main
			id="home"
			className="mx-auto max-w-page"
		>
			<article className="my-10 flex flex-col-reverse items-center justify-center gap-10 px-6 lg:my-0 lg:min-h-[50rem] lg:flex-row lg:gap-24 2xl:min-h-[890px]">
				<div
					data-aos="fade-up"
					className="flex flex-col items-start justify-center gap-6"
				>
					<div className="prose prose-zinc">
						<h1 className="mb-2 text-2xl font-semibold leading-tight tracking-tighter text-neutral-100 lg:text-3xl">
							Gustavo Murdiga
						</h1>
						<strong className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline hover:underline-offset-8 lg:text-lg">
							Desenvolvedor Full-stack
						</strong>
						<p className="font-semibold tracking-tighter text-neutral-400">
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
						className="flex w-full items-center justify-center gap-4 rounded-xs border border-neutral-400 p-2 px-4 font-semibold text-neutral-100 transition-colors hover:bg-neutral-100 hover:text-neutral-950 lg:max-w-[15.625rem]"
					>
						Minhas informações
						<Atom size={18} />
					</Link>
				</div>
				<figure
					data-aos="fade-up"
					className="relative min-h-[300px] min-w-[18.75rem] overflow-hidden rounded-full before:absolute before:inset-0 before:origin-center before:scale-[200%] before:animate-rotate before:bg-gradient-to-r before:from-neutral-dark-1100 before:to-blue-300"
				>
					<Img
						src="https://github.com/gustavo-murdiga88.png"
						height={292}
						width={292}
						loading="lazy"
						quality={100}
						decoding="async"
						className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2  -translate-y-1/2 rounded-full object-cover"
						alt="Uma imagem que representes o perfil do Gustavo Murdiga"
					/>
				</figure>
			</article>
		</section>
	);
}
