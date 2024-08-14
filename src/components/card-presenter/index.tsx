import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICardPresenter extends ComponentProps<"div"> {
	imageUrl: string;
	title: string;
	urlDoc: string;
}
export function CardPresenter({
	imageUrl,
	title,
	urlDoc,
	className,
	...rest
}: ICardPresenter) {
	return (
		<div
			{...rest}
			className={twMerge(
				clsx(
					className,
					"flex items-center gap-4 rounded-xs border p-6 shadow-[0px_4px_0px_#999999] lg:px-10",
				),
			)}
		>
			<Link role="link" href={urlDoc} target="_blank" aria-label={urlDoc}>
				<Image
					src={imageUrl}
					height={110}
					width={110}
					loading="lazy"
					fetchPriority="auto"
					decoding="async"
					alt={title}
					title={title}
					aria-label={title}
				/>
			</Link>
		</div>
	);
}
