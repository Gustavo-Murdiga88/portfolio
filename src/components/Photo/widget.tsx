"use client";

import { ComponentProps } from "react";

import Image from "next/image";
import Link from "next/link";

interface IPhotoProps extends ComponentProps<"section"> {
	url: string;
	nameOfProject: string;
	details: string;
	labels: string[];
	repo: string;
}

export function Photo({
	url,
	nameOfProject,
	details,
	labels,
	repo,
	...props
}: IPhotoProps) {
	return (
		<section
			data-aos="fade-up"
			data-aos-delay="200"
			{...props}
			className="mx-auto mb-10 max-w-page lg:mb-20"
		>
			<figure>
				<Image
					draggable={false}
					height={1920}
					width={1080}
					src={url}
					quality={100}
					alt={nameOfProject}
					loading="lazy"
					className={`h-[350px] w-full rounded-md object-cover p-0  shadow-card lg:h-[530px] lg:w-[1245px] ${props.className}`}
				/>
				<div className="absolute left-5 top-4 flex w-[326px] flex-wrap gap-5 md:w-auto">
					{labels.map((label) => (
						<span
							key={label}
							className="whitespace-nowrap rounded-[999px] bg-neutral-100 px-4 py-1 text-xs font-normal text-neutral-600 dark:bg-neutral-dark-100 dark:text-neutral-dark-600 lg:text-[20px]"
						>
							{label}
						</span>
					))}
				</div>
			</figure>

			<div className="mt-6">
				<Link
					className="mt-5 block text-sm font-bold underline-offset-2 transition-all hover:text-blue-600 hover:underline"
					href={repo}
					aria-label="Acesse o repositório"
					target="_blank"
				>
					Acesse o repositório
				</Link>
				<span className="text-sm uppercase text-neutral-600 dark:text-neutral-dark-600 lg:text-xl">
					{nameOfProject} - {details}
				</span>
			</div>
		</section>
	);
}
