"use client";

import { GraduationCap, Home, Mail, Shapes, Tv, User } from "lucide-react";
import Link from "next/link";

import { useControls } from "./hooks";

export function Controls() {
	const { selected } = useControls();

	return (
		<nav className="fixed inset-x-0 bottom-2 z-50 mx-2 animate-fade-in rounded-sm border border-neutral-600 bg-neutral-100 p-2 dark:border-neutral-dark-600 dark:bg-neutral-dark-100 xl:inset-x-auto xl:bottom-auto xl:right-[4.75rem] xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-full xl:rounded-[9999px] xl:py-[40px] 2xl:right-controls">
			<ul
				role="menu"
				aria-label="Navegação principal"
				id="controls"
				className="flex flex-row items-center justify-evenly xl:flex-col xl:gap-7"
			>
				<li role="menuitem">
					<Link
						aria-label="Home"
						data-control-link
						data-selected={selected === "home"}
						className="duration-scale group hover:scale-110"
						href="#home"
						title="Home"
					>
						<span className="sr-only">Home</span>
						<Home className="size-6 group-data-[selected=true]:stroke-blue-600" />
					</Link>
				</li>
				<li role="menuitem">
					<Link
						aria-label="Habilidades"
						data-control-link
						data-selected={selected === "skills"}
						className="duration-scale group hover:scale-110"
						href="#skills"
						title="Habilidades"
					>
						<span className="sr-only">Habilidades</span>
						<Shapes className="m-1 size-6 group-data-[selected=true]:stroke-blue-600" />
					</Link>
				</li>
				<li role="menuitem">
					<Link
						data-control-link
						aria-label="Linha do tempo"
						data-selected={selected === "time_line"}
						className="duration-scale group hover:scale-110"
						href="#time_line"
						title="Linha do tempo"
					>
						<span className="sr-only">Linha</span>
						<GraduationCap className="size-6 stroke-zinc-950 group-data-[selected=true]:stroke-blue-600 dark:stroke-zinc-100" />
					</Link>
				</li>
				<li role="menuitem">
					<Link
						data-control-link
						aria-label="Sobre"
						data-selected={selected === "about"}
						className="duration-scale group hover:scale-110"
						href="#about"
						title="Sobre"
					>
						<span className="sr-only">Sobre</span>
						<User className="size-6 stroke-zinc-950 group-data-[selected=true]:stroke-blue-600 dark:stroke-zinc-100" />
					</Link>
				</li>
				<li role="menuitem">
					<Link
						aria-label="Projetos"
						data-control-link
						data-selected={selected === "show_case"}
						className="duration-scale group hover:scale-110"
						href="#show_case"
						title="Projetos"
					>
						<span className="sr-only">Projetos</span>
						<Tv className="size-6 group-data-[selected=true]:stroke-blue-600" />
					</Link>
				</li>
				<li role="menuitem">
					<Link
						aria-label="Contato"
						data-control-link
						data-selected={selected === "contact"}
						className="duration-scale group hover:scale-110"
						href="#contact"
						title="Contato"
					>
						<span className="sr-only">Contato</span>
						<Mail className="size-6 stroke-zinc-950 group-data-[selected=true]:stroke-blue-600 dark:stroke-zinc-100" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
