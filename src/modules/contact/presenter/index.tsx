import { cookies } from "next/headers";
import Link from "next/link";

import { userCanSendEmail } from "@/util/useCanSendEmail";

import { Form } from "./form";

export function Contact() {
	const userAlreadySendEmail = !userCanSendEmail(cookies);

	return (
		<section
			data-main
			id="contract"
			className="mb-2 rounded-sm bg-neutral-50 dark:bg-neutral-dark-50 md:ml-2 	"
		>
			<div data-aos="fade-up" data-aos-delay="50" data-aos-offset="300">
				<header
					data-aos="fade-up"
					data-aos-delay="150"
					data-aos-offset="300"
					className="mx-auto flex max-w-page justify-start border-b border-b-neutral-300 px-5 py-4 pr-4 pt-9"
				>
					<strong className="uppercase text-blue-200 transition-colors hover:text-blue-dark-700 dark:text-blue-dark-200 dark:hover:text-blue-dark-700">
						Contato
					</strong>
				</header>
				<div
					data-aos="fade-up"
					data-aos-delay="250"
					data-aos-offset="300"
					className="mx-auto mt-16 flex w-full max-w-page flex-row flex-wrap-reverse gap-6 px-4 lg:gap-[100px]"
				>
					<Form userAlreadySendEmail={userAlreadySendEmail} />
					<section
						data-aos="fade-up"
						data-aos-delay="350"
						data-aos-offset="300"
						className="flex w-full flex-col justify-center gap-6 lg:w-[386px]"
					>
						<h2 className="px-4 text-left text-lg font-bold text-blue-200 dark:text-blue-dark-200 md:text-xl">
							Curioso para saber mais?
						</h2>
						<p className="px-4 text-lg font-bold text-neutral-900 dark:text-neutral-dark-900 md:text-xl">
							Não perca tempo! Envie-me uma mensagem agora e saiba tudo sobre os
							serviços personalizados e como podemos colaborar para transformar
							ideias ambiciosas em projetos concretos.
						</p>
					</section>
				</div>

				<div className="pb-20 md:pb-4">
					<footer className="mx-auto flex max-w-page items-center justify-center px-6 pt-20 text-center text-xs leading-relaxed text-neutral-600 dark:text-neutral-dark-600 lg:pt-[70px]">
						<p data-aos="fade-up" data-aos-offset="0">
							Design criado por
							<Link
								target="_blank"
								href="https://www.linkedin.com/in/mariana-yoshino/"
								className="mx-4 text-xs font-semibold text-blue-200 dark:text-blue-dark-200"
							>
								Mariana Yoshino
							</Link>
							- UX / UI Designer - 2023
						</p>
					</footer>
				</div>
			</div>
		</section>
	);
}
