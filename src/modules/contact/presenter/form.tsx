"use client";

import { ComponentRef, FormEvent, useRef, useState } from "react";

import { Ring } from "@uiball/loaders";
import { toast } from "react-toastify";

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
			toast(message, {
				type: "error",
			});
			return;
		}

		toast(message, {
			type: "success",
		});
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
			className="relative flex w-full flex-col gap-6 rounded-sm bg-neutral-100 px-4 pb-[60px] pt-6 dark:bg-neutral-dark-100 lg:w-[668px] lg:rounded-md lg:px-10 lg:pt-14"
		>
			<h1 className="mb-6 text-center text-lg font-normal text-neutral-950 dark:text-neutral-dark-950 md:mb-12 lg:text-[36px]">
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
				className="rounded-sm bg-neutral-50 p-4 text-xs font-semibold placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 dark:placeholder:text-neutral-dark-600"
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
				className="rounded-sm bg-neutral-50 p-4 text-xs font-semibold placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 dark:placeholder:text-neutral-dark-600"
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
				className="h-[250px] resize-none rounded-sm bg-neutral-50 p-4 text-xs font-semibold placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 dark:placeholder:text-neutral-dark-600"
			/>
			<button
				aria-label="send message"
				disabled={formState.userAlreadySendEmail}
				type="submit"
				className="flex items-center justify-center gap-4 rounded-[999px] bg-neutral-200 py-3 text-xs font-normal uppercase text-neutral-900 transition-all hover:bg-neutral-400 active:text-neutral-50 active:shadow-btn1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-neutral-200 disabled:active:text-neutral-900 disabled:active:shadow-none dark:bg-neutral-dark-200 dark:text-neutral-dark-900 dark:hover:bg-neutral-dark-400 dark:active:text-neutral-dark-50 disabled:hover:dark:bg-neutral-dark-200 disabled:active:dark:text-neutral-dark-900"
			>
				Enviar mensagem
				{formState.isLoading && (
					<Ring size={16} lineWeight={5} speed={2} color="#0078C5" />
				)}
			</button>
		</form>
	);
}
