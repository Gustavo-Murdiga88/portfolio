import { ReactNode } from "react";

import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

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
		<html lang="en" className="dark">
			<body
				className={`${roboto.className} mx-auto my-20 max-w-page dark:bg-neutral-dark-100 dark:text-neutral-dark-900`}
			>
				{children}
			</body>
		</html>
	);
}
