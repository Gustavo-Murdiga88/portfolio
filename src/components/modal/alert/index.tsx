"use client";

import React from "react";

import { X } from "lucide-react";

import * as Dialog from "@radix-ui/react-dialog";

interface IModalProps {
	open: boolean;
	onCancel: () => void;
	variant: "success" | "failure";
}
const defaultStyle =
	"absolute inset-x-0 top-0 flex h-52 items-center justify-center border-b-2 border-b-neutral-100 p-6 text-center text-3xl font-bold leading-none" as const;
const messages = {
	failure:
		"Oh! Que estranho, algo de errado aconteceu, por favor aguarde alguns minutos e tente novamente!",
	success:
		"Hey! Muito obrigado poe nos enviar uma mensagem, fique tranquilo que logo já responderei, muito obrigado e até mais! 😎",
} as const;

export function ModalAlert({ onCancel, open, variant }: IModalProps) {
	return (
		<Dialog.Root open={open}>
			<Dialog.Trigger asChild />
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm" />
				<Dialog.Content
					onEscapeKeyDown={onCancel}
					id="modalContent"
					className="fixed left-1/2 top-1/2 z-50 flex h-modal w-modal -translate-x-1/2 -translate-y-1/2 animate-modal flex-col overflow-hidden rounded-md bg-neutral-100 p-4 pb-10 dark:bg-neutral-dark-300"
				>
					<Dialog.Title
						className={`${defaultStyle} ${
							variant === "failure" ? "bg-red-800" : "bg-blue-300"
						}`}
					>
						E-mail enviado com sucesso
					</Dialog.Title>
					<Dialog.Description asChild>
						<p className="mt-52 p-6 text-center text-2xl font-semibold">
							{messages[variant]}
						</p>
					</Dialog.Description>
					<div className="mt-auto flex items-center justify-center">
						<button
							type="button"
							onClick={onCancel}
							className="rounded-sm border border-neutral-200 p-4 font-semibold hover:bg-slate-400/40 hover:text-neutral-50"
						>
							Confirmar
						</button>
					</div>
					<Dialog.Close asChild autoFocus>
						<button
							type="button"
							className="absolute right-6 top-6"
							aria-label="Close"
							onClick={onCancel}
						>
							<X
								size={24}
								className="text-neutral-50 transition-all hover:text-neutral-200"
							/>
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
