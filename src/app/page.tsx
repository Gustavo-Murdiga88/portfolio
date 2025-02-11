import { ChevronRight, Github, Linkedin, Paperclip } from "lucide-react";
import Img from "next/image";
import { Link } from "next-view-transitions";

export default function Main() {
	const date = new Date();
	const dateFormatted = Intl.DateTimeFormat("pt-br", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date());

	const myYearsOld = date.getFullYear() - 1999;

	return (
		<div className="flex size-full flex-1 flex-col items-center justify-center">
			<section className="w-full max-w-[458px]">
				<strong className="mb-1 ml-2 block text-[0.625rem] font-semibold text-zinc-50">
					Jaú, SP - {dateFormatted} / Seja bem vindo!
				</strong>
				<div className="rounded-xs bg-zinc-700/50 p-2">
					<header className="relative h-[7.75rem] rounded-xs border-[0.125rem] border-zinc-700">
						<Img
							src="https://images.unsplash.com/photo-1738831920727-73e17adc5b87?q=100&w=1200&&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							height={120}
							width={450}
							className="absolute h-[120px] rounded-xs object-cover"
							alt="Uma capa do meu perfil, representada um plano preto com listras"
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
							href="https://www.linkedin.com/in/gustavomurdiga/"
							target="_blank"
						>
							<Linkedin size={18} />
						</Link>
						<Link
							href="/curr.pdf"
							target="_blank"
							className="rounded-xs p-2 text-zinc-50 transition-colors hover:bg-zinc-700"
						>
							<Paperclip size={18} />
						</Link>
					</div>

					<ul className="mx-2 mt-2 flex flex-col gap-1">
						<li>
							<strong className="block text-[0.875rem] font-semibold">
								Gustavo Murdiga / Desenvolvedor full-stack
							</strong>
						</li>
						<li>
							<Link
								href="mailto:gumurdiga@gmail.com"
								className="block text-[0.625rem] font-semibold text-zinc-50 transition-colors hover:underline hover:underline-offset-2"
							>
								gumurdiga@gmail.com
							</Link>
						</li>
						<li className="block text-[0.625rem] font-semibold text-zinc-50 transition-colors">
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
									className="flex items-center justify-between rounded-xs p-2 font-semibold transition-colors hover:bg-zinc-700"
								>
									Sobre
									<ChevronRight size={16} />
								</Link>
							</li>
							<li>
								<Link
									href="/skills"
									className="flex items-center justify-between rounded-xs p-2 font-semibold transition-colors hover:bg-zinc-700"
								>
									Habilidades
									<ChevronRight size={16} />
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="flex items-center justify-between rounded-xs p-2 font-semibold transition-colors hover:bg-zinc-700"
								>
									Projetos
									<ChevronRight size={16} />
								</Link>
							</li>
							<li>
								<Link
									href="/setup"
									className="flex items-center justify-between rounded-xs p-2 font-semibold transition-colors hover:bg-zinc-700"
								>
									Setup
									<ChevronRight size={16} />
								</Link>
							</li>
							<li>
								<Link
									href="/daily-liturgy"
									className="flex items-center justify-between rounded-xs p-2 font-semibold transition-colors hover:bg-zinc-700"
								>
									Liturgia diária
									<ChevronRight size={16} />
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="flex items-center justify-between rounded-xs p-2 font-semibold transition-colors hover:bg-zinc-700"
								>
									Contato
									<ChevronRight size={16} />
								</Link>
							</li>
						</ul>
					</nav>

					<footer className="group mt-4 border-t border-zinc-700 py-4 text-center text-[0.625rem]">
						<strong className="leading-relaxed">
							Made with 💜 <br />
							by Gustavo Murdiga{" "}
						</strong>
					</footer>
				</div>
			</section>
		</div>
	);
}
