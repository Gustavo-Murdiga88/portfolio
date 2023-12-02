import { ReactNode } from "react";

import "animate.css";
import "./globals.css";

import "@/lib/aos";
import "@/lib/nodemailer";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { ToastContainer } from "@/lib/toastfy";

const roboto = Roboto_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://gustavomurdiga.vercel.app/"),
	alternates: {
		canonical: "/",
	},
	title: "Olá, eu sou o Gustavo!",
	description:
		"Este é um projeto para exibir às recrutas e a todos os desenvolvedores as minhas habilidades, mostrando que posso contribuir para tornar o mundo um lugar mais feliz.",
	authors: [
		{
			name: "Gustavo Murdiga",
			url: "https://github.com/Gustavo-Murdiga88",
		},
	],
	openGraph: {
		type: "profile",
		title: "Olá, eu sou o Gustavo!",
		url: "https://gustavomurdiga.vercel.app/",
		description:
			"Este projeto visa destacar minhas habilidades para recrutadores e desenvolvedores, demonstrando minha capacidade de contribuir para a criação de um mundo mais feliz.",
		firstName: "Gustavo",
		lastName: "Murdiga",
		username: "Gustavo Murdiga",
		images: [
			"https://onedrive.live.com/embed?resid=A37E0F73B46925C9%214040&authkey=%21ADMOnQ4yAdE9meQ&width=1500&height=1500",
		],
	},
	twitter: {
		site: "@GuMurdiga",
		description:
			"Este projeto visa destacar minhas habilidades para recrutadores e desenvolvedores, demonstrando minha capacidade de contribuir para a criação de um mundo mais feliz.",
		title: "Olá, eu sou o Gustavo!",
	},
	category: "Portfólios",
	creator: "GM Dev",
	keywords: [
		"Desenvolvedor",
		"Jaú",
		"Desenvolvedor em Jaú",
		"Tecnologia em Jaú",
		"Computadores",
		"gmdev",
		"GM Dev",
		"Gustavo Murdiga",
		"GMDEV",
	],
};

const struttedData = {
	"@context": "http://schema.org/",
	"@type": "LocalBusiness",
	name: "Gustavo Murdiga",
	image:
		"https://onedrive.live.com/embed?resid=A37E0F73B46925C9%214040&authkey=%21ADMOnQ4yAdE9meQ&width=1500&height=1500",
	url: "https://gustavomurdiga.vercel.app/",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Luiz zanolla",
		addressLocality: "Jaú",
		addressRegion: "São Paulo",
		postalCode: "17209527",
		addressCountry: "Brazil",
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:00",
			closes: "17:30",
		},
	],
};

const struttedDataOrganization = {
	"@context": "http://schema.org/",
	"@type": "Organization",
	name: "GM Dev",
	logo: "https://onedrive.live.com/embed?resid=A37E0F73B46925C9%214040&authkey=%21ADMOnQ4yAdE9meQ&width=1500&height=1500",
	url: "https://gustavomurdiga.vercel.app/",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Luiz zanolla",
		addressLocality: "Jaú",
		addressRegion: "São Paulo",
		postalCode: "17209527",
		addressCountry: "Brazil",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-br" className="dark">
			<head>
				<meta
					name="google-site-verification"
					content="WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(struttedData) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(struttedDataOrganization),
					}}
				/>
			</head>
			<body
				className={`${roboto.className} mt-8 overflow-hidden bg-neutral-100 px-4 antialiased scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 dark:bg-neutral-dark-100 dark:text-neutral-dark-900 md:px-0`}
			>
				<ToastContainer />

				{children}
			</body>
		</html>
	);
}
