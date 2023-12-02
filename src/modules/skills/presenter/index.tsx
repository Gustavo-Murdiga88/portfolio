import Image from "next/image";

import docker from "@/assets/docker.svg";
import expo from "@/assets/expo.svg";
import fastify from "@/assets/fastify.svg";
import flutter from "@/assets/flutter.svg";
import nest from "@/assets/nestjs.svg";
import next from "@/assets/nextjs.svg";
import radixui from "@/assets/radix-ui.svg";
import react from "@/assets/react.svg";
import typescript from "@/assets/typescript.svg";
import vitejs from "@/assets/vitejs.svg";
import { Tooltip } from "@/components/tooltip";
import { Node } from "@/icons/node";

export function Skills() {
	return (
		<section
			data-main
			className="flex justify-center lg:min-h-content-height"
			id="skills"
		>
			<div className="flex max-w-page flex-col justify-evenly">
				<div>
					<strong className="inline-block w-full max-w-page border-b border-b-neutral-300 bg-neutral-100 px-5 py-4 dark:bg-neutral-dark-100">
						<span className="cursor-default uppercase text-neutral-600 transition-colors hover:text-blue-dark-700 dark:text-neutral-dark-600 dark:hover:text-blue-dark-700">
							habilidades
						</span>
					</strong>

					<main className="mt-[64px] flex flex-wrap justify-center gap-5 gap-y-[64px] md:gap-x-[77px]">
						<Tooltip text="NextJs">
							<div
								data-aos="fade-up"
								data-aos-delay="10"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={next}
									height={80}
									width={80}
									loading="lazy"
									alt="NextJS"
									title="NextJs"
									aria-label="NextJs"
									className="dark:invert"
								/>
							</div>
						</Tooltip>
						<Tooltip text="Fastify">
							<div
								data-aos="fade-up"
								data-aos-delay="50"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={fastify}
									height={80}
									width={80}
									loading="lazy"
									alt="Fastify"
									title="Fastify"
									aria-label="Fastify"
									className="dark:invert"
								/>
							</div>
						</Tooltip>

						<Tooltip text="Node Js">
							<div
								data-aos="fade-up"
								data-aos-delay="100"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Node className="h-[48.193px] w-20" />
							</div>
						</Tooltip>

						<Tooltip text="Docker">
							<div
								data-aos="fade-up"
								data-aos-delay="150"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={docker}
									height={80}
									width={80}
									loading="lazy"
									alt="Docker"
									title="Docker"
									aria-label="Docker"
								/>
							</div>
						</Tooltip>

						<Tooltip text="React">
							<div
								data-aos="fade-up"
								data-aos-delay="200"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={react}
									height={80}
									width={80}
									loading="lazy"
									alt="React"
									title="React"
									aria-label="React"
								/>
							</div>
						</Tooltip>

						<Tooltip text="TypeScript">
							<div
								data-aos="fade-up"
								data-aos-delay="250"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={typescript}
									height={80}
									width={80}
									loading="lazy"
									alt="Typescript"
									title="Typescript"
									aria-label="Typescript"
								/>
							</div>
						</Tooltip>

						<Tooltip text="Vite JS">
							<div
								data-aos="fade-up"
								data-aos-delay="300"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={vitejs}
									height={80}
									width={80}
									loading="lazy"
									alt="ViteJs"
									title="ViteJs"
									aria-label="ViteJs"
								/>
							</div>
						</Tooltip>

						<Tooltip text="Radix-ui">
							<div
								data-aos="fade-up"
								data-aos-delay="350"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={radixui}
									height={80}
									width={80}
									loading="lazy"
									alt="Radix-ui"
									title="Radix-ui"
									aria-label="Radix-ui"
									className="dark:invert"
								/>
							</div>
						</Tooltip>

						<Tooltip text="Flutter">
							<div
								data-aos="fade-up"
								data-aos-delay="400"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={flutter}
									height={80}
									width={80}
									loading="lazy"
									alt="Flutter logo"
									title="Flutter"
									aria-label="Flutter logo"
								/>
							</div>
						</Tooltip>

						<Tooltip text="Nest JS ">
							<div
								data-aos="fade-up"
								data-aos-delay="450"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={nest}
									height={80}
									width={80}
									loading="lazy"
									alt="NestJS logo"
									title="NestJS"
									aria-label="NestJS Logo"
								/>
							</div>
						</Tooltip>

						<Tooltip text="Expo">
							<div
								data-aos="fade-up"
								data-aos-delay="500"
								className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200"
							>
								<Image
									src={expo}
									height={80}
									width={80}
									loading="lazy"
									alt="Expo react"
									title="Expo"
									aria-label="Expo"
								/>
							</div>
						</Tooltip>
					</main>

					<div className="mx-auto mt-[80px] h-[2px] w-full rounded-full bg-blue-200 lg:w-[490px]" />
				</div>
				<div>
					<p
						data-aos="fade-up"
						data-aos-delay="350"
						className="mx-auto mb-10 mt-5 text-center text-xs font-semibold leading-relaxed text-neutral-700 dark:text-neutral-dark-700 lg:mb-0 lg:w-[956px]"
					>
						Além destas, tenho visado durante minha jornada a especialização em
						tecnologias que englobam todo o ecossistema Node.JS, tanto no
						front-end como também no back-end, e também em DevOps, almejando
						alcançar o STAGE FULL CYCLE.
					</p>
				</div>
			</div>
		</section>
	);
}
