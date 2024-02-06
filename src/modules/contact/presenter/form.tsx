"use client";

import { Ring } from "@uiball/loaders";
import { ComponentRef, FormEvent, useRef, useState } from "react";
import { toast } from "sonner";

import { submitter } from "./submitter";

interface IFormProps {
	userAlreadySendEmail: boolean;
}

const TWENTY_MINUTES = 1000 * 60 * 20; // 20 MINUTES

export function Form({ userAlreadySendEmail }: IFormProps) {
	const refForm = useRef<ComponentRef<"form">>(null);

	const [formState, setFormState] = useState({
		userAlreadySendEmail,
		isLoading: false,
		submitting: false,
	});

	function handleShowToast({
		message,
		type,
	}: {
		type: "success" | "failure";
		message: string;
	}) {
		if (type === "failure") {
			toast.error(message);
			return;
		}

		toast.success(message);
	}
	async function handleSubmit(formEvent: FormEvent) {
		formEvent.preventDefault();

		setFormState({
			submitting: true,
			userAlreadySendEmail,
			isLoading: true,
		});

		const form = new FormData(refForm.current);

		const { success, message } = await submitter(form);

		if (success) {
			refForm.current.reset();
		}

		handleShowToast({
			type: success ? "success" : "failure",
			message,
		});

		setFormState({
			submitting: false,
			userAlreadySendEmail: success,
			isLoading: false,
		});

		setTimeout(() => {
			setFormState({
				submitting: false,
				userAlreadySendEmail: false,
				isLoading: false,
			});
		}, TWENTY_MINUTES);
	}

	return (
		<form
			ref={refForm}
			onSubmit={handleSubmit}
			className="relative mx-4 flex w-full flex-col gap-8 rounded-xs border border-neutral-800 bg-neutral-950 px-4 py-6 lg:w-[668px] lg:px-10 "
		>
			<h1 className="mb-4 text-center text-lg font-semibold text-neutral-200 lg:text-[1.75rem]">
				Vamos trabalhar juntos!
			</h1>
			<input
				disabled={formState.submitting}
				name="name"
				required
				onInvalid={(event) => {
					event.currentTarget.setCustomValidity("Por favor preencha seu nome");
				}}
				onChange={(event) => {
					event.currentTarget.setCustomValidity("");
				}}
				id="name"
				placeholder="Nome"
				className="h-[1.75rem] rounded-xs border-[2px] border-neutral-800 bg-neutral-50 p-4 text-[14px] font-semibold outline-none placeholder:text-neutral-200 focus-visible:ring-2 focus-visible:ring-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 "
			/>
			<input
				type="email"
				disabled={formState.submitting}
				name="email"
				required
				onInvalid={(event) => {
					event.currentTarget.setCustomValidity(
						"Por favor, nos informe seu email",
					);
				}}
				onChange={(event) => {
					event.currentTarget.setCustomValidity("");
				}}
				inputMode="email"
				id="email"
				placeholder="E-mail"
				className="h-[1.75rem] rounded-xs border-[2px] border-neutral-800 bg-neutral-50 p-4 text-[14px] font-semibold outline-none placeholder:text-neutral-200 focus-visible:ring-2 focus-visible:ring-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50"
			/>

			<textarea
				name="text"
				id="text"
				onInvalid={(event) => {
					event.currentTarget.setCustomValidity(
						"Por favor, escreva sua mensagem",
					);
				}}
				onChange={(event) => {
					event.currentTarget.setCustomValidity("");
				}}
				required
				disabled={formState.submitting}
				placeholder="Digite uma mensagem..."
				className="h-[250px] resize-none rounded-xs border-[2px] border-neutral-800 bg-neutral-50 p-4 text-[14px] font-semibold outline-none placeholder:text-neutral-200 focus-visible:ring-2 focus-visible:ring-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 "
			/>
			<button
				aria-label="Enviar"
				disabled={formState.userAlreadySendEmail}
				type="submit"
				className="flex items-center justify-center gap-4 rounded-[0.25rem] bg-blue-500 p-2 font-semibold text-neutral-100 focus:ring-2 focus:ring-neutral-50 disabled:cursor-not-allowed disabled:opacity-60"
			>
				Enviar
				{formState.isLoading && (
					<Ring size={16} lineWeight={5} speed={2} color="#fff" />
				)}
			</button>
		</form>
	);
}
