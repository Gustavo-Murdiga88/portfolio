import { GitCommit } from "lucide-react";

import Img from "next/image";

export function Main() {
	return (
		<>
			<main className="mx-auto mt-[2.8125rem] grid max-w-page grid-cols-[679px_1fr] gap-5 px-5 pr-[26px]">
				{/* left */}
				<div className="flex flex-col gap-5">
					<div className="h-[320px] rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
						<div className="flex w-full gap-[14px]">
							<Img
								src="https://github.com/gustavo-murdiga88.png"
								height={256}
								width={232}
								className="rounded-br-md rounded-tl-md shadow-card"
								style={{
									height: 256,
									width: 232,
								}}
								alt="Gustavo Murdiga"
							/>
							<div className="flex w-full flex-col items-start justify-between">
								<span>
									<span className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Desenvolvedor front-end
									</span>
									<h1 className="mt-5 text-[54px] font-semibold leading-[60px]">
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
					<div className="h-[320px] w-full rounded-md bg-neutral-200 p-6 shadow-card dark:bg-neutral-dark-200">
						<div className="flex w-full gap-[14px]">
							<Img
								src="https://github.com/gustavo-murdiga88.png"
								height={256}
								width={232}
								className="rounded-br-md rounded-tl-md shadow-card"
								style={{
									height: 256,
									width: 232,
								}}
								alt="Gustavo Murdiga"
							/>
							<div className="flex w-full flex-col items-start justify-between">
								<span>
									<span className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 ">
										Desenvolvedor front-end
									</span>
									<h1 className="mt-5 text-[54px] font-semibold leading-[60px]">
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
				</div>
				{/* right */}
				<div className="flex flex-col gap-5">
					<div className="h-[42px] w-full rounded-md bg-neutral-200 p-2 px-8 shadow-card dark:bg-neutral-dark-200">
						<GitCommit />
					</div>
					<div className="flex h-[16.125rem] gap-5">
						<div className="flex-1 rounded-md bg-neutral-200  p-8 shadow-card dark:bg-neutral-dark-200">
							<Img
								src="https://github.com/gustavo-murdiga88.png"
								height={256}
								width={232}
								className="rounded-br-md rounded-tl-md shadow-card"
								style={{
									width: 191,
									height: 151,
								}}
								alt="Gustavo Murdiga"
							/>
							<footer className="mt-6 flex w-full items-center justify-between">
								<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
									Currículo
								</span>
								<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
							</footer>
						</div>
						<div className="flex-1 rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
							<Img
								src="https://github.com/gustavo-murdiga88.png"
								height={256}
								width={232}
								className="rounded-br-md rounded-tl-md shadow-card"
								style={{
									width: 191,
									height: 151,
								}}
								alt="Gustavo Murdiga"
							/>
							<footer className="mt-6 flex w-full items-center justify-between">
								<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
									Currículo
								</span>
								<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
							</footer>
						</div>
					</div>
					<div className="flex flex-1 gap-5 rounded-md bg-neutral-200 p-8 shadow-card dark:bg-neutral-dark-200">
						<div className="flex  flex-col justify-between">
							<div className="flex gap-7">
								<Img
									src="https://github.com/gustavo-murdiga88.png"
									height={256}
									width={232}
									style={{
										width: 135,
										height: 160,
									}}
									alt="Gustavo Murdiga"
								/>

								<Img
									src="https://github.com/gustavo-murdiga88.png"
									height={256}
									width={232}
									style={{
										width: 135,
										height: 160,
									}}
									alt="Gustavo Murdiga"
								/>

								<Img
									src="https://github.com/gustavo-murdiga88.png"
									height={256}
									width={232}
									style={{
										width: 135,
										height: 160,
									}}
									alt="Gustavo Murdiga"
								/>
							</div>
							<footer className="mt-6 flex w-full items-center justify-between">
								<span className="font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 ">
									Currículo
								</span>
								<GitCommit className="font-normal uppercase text-neutral-600 dark:text-neutral-dark-600 " />
							</footer>
						</div>
					</div>
				</div>
			</main>
			<div className="mt-[110px] flex h-[4.5rem] items-center justify-center bg-black p-2">
				<span className="relative inline-block h-[50px] w-8 rounded-md border-2 border-blue-200">
					<span className="absolute left-[45%] top-2 h-2 animate-bounce rounded-md border border-blue-200" />
				</span>
			</div>
		</>
	);
}
