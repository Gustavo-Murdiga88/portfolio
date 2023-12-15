import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Github } from "@/icons/github";

export function About() {
	const currentYear = new Date().getFullYear();
	const yearsOld = currentYear - 1999;

	return (
		<section
			data-main
			id="about"
			className="flex items-center justify-center lg:min-h-content-height"
		>
			<div
				data-aos="fade-up"
				className="mt-[50px] bg-neutral-100 dark:bg-neutral-dark-100"
			>
				<header
					data-aos="fade-up"
					data-aos-delay="100"
					className="mx-auto flex max-w-page justify-start border-b border-b-neutral-300 bg-neutral-100 px-5 py-4 pr-4 dark:bg-neutral-dark-100"
				>
					<strong className="uppercase text-blue-200 transition-colors hover:text-blue-dark-700 dark:text-blue-dark-200 dark:hover:text-blue-dark-700">
						Sobre
					</strong>
				</header>
				<div
					data-aos="fade-up"
					data-aos-delay="150"
					className="mx-auto mt-8 flex w-full max-w-page justify-end gap-4 pr-1 text-neutral-600 dark:text-neutral-dark-600"
				>
					<Link
						className="h-6 w-6 transition-all hover:brightness-150 "
						href="/"
						target="_blank"
						aria-label="github"
					>
						<span className="sr-only">github</span>
						<Github />
					</Link>
					<Link
						className="transition-all hover:brightness-150"
						href="/"
						aria-label="linkedin"
						target="_blank"
					>
						<span className="sr-only">linkedin</span>
						<Linkedin />
					</Link>
				</div>

				<article
					data-aos="fade-up"
					data-aos-delay="200"
					className="prose mx-auto max-w-page"
				>
					<header
						data-aos="fade-up"
						data-aos-delay="250"
						className="mt-6 flex flex-col items-center gap-10 md:flex-row"
					>
						<Image
							data-aos="fade-up"
							data-aos-delay="300"
							src="https://github.com/gustavo-murdiga88.png"
							height={270}
							width={270}
							className="rounded-xl"
							alt="Github avatar"
						/>
						<div
							data-aos="fade-up"
							data-aos-delay="350"
							className="flex flex-col items-center justify-center gap-8 text-base font-semibold uppercase text-neutral-600 dark:text-neutral-dark-600 md:items-start"
						>
							<span>Full-stack developer</span>
							<h1 className="text-center font-semibold leading-none text-blue-200 dark:text-blue-dark-200 md:text-left">
								Gustavo Murdiga
							</h1>
						</div>
					</header>
					<p
						data-aos="fade-up"
						data-aos-delay="50"
						className="text-neutral-900 dark:text-neutral-dark-900"
					>
						{`Olá, meu nome é Gustavo, moro em Jaú, interior de São Paulo. Aos meus
					${yearsOld} anos sou um grande explorador da tecnologia e de todas as
					coisas que ela pode oferecer. Mas, devo lhe dizer que nem sempre foi
					desta forma. Em minha jornada profissional, pude conhecer e me
					desafiar em diversas áreas, sendo o meu primeiro contato com o mundo
					do trabalho como eletricista na empresa de meu pai. Lá, pude entender
					melhor sobre a importância do trabalho em equipe, da boa comunicação e
					da entrega de um trabalho bem feito. Depois, exerci a função de
					analista técnico de suporte, mantenedor de sistemas eletrônicos,
					almoxarifado e até agente logístico`}
						.
					</p>

					<div className="mx-auto mb-9 mt-20 h-px w-full bg-blue-200 dark:bg-blue-dark-200 lg:w-[490px]" />
					<h2
						data-aos="fade-up"
						data-aos-delay="150"
						className="mb-16 text-center text-neutral-900 dark:text-neutral-dark-900"
					>
						Mas de onde surgiu minha paixão pela tecnologia?
					</h2>
					<p
						data-aos="fade-up"
						data-aos-delay="250"
						className="text-neutral-900 dark:text-neutral-dark-900"
					>
						Tudo começou quando tive a iniciativa de exercer alguns trabalhos
						secundários de redes de computadores – e acredite, eu gosto muito
						desse assunto -, e após criar minhas primeiras redes e dar os meus
						primeiros passos em interfaces de linha de comando (CLI), senti uma
						grande necessidade de me aprofundar nesse assunto. Então, comecei
						uma jornada incrível para aprender lógica de programação e várias
						linguagens, incluindo C#, Java, Python e alguns frameworks, como o
						Django do Python. Por fim, optei em me especializar em JavaScript -
						afinal, quem não escolheria, não é mesmo?
					</p>

					<p
						data-aos="fade-up"
						data-aos-delay="350"
						className="text-neutral-900 dark:text-neutral-dark-900"
					>
						Inserido nesse insano mundo de estudo e programação, recebi a
						proposta de uma empresa local para exercer a função de suporte
						técnico TI. Embora não fosse o meu principal foco, abracei cada
						ensinamento e experiência, ciente e confiante de que meu maior sonho
						estava (literalmente) a uns passos de mim. Foi então que em janeiro
						do ano de 2022 recebi o voto de confiança dos diretores da empresa
						para ingressar no mundo dos códigos. E a partir daí, fui exercendo
						com excelência (modéstia parte) o meu cargo de programador
						front-end, trabalhando em projetos de alta relevância, entregando
						sempre o meu melhor e ganhando o meu merecido espaço.
					</p>

					<h2
						data-aos="fade-up"
						data-aos-delay="400"
						className="mx-auto max-w-[944px] text-center text-neutral-900 dark:text-neutral-dark-900"
					>
						E como todo esforço é recompensado, em outubro de 2022 recebi a
						inesperada proposta da atual empresa onde trabalho, Guarani
						Sistemas...
					</h2>
					<p
						data-aos="fade-up"
						data-aos-delay="450"
						className="text-neutral-900 dark:text-neutral-dark-900"
					>
						Hoje trabalho de forma remota, exercendo a função de desenvolvedor
						front-end há cerca de 10 meses, e posso garantir que tem sido uma
						experiência surreal de boa.Tenho a oportunidade de criar novas
						coisas, arquitetar projetos e testar novas features em um sistema
						que está em desenvolvimento. É um ambiente desafiador e estimulante,
						onde posso colocar em prática tudo o que aprendi e continuar
						aprendendo sempre mais. E quem sabe, num futuro próximo, eu tenha
						novas oportunidades e desafios pela frente. O importante é continuar
						aprendendo e buscando sempre o melhor para minha carreira e para o
						mundo da tecnologia.
					</p>
				</article>
			</div>
		</section>
	);
}
