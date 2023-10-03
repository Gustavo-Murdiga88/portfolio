"use client";

import { ComponentRef, FormEvent, useRef, useState } from "react";

import { ModalAlert } from "@/components/modal/alert";

import { Ring } from "@uiball/loaders";

import { submitter } from "./submitter";

interface IFormProps {
	userAlreadySendEmail: boolean;
}

interface IModalProps {
	open: boolean;
	variant: "success" | "failure";
}

const TWENTY_MINUTES = 1000 * 60 * 20; // 20 MINUTES

export function Form({ userAlreadySendEmail }: IFormProps) {
	const refForm = useRef<ComponentRef<"form">>(null);

	const [modal, setModal] = useState<IModalProps>({
		variant: "success",
		open: false,
	});

	const [formState, setFormState] = useState({
		userAlreadySendEmail,
		isLoading: false,
		submitting: false,
	});

	function handleCloseModal() {
		document.querySelector("#modalContent").classList.add("animate-modalOut");

		setTimeout(() => {
			setModal((props) => ({
				...props,
				open: false,
			}));
		}, 200);
	}

	function handleOpenModal(variant: "success" | "failure") {
		setModal({ open: true, variant });
	}

	async function handleSubmit(formEvent: FormEvent) {
		formEvent.preventDefault();

		setFormState({
			submitting: true,
			userAlreadySendEmail,
			isLoading: true,
		});

		const form = new FormData(refForm.current);

		const { success } = await submitter(form);

		if (success) {
			refForm.current.reset();
		}

		setFormState({
			submitting: false,
			userAlreadySendEmail: success,
			isLoading: false,
		});

		handleOpenModal(success ? "success" : "failure");

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
				id="name"
				placeholder="Nome"
				className="rounded-sm bg-neutral-50 p-4 text-xs font-semibold placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 dark:placeholder:text-neutral-dark-600"
			/>
			<input
				type="email"
				disabled={formState.submitting}
				name="email"
				inputMode="email"
				id="email"
				placeholder="E-mail"
				className="rounded-sm bg-neutral-50 p-4 text-xs font-semibold placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 dark:placeholder:text-neutral-dark-600"
			/>

			<textarea
				name="text"
				id="text"
				disabled={formState.submitting}
				placeholder="Digite uma mensagem..."
				className="h-[250px] resize-none rounded-sm bg-neutral-50 p-4 text-xs font-semibold placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-dark-50 dark:placeholder:text-neutral-dark-600"
			/>
			<button
				disabled={formState.userAlreadySendEmail}
				type="submit"
				className="flex items-center justify-center gap-4 rounded-[999px] bg-neutral-200 py-3 text-xs font-normal uppercase text-neutral-900 transition-all hover:bg-neutral-400 active:text-neutral-50 active:shadow-btn1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-neutral-200 disabled:active:text-neutral-900 disabled:active:shadow-none dark:bg-neutral-dark-200 dark:text-neutral-dark-900 dark:hover:bg-neutral-dark-400 dark:active:text-neutral-dark-50 disabled:hover:dark:bg-neutral-dark-200 disabled:active:dark:text-neutral-dark-900"
			>
				Enviar mensagem
				{formState.isLoading && (
					<Ring size={16} lineWeight={5} speed={2} color="#0078C5" />
				)}
			</button>

			<ModalAlert
				open={modal.open}
				onCancel={handleCloseModal}
				variant={modal.variant}
			/>
		</form>
	);
}
