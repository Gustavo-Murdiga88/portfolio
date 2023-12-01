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
		<div
			id="controls"
			className="fixed right-controls top-1/2 z-50 -translate-y-1/2 translate-x-[100%] flex-col gap-7 rounded-[9999px] border border-neutral-600 bg-neutral-100 px-4 py-[40px] opacity-0 dark:border-neutral-dark-600 dark:bg-neutral-dark-100 lg:invisible lg:flex"
		>
			<Link
				aria-label="Home"
				data-control-link
				onClick={() => {
					changeStates("home");
				}}
				data-selected={selected === "home"}
				className="group duration-scale  hover:scale-110"
				href="#home"
			>
				<House className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				aria-label="Habilidades"
				data-control-link
				onClick={() => {
					changeStates("skills");
				}}
				data-selected={selected === "skills"}
				className="group duration-scale  hover:scale-110"
				href="#skills"
			>
				<Union className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-control-link
				aria-label="Linha do tempo"
				onClick={() => {
					changeStates("time_line");
				}}
				data-selected={selected === "time_line"}
				className="group duration-scale  hover:scale-110"
				href="#time_line"
			>
				<File className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
			<Link
				data-control-link
				aria-label="Sobre"
				onClick={() => {
					changeStates("about");
				}}
				data-selected={selected === "about"}
				className="group duration-scale  hover:scale-110"
				href="#about"
			>
				<User className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
			<Link
				aria-label="Projetos"
				data-control-link
				onClick={() => {
					changeStates("show_case");
				}}
				data-selected={selected === "show_case"}
				className="group duration-scale  hover:scale-110"
				href="#show_case"
			>
				<Square className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				aria-label="Contato"
				data-control-link
				onClick={() => {
					changeStates("contract");
				}}
				data-selected={selected === "contract"}
				className="group duration-scale  hover:scale-110"
				href="#contract"
			>
				<Mail className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
		</div>
	);
}
