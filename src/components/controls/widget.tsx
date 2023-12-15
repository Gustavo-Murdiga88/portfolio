"use client";

import { useEffect, useState } from "react";

import { Mail, User } from "lucide-react";
import Link from "next/link";

import { File } from "@/icons/file";
import { House } from "@/icons/house";
import { Square } from "@/icons/square";
import { Union } from "@/icons/union";

type ControlsProps =
	| "home"
	| "skills"
	| "time_line"
	| "show_case"
	| "contract"
	| "about";

export function Controls() {
	const [selected, setSelected] = useState<ControlsProps>("home");

	function changeStates(value: ControlsProps) {
		setSelected(value);
	}

	useEffect(() => {
		const searchNodes = document.querySelectorAll("[data-main='true']");

		const observer = new IntersectionObserver(
			(value) => {
				if (value[0].isIntersecting) {
					setSelected(value[0].target.id as ControlsProps);
				}
			},
			{
				threshold: [0.1],
			},
		);

		searchNodes.forEach((node) => {
			observer.observe(node);
		});

		return () => {
			searchNodes.forEach((node) => {
				observer.unobserve(node);
			});
		};
	}, []);

	return (
		<ul
			id="controls"
			className="fixed inset-x-0 bottom-0 z-50 flex flex-row items-center justify-between border border-neutral-600 bg-neutral-100 p-4 opacity-0 dark:border-neutral-dark-600 dark:bg-neutral-dark-100 lg:inset-x-auto lg:bottom-auto lg:right-controls lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-[100%] lg:flex-col lg:gap-7  lg:rounded-[9999px] lg:py-[40px]"
		>
			<li>
				<Link
					aria-label="Home"
					data-control-link
					onClick={() => {
						changeStates("home");
					}}
					data-selected={selected === "home"}
					className="group duration-scale hover:scale-110"
					href="#home"
					title="Home"
				>
					<span className="sr-only">Home</span>
					<House className="h-6 w-6 fill-zinc-950 group-data-[selected=true]:fill-blue-600 dark:fill-zinc-100" />
				</Link>
			</li>
			<li>
				<Link
					aria-label="Habilidades"
					data-control-link
					onClick={() => {
						changeStates("skills");
					}}
					data-selected={selected === "skills"}
					className="group duration-scale  hover:scale-110"
					href="#skills"
					title="Habilidades"
				>
					<span className="sr-only">Habilidades</span>
					<Union className="h-6 w-6 fill-zinc-950 group-data-[selected=true]:fill-blue-600 dark:fill-zinc-100" />
				</Link>
			</li>
			<li>
				<Link
					data-control-link
					aria-label="Linha do tempo"
					onClick={() => {
						changeStates("time_line");
					}}
					data-selected={selected === "time_line"}
					className="group duration-scale  hover:scale-110"
					href="#time_line"
					title="Linha do tempo"
				>
					<span className="sr-only">Linha</span>
					<File className="h-6 w-6 stroke-zinc-950 group-data-[selected=true]:stroke-blue-600 dark:stroke-zinc-100" />
				</Link>
			</li>
			<li>
				<Link
					data-control-link
					aria-label="Sobre"
					onClick={() => {
						changeStates("about");
					}}
					data-selected={selected === "about"}
					className="group duration-scale  hover:scale-110"
					href="#about"
					title="Sobre"
				>
					<span className="sr-only">Sobre</span>
					<User className="h-6 w-6 stroke-zinc-950 group-data-[selected=true]:stroke-blue-600 dark:stroke-zinc-100" />
				</Link>
			</li>
			<li>
				<Link
					aria-label="Projetos"
					data-control-link
					onClick={() => {
						changeStates("show_case");
					}}
					data-selected={selected === "show_case"}
					className="group duration-scale  hover:scale-110"
					href="#show_case"
					title="Projetos"
				>
					<span className="sr-only">Projetos</span>
					<Square className="h-6 w-6 fill-zinc-950 group-data-[selected=true]:fill-blue-600 dark:fill-zinc-100" />
				</Link>
			</li>
			<li>
				<Link
					aria-label="Contato"
					data-control-link
					onClick={() => {
						changeStates("contract");
					}}
					data-selected={selected === "contract"}
					className="group duration-scale  hover:scale-110"
					href="#contract"
					title="Contato"
				>
					<span className="sr-only">Contato</span>
					<Mail className="h-6 w-6 stroke-zinc-950 group-data-[selected=true]:stroke-blue-600 dark:stroke-zinc-100" />
				</Link>
			</li>
		</ul>
	);
}
