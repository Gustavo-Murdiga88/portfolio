import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Liturgia Diária 🙏",
	description: "Aqui será mostrado à você a liturgia diária da igreja católica",
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
		locale: "Pt-br",
		title: "Liturgia diária",
		description: "Liturgia diária",
		tags: ["gospel", "evangelho"],
		images: [
			"https://1drv.ms/i/c/a37e0f73b46925c9/UQPJJWm0cw9-IICjyA8AAAAAADMOnQ4yAdE9meQ?width=1024",
		],
	},
	twitter: {
		site: "@GuMurdiga",
		description: "Liturgia diária",
		title: "Tenha sua minuto de fé!",
		images: [
			"https://1drv.ms/i/c/a37e0f73b46925c9/UQPJJWm0cw9-IICjyA8AAAAAADMOnQ4yAdE9meQ?width=1024",
		],
	},
};

export default function DailyLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
