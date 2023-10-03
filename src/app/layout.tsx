import { ReactNode } from "react";

import "animate.css";
import "./globals.css";

import "@/lib/aos";
import "@/lib/nodemailer";

import { Instagram, Linkedin, Sun } from "lucide-react";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

import { ThemeButton } from "@/components/theme_button/widget";
import { TypeComponent } from "@/components/type/widget";
import { Github } from "@/icons/github";

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
		<html lang="pt-br" className="dark overflow-hidden">
			<body
				className={`${roboto.className} mt-8 overflow-hidden bg-neutral-100 px-4 antialiased scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 dark:bg-neutral-dark-100 dark:text-neutral-dark-900 md:px-0`}
			>
				<TypeComponent />
				<header className="animate__animated animated_stop animate__bounceInDown animate-delay-01s mx-auto flex max-w-page justify-between overflow-hidden border-b border-b-neutral-300 bg-neutral-100 px-5 py-4 pr-4 dark:bg-neutral-dark-100">
					<strong className="uppercase text-blue-200 transition-colors hover:text-blue-dark-700 dark:text-blue-dark-200 dark:hover:text-blue-dark-700">
						Home
					</strong>
					<ThemeButton />
					<div className="flex gap-4 text-neutral-600 dark:text-neutral-dark-600">
						<Link
							className="h-6 w-6 transition-all hover:brightness-150"
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
