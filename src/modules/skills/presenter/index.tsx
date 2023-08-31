import { Docker } from "@/icons/docker";
import { Fastify } from "@/icons/fastify";
import { Next } from "@/icons/next";
import { Node } from "@/icons/node";
import { Radix } from "@/icons/radix";
import { React } from "@/icons/react";
import { TypeScript } from "@/icons/typesctipt";
import { Vite } from "@/icons/vite";

export function Skills() {
	return (
		<div className="mx-auto mb-[100px] max-w-page">
			<strong className="inline-block w-full max-w-page border-b border-b-neutral-300 bg-neutral-dark-100 px-5 py-4">
				<span className="cursor-default uppercase text-neutral-600 transition-colors hover:text-blue-dark-700 dark:text-neutral-dark-600 dark:hover:text-blue-dark-700">
					habilidades
				</span>
			</strong>

			<main className="mt-[64px] flex flex-wrap justify-center gap-x-[77px] gap-y-[64px]">
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<Next className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<Fastify className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<Node className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<Docker className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<React className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<TypeScript className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<Vite className="h-[48.193px] w-20" />
				</div>
				<div className="flex h-[126px] w-[145px] items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-dark-200">
					<Radix className="h-[48.193px] w-20" />
				</div>
			</main>

			<div className="mx-auto mt-[80px] h-[2px] w-[490px] rounded-full bg-blue-200" />

			<p className="mx-auto mt-5 w-[956px] text-center text-xs font-semibold leading-relaxed text-neutral-700 dark:text-neutral-dark-700">
				Além destas, tenho visado durante minha jornada a especialização em
				tecnologias que englobam todo o ecossistema Node.JS, tanto no front-end
				como também no back-end, e também em DevOps, almejando alcançar o STAGE
				FULL CYCLE.
			</p>
		</div>
	);
}
