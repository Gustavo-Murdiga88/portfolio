import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: `Meus equipamentos 🤓`,
	description:
		"Com o tempo muitas pessoas me perguntam sobre meu periféricos no setup, a partir daí achei muito legal colocar aqui uma lista de todos os meus equipamentos para que vocês possam se espelhar ou até mesmo comprá-los. Desfrute de livros e equipamentos que venho adquirindo para melhorar minha experiência na criação de novas aplicações que mudam a vida das pessoas.",
	authors: [
		{
			name: "Gustavo Murdiga",
		},
	],
	appleWebApp: {
		capable: false,
		statusBarStyle: "black-translucent",
		title: "Liturgia Diária",
	},
	creator: "GM DEV",
	openGraph: {
		type: "article",
		locale: "pt-br",
		title: `Meus equipamentos 🤓`,
		description:
			"Com o tempo muitas pessoas me perguntam sobre meu periféricos no setup, a partir daí achei muito legal colocar aqui uma lista de todos os meus equipamentos para que vocês possam se espelhar ou até mesmo comprá-los. Desfrute de livros e equipamentos que venho adquirindo para melhorar minha experiência na criação de novas aplicações que mudam a vida das pessoas.",
		tags: ["gospel", "evangelho"],
		images: [
			"https://img.freepik.com/vetores-gratis/ilustracao-detalhada-da-sala-do-jogador_23-2148923561.jpg?t=st=1724184277~exp=1724187877~hmac=bfdb4335e66eec37aab5386c4ae17d7977ed385dbdf0dc0916d37eff26adfb5c&w=1024",
		],
	},
	twitter: {
		site: "@GuMurdiga",
		description:
			"Com o tempo muitas pessoas me perguntam sobre meu periféricos no setup, a partir daí achei muito legal colocar aqui uma lista de todos os meus equipamentos para que vocês possam se espelhar ou até mesmo comprá-los. Desfrute de livros e equipamentos que venho adquirindo para melhorar minha experiência na criação de novas aplicações que mudam a vida das pessoas.",
		title: `Meus equipamentos 🤓`,
		images: [
			"https://img.freepik.com/vetores-gratis/ilustracao-detalhada-da-sala-do-jogador_23-2148923561.jpg?t=st=1724184277~exp=1724187877~hmac=bfdb4335e66eec37aab5386c4ae17d7977ed385dbdf0dc0916d37eff26adfb5c&w=1024",
		],
	},
};

export default function SetupLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
