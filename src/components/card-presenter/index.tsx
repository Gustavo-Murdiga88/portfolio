import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICardPresenter extends ComponentProps<"div"> {
	imageUrl: string;
	title: string;
	description: string;
	urlDoc: string;
}
export function CardPresenter({
	description,
	imageUrl,
	title,
	urlDoc,
	className,
	...rest
}: ICardPresenter) {
	return (
		<div
			{...rest}
			data-aos="fade-up"
			data-aos-delay="20"
			className={twMerge(
				clsx(
					className,
					"relative flex min-h-[240px] flex-col gap-4 rounded-xs border border-neutral-400 p-1 pt-4 text-center shadow-[0px_4px_0px_#999999] lg:p-4 lg:px-10",
				),
			)}
		>
			<div className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 blur-[200px] md:h-1/2 md:w-1/2  md:blur-[18.75rem] " />
			<div className="z-10 flex flex-col justify-center">
				<figure className="mx-auto">
					<Image
						src={imageUrl}
						height={120}
						width={120}
						loading="lazy"
						alt={title}
						title={title}
						aria-label={title}
					/>
				</figure>

				<article className="prose mx-auto p-4">
					<Link
						role="link"
						className="text-sm text-neutral-100 no-underline transition-colors hover:text-blue-600 hover:underline md:text-lg"
						href={urlDoc}
						target="_blank"
						aria-label={urlDoc}
					>
						{title}
					</Link>
					<p className="prose text-[0.75rem] text-neutral-950 dark:text-neutral-50 md:text-[0.875rem]">
						{description}
					</p>
				</article>
			</div>
		</div>
	);
}
