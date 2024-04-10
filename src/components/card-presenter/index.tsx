import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ICardPresenter {
	imageUrl: string;
	title: string;
	description: string;
	side: "left" | "right";
	urlDoc: string;
}
export function CardPresenter({
	description,
	imageUrl,
	title,
	side,
	urlDoc,
}: ICardPresenter) {
	return (
		<article
			data-aos="fade-up"
			data-aos-delay="20"
			className={twMerge(
				clsx(
					"flex min-h-[240px] w-full flex-col items-center justify-center gap-4 rounded-xs border border-neutral-400 p-4 px-10 shadow-[0px_4px_0px_#999999] lg:flex-row lg:justify-between lg:gap-0",
				),
			)}
		>
			<Image
				src={imageUrl}
				height={120}
				className={clsx(side === "left" ? "" : "lg:order-2", "mx-auto")}
				width={120}
				loading="lazy"
				alt="NextJS"
				title="NextJs"
				aria-label="NextJs"
			/>

			<figure className="prose mx-auto w-full lg:max-w-[65%]">
				<Link
					role="link"
					className="text-lg text-neutral-100 no-underline transition-colors hover:text-blue-600 hover:underline"
					href={urlDoc}
					target="_blank"
					aria-label={urlDoc}
				>
					{title}
				</Link>
				<p className="prose text-neutral-950 dark:text-neutral-50">
					{description}
				</p>
			</figure>
		</article>
	);
}
