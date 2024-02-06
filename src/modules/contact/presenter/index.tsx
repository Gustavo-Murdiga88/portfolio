import { cookies } from "next/headers";

import { Title } from "@/components/title";
import { userCanSendEmail } from "@/util/useCanSendEmail";

import { Form } from "./form";

export function Contact() {
	const userAlreadySendEmail = !userCanSendEmail(cookies);

	return (
		<section data-main id="contract" className="flex flex-col lg:h-[960px]">
			<Title title="Contato" />
			<div
				data-aos="fade-up"
				data-aos-delay="25"
				className="mx-auto mb-20 mt-10 flex max-w-[62.5rem] flex-1 flex-col-reverse items-center justify-center gap-10 px-4 md:flex-row lg:mb-10"
			>
				<Form userAlreadySendEmail={userAlreadySendEmail} />
				<section
					data-aos="fade-up"
					data-aos-delay="25"
					className="flex w-full flex-col justify-center gap-6 lg:w-[25rem]"
				>
					<h2 className="px-4 text-left text-lg font-bold dark:text-blue-dark-200 md:text-xl">
						Curioso para saber mais?
					</h2>
					<p className="px-4 text-lg font-bold text-neutral-900 dark:text-neutral-dark-900">
						Não perca tempo! Envie-me uma mensagem agora e saiba tudo sobre os
						serviços personalizados e como podemos colaborar para transformar
						ideias ambiciosas em projetos concretos.
					</p>
				</section>
			</div>
		</section>
	);
}
