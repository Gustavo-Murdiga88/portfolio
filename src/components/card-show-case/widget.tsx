import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import eslint from "@/assets/eslint.svg";
import flutter from "@/assets/flutter.svg";
import native from "@/assets/native.svg";
import nest from "@/assets/nestjs.svg";
import next from "@/assets/nextjs.svg";
import node from "@/assets/node-banner.svg";
import react from "@/assets/react-banner.svg";
import vite from "@/assets/vitejs.svg";
import vscode from "@/assets/vscode.svg";

const banners = {
  react,
  native,
  node,
  flutter,
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
      {...props}
      className="rounded-xs bg-card p-0.5 md:max-h-[400px] md:w-[16.25rem]"
    >
      <div className="flex h-full flex-col gap-2 rounded-xs bg-neutral-dark-50 p-4">
        <figure className="flex h-[6.875rem] items-center justify-center rounded-xs bg-zinc-800/50 [&_img]:max-h-[6.25rem]">
          <Image
            draggable={false}
            height={90}
            width={240}
            src={banners[type]}
            alt={nameOfProject}
            loading="lazy"
            decoding="async"
            className="aspect-square rounded-xs"
          />
        </figure>

        <header className="mb-3 mt-4 flex flex-col gap-4 overflow-hidden">
          <span className="block text-base font-semibold text-neutral-100">
            {nameOfProject}
          </span>
          <p className="line-clamp-5 h-full flex-1 whitespace-break-spaces font-poppins text-[0.75rem] font-semibold text-neutral-300">
            {details}
          </p>
        </header>
        <Link
          className="mt-auto block rounded-[0.5rem] border-[0.125rem] border-purple-700 p-2 text-center text-[12px] font-bold transition-all hover:bg-purple-700"
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
