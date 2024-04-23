import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { Controls } from "@/components/controls/widget";
import { Title } from "@/components/title";
import { About } from "@/modules/about/presenter";
import { Contact } from "@/modules/contact/presenter";
import { Main } from "@/modules/main/presenter";
import { ShowCase } from "@/modules/show_case/presenter";
import { Skills } from "@/modules/skills/presenter";
import { TimeLine } from "@/modules/time_line/presenter";

export default function Home() {
	return (
		<>
			<Title id="home" dataMain title="Apresentação" animation={false}>
				<nav aria-label="Redes sociais" className="ml-auto flex gap-4">
					<Link
						aria-label="github"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<span className="sr-only">github</span>
						<Github />
					</Link>
					<Link
						aria-label="LinkedIn"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<span className="sr-only">LinkedIn</span>
						<Linkedin />
					</Link>
				</nav>
			</Title>
			<Controls />
			<main>
				<Main />
				<Skills />
				<TimeLine />
				<About />
				<ShowCase />
				<Contact />
			</main>
		</>
	);
}
