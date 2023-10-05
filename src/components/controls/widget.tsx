"use client";

import { useState } from "react";

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
	| "about"
	| "show_case"
	| "contract";

export function Controls() {
	const [current, setCurrent] = useState<ControlsProps>("home");

	function handleChangeCurrent(value: ControlsProps) {
		setCurrent(value);
	}

	return (
		<div
			id="controls"
			className="fixed right-controls top-1/2 z-50 -translate-y-1/2 translate-x-[100%] flex-col gap-7 rounded-[9999px] border border-neutral-600 bg-neutral-100 px-4 py-[40px] opacity-0 dark:border-neutral-dark-600 dark:bg-neutral-dark-100 lg:invisible lg:flex"
		>
			<Link
				data-selected={current === "home"}
				className="group duration-scale  hover:scale-110"
				href="#home"
				onClick={() => {
					handleChangeCurrent("home");
				}}
			>
				<House className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-selected={current === "skills"}
				className="group duration-scale  hover:scale-110"
				href="#skills"
				onClick={() => {
					handleChangeCurrent("skills");
				}}
			>
				<Union className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-selected={current === "time_line"}
				className="group duration-scale  hover:scale-110"
				href="#time_line"
				onClick={() => {
					handleChangeCurrent("time_line");
				}}
			>
				<File className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
			<Link
				data-selected={current === "about"}
				className="group duration-scale  hover:scale-110"
				href="#about"
				onClick={() => {
					handleChangeCurrent("about");
				}}
			>
				<User className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
			<Link
				data-selected={current === "show_case"}
				className="group duration-scale  hover:scale-110"
				href="#show_case"
				onClick={() => {
					handleChangeCurrent("show_case");
				}}
			>
				<Square className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-selected={current === "contract"}
				className="group duration-scale  hover:scale-110"
				href="#contract"
				onClick={() => {
					handleChangeCurrent("contract");
				}}
			>
				<Mail className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
		</div>
	);
}
