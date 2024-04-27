import Img from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import { cn } from "@/core/utils/fn";

export interface ITimeLineProps extends ComponentProps<"article"> {
	date: string;
	title: string;
	company: string;
	img: string;
	url: string;
	description?: string;
	type?: "xp" | "student";
}

export function TimeBox({
	company,
	date,
	title,
	description,
	type = "xp",
	url,
	img,
	...props
}: ITimeLineProps) {
	return (
		<article
			data-aos="fade-up"
			className={cn(
				"flex min-h-[250px] flex-col md:flex-row justify-start border-b-zinc-100 mx-6 [&:not(:last-child)]:border-b-[0.0625rem] py-4 md:mx-auto gap-6 md:gap-10 mr-auto[&+&]:mt-6",
			)}
			{...props}
		>
			<Link
				href={url}
				target="_blank"
				aria-label={company}
				className={cn("mx-auto py-2", type === "student" && "my-auto")}
			>
				<Img
					src={img}
					height={220}
					width={150}
					alt={company}
					loading="lazy"
					title={company}
					className="rounded-sm object-cover"
				/>
			</Link>

			<div className="flex flex-1 flex-col items-center justify-center md:items-start md:px-8">
				<header className="mb-1">
					<span className="text-[0.75rem] font-semibold text-neutral-400 md:text-base">
						{date}
					</span>
				</header>
				<section className="mb-1 flex flex-col items-center justify-center md:items-start">
					<h1 className="text-center text-lg font-bold text-neutral-dark-900 md:text-left md:text-xl">
						{title}
					</h1>
					<Link
						href={url}
						target="_blank"
						aria-label={company}
						className="mt-4 text-base font-semibold hover:text-blue-800 hover:underline hover:underline-offset-2 dark:text-neutral-100"
					>
						{company}
					</Link>
					<pre className="w-full flex-1 whitespace-pre-line font-poppins text-[12px] font-semibold leading-relaxed text-neutral-300 md:text-[0.875rem]">
						<span className="mb-1 mt-4 block font-semibold leading-none text-neutral-50">
							{type === "xp" ? "Função:" : ""}
						</span>
						<p className="text-balance break-before-auto text-start">
							{description}
						</p>
					</pre>
				</section>
			</div>
		</article>
	);
}
