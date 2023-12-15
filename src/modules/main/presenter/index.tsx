import { Github, Instagram, Linkedin } from "lucide-react";
import Img from "next/image";
import Link from "next/link";

import { ThemeButton } from "@/components/theme_button/widget";
import { Details } from "@/icons/details";
import { Docker } from "@/icons/docker";
import { Mouse } from "@/icons/mouse";
import { Next } from "@/icons/next";
import { Node } from "@/icons/node";
import { Spotify } from "@/icons/spotify";
import { TypeScript } from "@/icons/typesctipt";

export function Main() {
	return (
		<section data-main id="home" className="lg:min-h-content-height">
			<header
				id="home"
				className="animate__animated animated_stop animate__bounceInDown animate-delay-01s mx-auto flex max-w-page justify-between overflow-hidden border-b border-b-neutral-300 bg-neutral-100 px-5 py-4 pr-4 dark:bg-neutral-dark-100"
			>
				<strong className="uppercase text-blue-200 transition-colors hover:text-blue-dark-700 dark:text-blue-dark-200 dark:hover:text-blue-dark-700">
					Home
				</strong>
				<ThemeButton />
				<div className="flex gap-4 text-neutral-600 dark:text-neutral-dark-600">
					<Link
						className="h-6 w-6 transition-all hover:brightness-150"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
						aria-label="github"
					>
						<span className="sr-only">github</span>

						<Github />
					</Link>
					<Link
						className="transition-all hover:brightness-150"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
						aria-label="linkedin"
					>
						<span className="sr-only">linkedin</span>
						<Linkedin />
					</Link>
					<Link
						className="transition-all hover:brightness-150"
						href="https://www.instagram.com/gustaavo88/"
						target="_blank"
						aria-label="instagram"
					>
						<span className="sr-only">instagram</span>
						<Instagram />
					</Link>
				</div>
			</header>
			<main className="mx-auto mt-[2.8125rem] grid max-w-page grid-cols-1 gap-5 lg:grid-cols-[679px_1fr] lg:px-5 lg:pr-[26px]">
				{/* left */}
				<div className="flex flex-col gap-5">
					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-01s group rounded-md bg-neutral-200 p-6 shadow-card dark:bg-neutral-dark-200 lg:h-[320px]">
						<div className="grid w-full grid-cols-1 items-start justify-start gap-[20px] md:grid-cols-[232px_1fr]">
							<Img
								src="https://github.com/gustavo-murdiga88.png"
								height={300}
								width={232}
								loading="lazy"
								quality={100}
								decoding="async"
								className="h-full w-full rounded-sm object-cover"
								alt="Gustavo Murdiga"
							/>
							<div className="flex w-full flex-col items-start justify-between">
								<span>
									<span className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Desenvolvedor front-end
									</span>
									<h1 className="text-center text-2xl font-semibold leading-[60px] md:mb-2 md:mt-5 md:text-left md:text-3xl">
										Gustavo Murdiga.
									</h1>
								</span>
								<span className="break-words py-2 tracking-tighter">
									Olá,caso deseje saber mais&nbsp;
									<Link
										target="_blank"
										href="/curr.pdf"
										aria-label="sobre mim"
										className="text-blue-600 underline decoration-dashed underline-offset-4 transition-all hover:text-blue-800 hover:decoration-dotted"
									>
										sobre mim
									</Link>
								</span>
								<footer className="flex w-full items-center justify-between">
									<span className="break-words font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600">
										Dev. full stack na&nbsp;
										<Link
											target="_blank"
											href="https://www.guaranisistemas.com.br/"
											aria-label="guarani sistemas"
											className="text-blue-600 underline decoration-dashed underline-offset-4 transition-all hover:text-blue-800 hover:decoration-dotted"
										>
											Guarani sistemas
										</Link>
									</span>
									<Details
										size={40}
										className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 "
									/>
								</footer>
							</div>
						</div>
					</div>
					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-02s w-full rounded-md bg-neutral-200 p-6 shadow-card dark:bg-neutral-dark-200 lg:h-[320px]">
						<div className="flex w-full flex-col items-center gap-5 duration-scale  md:flex-row lg:items-stretch">
							<Node className="h-32 w-32 md:h-[256px] md:w-[232px]" />
							<div className="flex w-full flex-1 flex-col justify-between lg:items-start">
								<span className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 ">
									API Fórum
								</span>
								<h1 className="mb-6 flex h-full flex-1 items-center text-xs font-semibold uppercase">
									API criada com os conhecimentos adquiridos em alguns padrões
									de projetos, como DDD, TDD e SOLID.
								</h1>
								<footer className="flex w-full items-center justify-between">
									<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Perfil
									</span>
									<Details
										size={40}
										className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 "
									/>
								</footer>
							</div>
						</div>
					</div>
				</div>
				{/* right */}
				<div className="flex flex-col gap-5">
					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-03s w-full rounded-md bg-neutral-200 p-2 px-8 shadow-card dark:bg-neutral-dark-200 sm:h-[54px] md:h-[42px]">
						<div className="flex items-center gap-4 duration-scale ">
							<Spotify />
							<span className="tex text-[14px] font-bold">
								Em breve você poderá saber o que estou ouvindo 🎧
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-5 md:flex-row lg:h-[16.125rem]">
						<div className="animate__animated animated_stop animate__bounceInDown animate-delay-06s flex-1 rounded-md bg-neutral-200  p-8 shadow-card dark:bg-neutral-dark-200">
							<div className="duration-scale ">
								<Next
									className="mx-auto"
									style={{
										width: 191,
										height: 151,
									}}
								/>
								<footer className="mt-6 flex w-full items-center justify-between">
									<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Habilidades
									</span>
									<Details
										size={40}
										className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 "
									/>
								</footer>
							</div>
						</div>
						<div className="animate__animated animated_stop animate__bounceInDown animate-delay-04s flex-1 rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
							<div className="duration-scale ">
								<TypeScript
									className="mx-auto"
									style={{
										width: 191,
										height: 151,
									}}
								/>
								<footer className="mt-6 flex w-full items-center justify-between">
									<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Projetos
									</span>
									<Details
										size={40}
										className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 "
									/>
								</footer>
							</div>
						</div>
					</div>

					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-05s flex flex-1 gap-5 rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
						<div className="duration-scale ">
							<div className="flex flex-col justify-between">
								<div className="flex gap-7">
									<TypeScript className="h-20 w-20 lg:h-[160px] lg:w-[135px]" />

									<Next className="h-20 w-20 lg:h-[160px] lg:w-[135px]" />

									<Docker className="h-20 w-20 lg:h-[160px] lg:w-[135px]" />
								</div>
								<footer className="mt-6 flex w-full items-center justify-between">
									<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Serviços oferecidos
									</span>
									<Details
										size={40}
										className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 "
									/>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className="mx-2 mb-4 mt-[80px] flex h-[4.5rem] items-center justify-center rounded-sm bg-zinc-400 p-2 dark:bg-black">
				<Mouse size={40} />
			</div>
		</section>
	);
}
