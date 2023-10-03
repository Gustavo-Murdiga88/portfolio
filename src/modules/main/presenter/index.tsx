import { GitCommit } from "lucide-react";
import Img from "next/image";

import { Docker } from "@/icons/docker";
import { Mouse } from "@/icons/mouse";
import { Next } from "@/icons/next";
import { Node } from "@/icons/node";
import { TypeScript } from "@/icons/typesctipt";

export function Main() {
	return (
		<>
			<main className="mx-auto mt-[2.8125rem] grid max-w-page grid-cols-1 gap-5 lg:grid-cols-[679px_1fr] lg:px-5 lg:pr-[26px]">
				{/* left */}
				<div className="flex flex-col gap-5">
					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-01s rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200 lg:h-[320px]">
						<div className="flex w-full flex-col gap-[14px] md:flex-row">
							<Img
								src="https://github.com/gustavo-murdiga88.png"
								height={256}
								width={232}
								className="h-full w-full rounded-br-md rounded-tl-md shadow-card sm:h-[256px] sm:w-[232px]"
								alt="Gustavo Murdiga"
							/>
							<div className="flex w-full flex-col items-start justify-between">
								<span>
									<span className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Desenvolvedor front-end
									</span>
									<h1 className="mb-2 mt-5 text-center text-3xl font-semibold leading-[60px] md:text-left md:text-3xl">
										Gustavo Murdiga.
									</h1>
								</span>
								<footer className="flex w-full items-center justify-between">
									<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Currículo
									</span>
									<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
								</footer>
							</div>
						</div>
					</div>
					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-02s w-full rounded-md bg-neutral-200 p-6 shadow-card dark:bg-neutral-dark-200 lg:h-[320px]">
						<div className="flex w-full flex-col items-center gap-5 md:flex-row lg:items-stretch">
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
									<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
								</footer>
							</div>
						</div>
					</div>
				</div>
				{/* right */}
				<div className="flex flex-col gap-5">
					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-03s h-[42px] w-full rounded-md bg-neutral-200 p-2 px-8 shadow-card dark:bg-neutral-dark-200">
						<GitCommit />
					</div>
					<div className="flex flex-col gap-5 md:flex-row lg:h-[16.125rem]">
						<div className="animate__animated animated_stop animate__bounceInDown animate-delay-06s flex-1 rounded-md bg-neutral-200  p-8 shadow-card dark:bg-neutral-dark-200">
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
								<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
							</footer>
						</div>
						<div className="animate__animated animated_stop animate__bounceInDown animate-delay-04s flex-1 rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
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
								<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
							</footer>
						</div>
					</div>

					<div className="animate__animated animated_stop animate__bounceInDown animate-delay-05s flex flex-1 gap-5 rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
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
								<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
							</footer>
						</div>
					</div>
				</div>
			</main>
			<div className="ml-2 mt-[110px] flex h-[4.5rem] items-center justify-center rounded-sm bg-neutral-100 p-2 dark:bg-black">
				<Mouse size={40} />
			</div>
		</>
	);
}
