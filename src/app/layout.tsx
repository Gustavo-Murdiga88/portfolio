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
			"https://chi01pap001files.storage.live.com/y4m6AbwJEoch3TeeJLv2ZZU_y_8aD0qqoHL9bHKOIjl_8ywwBX5fHErcY8mL8lDiL8qitQFoJQwxYOkxv_FMKP9bP9cdAQBe9_LlRzDzRaNSGCKADfdMft3XiOH59zvu_DxlyGT5Ute1SvbOuOox4sPlacA6rRnFfd095dfBsuDUhwNCvWsPfbIQIhGMBH1xTkfL1g9Vt618JR3KRIZzWMHwlC6GyZcxKD7TH9ZrDTDrZY?encodeFailures=1&width=928&height=928",
		],
	},
	twitter: {
		site: "@GuMurdiga",
		images: [
			"https://chi01pap001files.storage.live.com/y4m6AbwJEoch3TeeJLv2ZZU_y_8aD0qqoHL9bHKOIjl_8ywwBX5fHErcY8mL8lDiL8qitQFoJQwxYOkxv_FMKP9bP9cdAQBe9_LlRzDzRaNSGCKADfdMft3XiOH59zvu_DxlyGT5Ute1SvbOuOox4sPlacA6rRnFfd095dfBsuDUhwNCvWsPfbIQIhGMBH1xTkfL1g9Vt618JR3KRIZzWMHwlC6GyZcxKD7TH9ZrDTDrZY?encodeFailures=1&width=928&height=928",
		],
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
	],
};

const struttedData = {
	"@context": "http://schema.org/",
	"@type": "Person",
	name: "Gustavo Murdiga",
	image:
		"https://chi01pap002files.storage.live.com/y4m_-87hgkixy3wXUtV4p6FXUFCCq48jo0MCliQ5RhCCmVRiiMOC58atbt58p0cVApbf7GV_o9EMoiSUTmJZ0PCGXcYfwWvA5c0uKL9VYK8-gmEzgjiMz8q04sW9QbDFRb-Pz8Snpkd2zy_3LLfndClnoY1aIetm17mkCBgV9JmL0VRjMwSEmFy5rB-t5pAz-J4-KpxbODl4SUo6oJ4OGHkWw?encodeFailures=1&width=232&height=232",
	url: "https://gustavomurdiga.vercel.app/",
	jobTitle: "Desenvolvedor Full Stack",
	worksFor: {
		"@type": "Organization",
		name: "GM Dev",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-br" className="dark overflow-hidden">
			<head>
				<script
					key="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(struttedData) }}
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
