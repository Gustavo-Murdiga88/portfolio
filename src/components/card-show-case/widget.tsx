import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import eslint from "@/assets/eslint.jpg";
import flutterBanner from "@/assets/flutter-banner.png";
import native from "@/assets/native.svg";
import nest from "@/assets/nestjs.svg";
import next from "@/assets/next-js.svg";
import node from "@/assets/node-banner.svg";
import react from "@/assets/react-banner.svg";
import vite from "@/assets/vitejs.svg";
import vscode from "@/assets/vscode.png";
import { cn } from "@/core/utils/fn";

const banners = {
	react,
	native,
	node,
	flutter: flutterBanner,
	next,
	eslint,
	vscode,
	vite,
	nest,
};

export interface IBannerProps {
	nameOfProject: string;
	details: string;
	repo?: string;
	url?: string;
	type?: keyof typeof banners;
}
interface ICardProps extends ComponentProps<"section">, IBannerProps {}

export function Card({
	nameOfProject,
	details,
	url,
	repo,
	type = "react",
	...props
}: ICardProps) {
	return (
		<article
			data-aos="fade-up"
			{...props}
			className="max-h-[25rem] w-[16.25rem] rounded-xs bg-card p-[0.125rem]"
		>
			<div className="flex h-full flex-col rounded-xs bg-neutral-dark-50 p-4">
				<figure>
					<Image
						draggable={false}
						height={109}
						width={260}
						src={banners[type]}
						alt={nameOfProject}
						loading="lazy"
						className={cn(
							"h-[6.8125rem] w-[16.25rem] rounded-xs object-contain",
							props.className,
						)}
					/>
				</figure>

				<header className="mb-3 mt-4 flex h-full flex-col gap-4 overflow-hidden">
					<span className="block text-base font-semibold text-neutral-100 ">
						{nameOfProject}
					</span>
					<p className="whitespace-break-space h-full flex-1 font-poppins text-[0.75rem] font-semibold text-neutral-300">
						{details.length > 280
							? details.substring(0, 280).concat("...")
							: details}
					</p>
				</header>
				<Link
					className="block rounded-[0.5rem] border-[0.125rem] border-purple-700 p-2 text-center text-[12px] font-bold transition-all hover:bg-purple-700"
					href={url || repo}
					aria-label={url ? "Ver projeto" : "Ver repositório"}
					target="_blank"
				>
					{url ? "Ver projeto" : "Ver repositório"}
				</Link>
			</div>
		</article>
	);
}
