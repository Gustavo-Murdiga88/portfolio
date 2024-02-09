import "./globals.css";
import "@/lib/aos";
import "@/lib/nodemailer";

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

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-br" className="dark">
			<head>
				<meta
					name="google-site-verification"
					content="WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg"
				/>
			</head>
			<body
				className={`${poppins.className} ${poppins.variable} bg-neutral-100 font-poppins antialiased dark:bg-neutral-dark-1100 dark:text-neutral-dark-900`}
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
