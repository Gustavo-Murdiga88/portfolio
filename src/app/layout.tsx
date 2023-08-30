import { ReactNode } from "react";

import "./globals.css";

import { Instagram, Linkedin, Sun } from "lucide-react";

import { Github } from "@/icons/github";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Hey, i am Gustavo",
	description:
		"This is a project for display to recrutes and all developers my skills and i can help to world a grow more happier",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className}  my-8 h-screen dark:bg-neutral-dark-100 dark:text-neutral-dark-900`}
			>
				<header className="mx-auto flex max-w-page justify-between border-b border-b-neutral-300 bg-neutral-dark-100 px-5 py-4 pr-4">
					<Link href="/">
						<strong className="uppercase text-blue-200 transition-colors hover:text-blue-dark-700 dark:text-blue-dark-200 dark:hover:text-blue-dark-700">
							Home
						</strong>
					</Link>
					<button
						type="button"
						className="transition-all hover:brightness-150 "
					>
						<Sun className="text-neutral-600 dark:text-neutral-dark-600" />
					</button>
					<div className="flex gap-4 text-neutral-600 dark:text-neutral-dark-600">
						<Link
							className="transition-all hover:brightness-150"
							href="/"
							target="_blank"
						>
							<Github />
						</Link>
						<Link
							className="transition-all hover:brightness-150"
							href="/"
							target="_blank"
						>
							<Linkedin />
						</Link>
						<Link
							className="transition-all hover:brightness-150"
							href="/"
							target="_blank"
						>
							<Instagram />
						</Link>
					</div>
				</header>

				{children}
			</body>
		</html>
	);
}
