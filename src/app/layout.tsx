import { ReactNode } from "react";

import "animate.css";
import "./globals.css";

import "@/lib/aos";
import "@/lib/nodemailer";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { TypeComponent } from "@/components/type/widget";
import { ToastContainer } from "@/lib/toastfy";

const roboto = Roboto_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Hey, i am Gustavo",
	description:
		"This is a project for display to recrutes and all developers my skills and i can help to world a grow more happier",
	authors: [
		{
			name: "Gustavo Murdiga",
			url: "https://github.com/Gustavo-Murdiga88",
		},
	],
	category: "Portfólios",
	creator: "GM Dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-br" className="dark overflow-hidden">
			<body
				className={`${roboto.className} mt-8 overflow-hidden bg-neutral-100 px-4 antialiased scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 dark:bg-neutral-dark-100 dark:text-neutral-dark-900 md:px-0`}
			>
				<ToastContainer />
				<TypeComponent />

				{children}
			</body>
		</html>
	);
}
