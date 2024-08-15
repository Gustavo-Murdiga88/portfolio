import "./globals.css";
import "@/lib/nodemailer";

import { Viewport } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";

import { options, struttedData, struttedDataOrganization } from "./meta";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-poppins",
});

export const metadata = options;
export const viewport: Viewport = {
	maximumScale: 1,
	minimumScale: 1,
	viewportFit: "auto",
	colorScheme: "dark light",
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#121214" },
		{ media: "(prefers-color-scheme: light)", color: "#c3c3c3" },
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-br" className="dark" suppressHydrationWarning>
			<body
				className={`${poppins.className} ${poppins.variable} min-h-screen bg-neutral-100 font-poppins antialiased dark:bg-neutral-dark-1100 dark:text-neutral-dark-900`}
			>
				<Toaster />
				{children}
				<section>
					<script
						type="application/ld+json"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: JSON.stringify(struttedData) }}
					/>
					<script
						type="application/ld+json"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(struttedDataOrganization),
						}}
					/>
				</section>
			</body>
		</html>
	);
}
