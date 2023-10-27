"use client";

import { useEffect, useRef } from "react";

import { Mail, User } from "lucide-react";
import Link from "next/link";

import { File } from "@/icons/file";
import { House } from "@/icons/house";
import { Square } from "@/icons/square";
import { Union } from "@/icons/union";

export function Controls() {
	function setDataSelected(value: string, state: "true" | "false") {
		const element = document.querySelector(`[href='#${value}']`) as HTMLElement;
		if (element) {
			element.dataset.selected = state;
		}
	}

	function changeStates(value: string) {
		const nodes = document.querySelectorAll("[data-control-link='true']");
		nodes.forEach((node) => {
			const element = node as HTMLElement;
			if (node.id === value) {
				element.dataset.selected = "true";
				return;
			}

			element.dataset.selected = "false";
		});
	}

	useEffect(() => {
		const searchNodes = document.querySelectorAll("[data-main='true']");

		const observer = new IntersectionObserver(
			(value) => {
				const isCurrentInvisible = value.filter(
					(value) => Number(value.intersectionRatio.toFixed(2)) <= 0.2,
				);

				isCurrentInvisible.forEach((node) => {
					const { id } = node.target;

					setDataSelected(id, "false");
				});

				const isCurrentVisible = value.find(
					(value) => Number(value.intersectionRatio.toFixed(2)) >= 0.3,
				);
				const id = isCurrentVisible?.target.id;

				if (id) {
					setDataSelected(id, "true");
				}
			},
			{
				threshold: [0.2, 0.3],
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
				data-control-link
				onClick={() => {
					changeStates("home");
				}}
				data-selected="false"
				className="group duration-scale  hover:scale-110"
				href="#home"
			>
				<House className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-control-link
				onClick={() => {
					changeStates("skills");
				}}
				data-selected="false"
				className="group duration-scale  hover:scale-110"
				href="#skills"
			>
				<Union className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-control-link
				onClick={() => {
					changeStates("time_line");
				}}
				data-selected="false_line"
				className="group duration-scale  hover:scale-110"
				href="#time_line"
			>
				<File className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
			<Link
				data-control-link
				onClick={() => {
					changeStates("about");
				}}
				data-selected="false"
				className="group duration-scale  hover:scale-110"
				href="#about"
			>
				<User className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
			<Link
				data-control-link
				onClick={() => {
					changeStates("show_case");
				}}
				data-selected="false"
				className="group duration-scale  hover:scale-110"
				href="#show_case"
			>
				<Square className="group-data-[selected=true]:fill-blue-600" />
			</Link>
			<Link
				data-control-link
				onClick={() => {
					changeStates("contract");
				}}
				data-selected="false"
				className="group duration-scale  hover:scale-110"
				href="#contract"
			>
				<Mail className="group-data-[selected=true]:stroke-blue-600" />
			</Link>
		</div>
	);
}
