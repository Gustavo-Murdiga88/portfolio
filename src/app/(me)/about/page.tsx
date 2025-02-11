import {
	BoomBox,
	ChevronDown,
	Code,
	Cookie,
	Cross,
	Github,
	Languages,
	Laptop,
	Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TimeBox } from "@/components/time_line/widget";

import { time_line } from "./data";

export default function About() {
	const currentYear = new Date().getFullYear();
	const yearsOld = currentYear - 1999;
	const yearsOfExp = currentYear - 2020;

	return (
		<section
			aria-label="Sobre mim"
			className="m-auto mt-10 flex max-w-[42.375rem] flex-1 flex-col justify-center p-2"
		>
			<article className="prose prose-neutral px-2">
				<header className="flex flex-row gap-4">
					<Image
						src="https://github.com/gustavo-murdiga88.png"
						height={150}
						width={150}
						data-main
						decoding="sync"
						fetchPriority="high"
						placeholder="blur"
						blurDataURL="data:image/png;base64,"
						data-section="about"
						className="m-0 rounded border-zinc-700"
						alt="Perfil do Gustavo Murdiga"
					/>
					<div className="mt-1 flex flex-col text-[12px] font-semibold">
						<h1 className="mb-1 text-start text-base font-semibold leading-none text-zinc-50 md:text-xl">
							Gustavo Murdiga
						</h1>
						<span className="text-neutral-400">Full-stack developer</span>

						<strong className="text-zinc-400">
							{yearsOld} anos de idade, {yearsOfExp} anos de experiencia
						</strong>
						<strong className="text-zinc-400">gumurdiga@gmail.com</strong>
						<div className="mt-2 flex items-center justify-start border-t-[0.0313rem] border-t-zinc-700/90 pt-2">
							<Link
								href="https://github.com/Gustavo-Murdiga88"
								target="_blank"
								aria-label="github"
								className="rounded-xs p-2 text-zinc-400 hover:bg-zinc-700/40"
							>
								<span className="sr-only">github</span>
								<Github size={18} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
								aria-label="LinkedIn"
								target="_blank"
								className="rounded-xs p-2 text-zinc-400 hover:bg-zinc-700/40"
							>
								<span className="sr-only">LinkedIn</span>
								<Linkedin size={18} />
							</Link>
						</div>
					</div>
				</header>
				<p className="text-justify text-[0.875rem] font-semibold text-neutral-900 dark:text-neutral-dark-900">
					Olá, meu nome é Gustavo, moro em Jaú, interior de São Paulo e tenho{" "}
					{yearsOld} anos de idade. Sou um desenvolvedor full-stack
					especializado em Javascript e Node.js com {yearsOfExp} anos de
					experiência, e atualmente trabalho de forma remota há 3 anos. Sou
					formado em arquitetura de dados, analise e desenvolvimento de
					sistemas, eletrotécnica, eletroeletrônica e gestão de energias
					renováveis. Ao longo da minha carreira, tenho trabalhos em projetos
					incríveis que me fizeram um profissional cadas mais eficaz e com uma
					análise critica de problemas e soluções eficientes. Caso deseje saber
					mais sobre mim, fique a vontade para analisar minha história
					profissional
					<Link
						href="/curr.pdf"
						target="_blank"
						className="ml-2 font-semibold text-zinc-50 underline"
					>
						aqui
					</Link>
				</p>
			</article>
			<footer className="mt-4 border-t-[0.0313rem] border-t-zinc-700/90 px-2 py-4">
				<ul className="flex list-none flex-wrap gap-4 text-zinc-50">
					<li>
						<strong className="flex items-center gap-2 text-[0.75rem] text-zinc-400">
							Systems <Laptop className="size-4" />
						</strong>
						<span className="text-[0.75rem] font-semibold text-zinc-50">
							MacOS / Linux
						</span>
					</li>
					<li>
						<strong className="flex items-center gap-2 text-[0.75rem] text-zinc-400">
							Editor <Code className="size-4" />
						</strong>
						<span className="text-[0.75rem] font-semibold text-zinc-50">
							Visual Studio Code
						</span>
					</li>
					<li>
						<strong className="flex items-center gap-2 text-[0.75rem] text-zinc-400">
							Religião <Cross className="size-4" />
						</strong>
						<span className="text-[0.75rem] font-semibold text-zinc-50">
							Católico
						</span>
					</li>
					<li>
						<strong className="flex items-center gap-2 text-[0.75rem] text-zinc-400">
							Línguas <Languages className="size-4" />
						</strong>
						<span className="text-[0.75rem] font-semibold text-zinc-50">
							Português / Inglês
						</span>
					</li>
					<li>
						<strong className="flex items-center gap-2 text-[0.75rem] text-zinc-400">
							Comida <Cookie className="size-4" />
						</strong>
						<span className="text-[0.75rem] font-semibold text-zinc-50">
							Esfirra - comida libanesa
						</span>
					</li>
					<li>
						<strong className="flex items-center gap-2 text-[0.75rem] text-zinc-400">
							Música <BoomBox className="size-4" />
						</strong>
						<span className="text-[0.75rem] font-semibold text-zinc-50">
							<Link
								href="https://open.spotify.com/track/5Ng2rZsyF9cp6ql8Lx2hJc?si=e812350950164ff3"
								className="font-semibold text-zinc-50 underline"
								target="_blank"
							>
								Santos dos santos - Colo de Deus{" "}
							</Link>
						</span>
					</li>
				</ul>
				<div
					role="menubar"
					className="group mt-4 border-t border-t-zinc-700/90 pt-2"
				>
					<label
						htmlFor="checkbox"
						className="flex items-center gap-2 text-[0.875rem] font-semibold"
					>
						Trajetória professional{" "}
						<ChevronDown
							size={18}
							className="group transition-transform duration-200 group-has-[input:checked]:rotate-180"
						/>
						<input type="checkbox" hidden id="checkbox" />
					</label>
					<div
						id="accordion"
						className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] delay-200 duration-300 group-has-[input:checked]:grid-rows-[1fr]"
					>
						<div id="accordion-content" className="overflow-hidden">
							<div className="mx-auto mt-5 max-w-[50rem]">
								{time_line.map(
									(
										{ company, date, title, description, url, img, type },
										index,
									) => (
										<TimeBox
											key={title}
											data-main={index === time_line.length - 1 || index === 0}
											data-section="time_line"
											company={company}
											date={date}
											description={description}
											title={title}
											img={img}
											type={type}
											url={url}
										/>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
