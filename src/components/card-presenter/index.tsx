import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ICardPresenter {
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
}: ICardPresenter) {
	return (
		<div
			data-aos="fade-up"
			data-aos-delay="20"
			className={twMerge(
				clsx(
					"flex min-h-[240px] flex-col gap-4 rounded-xs border border-neutral-400 p-4 px-10 shadow-[0px_4px_0px_#999999]",
				),
			)}
		>
			<figure>
				<Image
					src={imageUrl}
					height={120}
					width={120}
					className="mx-auto"
					loading="lazy"
					alt={title}
					title={title}
					aria-label={title}
				/>
			</figure>

			<article className="prose mx-auto p-4">
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
			</article>
		</div>
	);
}
