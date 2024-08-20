import { Book, Github, Home, Linkedin } from "lucide-react";
import Link from "next/link";

import { Title } from "@/components/title";

export function SetupHeader() {
	return (
		<Title id="setup" title="Meus Equipamentos">
			<nav
				aria-label="Redes sociais"
				className="ml-auto flex items-center gap-4"
			>
				<nav aria-label="Ações" className="ml-auto flex items-center gap-2">
					<Link
						aria-labelledby="home"
						href="/"
						title="Página principal"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Home id="home" aria-label="Bíblia" size={20} />
					</Link>

					<Link
						aria-labelledby="bible"
						href="/daily-liturgy"
						title="Liturgia diária"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Book id="bible" aria-label="Bíblia" size={20} />
					</Link>

					<Link
						aria-labelledby="github"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Github id="github" aria-label="github" size={20} />
					</Link>
					<Link
						aria-labelledby="LinkedIn"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
						className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
					>
						<Linkedin id="LinkedIn" aria-label="LinkedIn" size={20} />
					</Link>
				</nav>
			</nav>
		</Title>
	);
}
