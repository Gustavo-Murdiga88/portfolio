import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components/title";

export function About() {
	const currentYear = new Date().getFullYear();
	const yearsOld = currentYear - 1999;

	return (
		<section aria-label="Sobre mim" data-main id="about" className="lg:mt-8">
			<Title title="Sobre" />

			<article
				data-aos="fade-up"
				className="prose prose-zinc mx-auto max-w-[52rem] p-8"
			>
				<header
					data-aos="fade-up"
					className="mb-6 flex flex-col items-center gap-10 md:flex-row"
				>
					<Image
						data-aos="fade-up"
						src="https://github.com/gustavo-murdiga88.png"
						height={270}
						width={270}
						className="m-0 rounded-xl"
						alt="Github avatar"
					/>
					<div
						data-aos="fade-up"
						className="flex flex-col items-center justify-center gap-4 text-base font-semibold uppercase md:items-start"
					>
						<span className="text-neutral-200">Full-stack developer</span>
						<h1 className="mb-1 text-center font-semibold leading-none text-zinc-50  md:text-start">
							Gustavo Murdiga
						</h1>
						<div className="flex items-center justify-start gap-3">
							<Link
								className="size-6"
								href="https://github.com/Gustavo-Murdiga88"
								target="_blank"
								aria-label="github"
							>
								<span className="sr-only">github</span>
								<Github className="stroke-neutral-50 transition-colors hover:stroke-neutral-500" />
							</Link>
							<Link
								className=""
								href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
								aria-label="LinkedIn"
								target="_blank"
							>
								<span className="sr-only">LinkedIn</span>
								<Linkedin className="stroke-neutral-50 transition-colors hover:stroke-neutral-500" />
							</Link>
						</div>
					</div>
				</header>
				<p
					data-aos="fade-up"
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

				<h2
					data-aos="fade-up"
					className="text-neutral-900 dark:text-neutral-dark-900"
				>
					Mas de onde surgiu minha paixão pela tecnologia?
				</h2>
				<p
					data-aos="fade-up"
					className="text-neutral-900 dark:text-neutral-dark-900"
				>
					Tudo começou quando tive a iniciativa de exercer alguns trabalhos
					secundários de redes de computadores – e acredite, eu gosto muito
					desse assunto -, e após criar minhas primeiras redes e dar os meus
					primeiros passos em interfaces de linha de comando (CLI), senti uma
					grande necessidade de me aprofundar nesse assunto. Então, comecei uma
					jornada incrível para aprender lógica de programação e várias
					linguagens, incluindo C#, Java, Python e alguns frameworks, como o
					Django do Python. Por fim, optei em me especializar em JavaScript -
					afinal, quem não escolheria, não é mesmo?
				</p>

				<p
					data-aos="fade-up"
					className="text-neutral-900 dark:text-neutral-dark-900"
				>
					Inserido nesse insano mundo de estudo e programação, recebi a proposta
					de uma empresa local para exercer a função de suporte técnico TI.
					Embora não fosse o meu principal foco, abracei cada ensinamento e
					experiência, ciente e confiante de que meu maior sonho estava
					(literalmente) a uns passos de mim. Foi então que em janeiro do ano de
					2022 recebi o voto de confiança dos diretores da empresa para
					ingressar no mundo dos códigos. E a partir daí, fui exercendo com
					excelência (modéstia parte) o meu cargo de programador front-end,
					trabalhando em projetos de alta relevância, entregando sempre o meu
					melhor e ganhando o meu merecido espaço.
				</p>

				<h2
					data-aos="fade-up"
					className="mx-auto text-neutral-900 dark:text-neutral-dark-900"
				>
					E como todo esforço é recompensado, em outubro de 2022 recebi a
					inesperada proposta da atual empresa onde trabalho, Guarani
					Sistemas...
				</h2>
				<p
					data-aos="fade-up"
					className="text-neutral-900 dark:text-neutral-dark-900"
				>
					Hoje trabalho de forma remota, exercendo a função de desenvolvedor
					front-end há cerca de 10 meses, e posso garantir que tem sido uma
					experiência surreal de boa.Tenho a oportunidade de criar novas coisas,
					arquitetar projetos e testar novas features em um sistema que está em
					desenvolvimento. É um ambiente desafiador e estimulante, onde posso
					colocar em prática tudo o que aprendi e continuar aprendendo sempre
					mais. E quem sabe, num futuro próximo, eu tenha novas oportunidades e
					desafios pela frente. O importante é continuar aprendendo e buscando
					sempre o melhor para minha carreira e para o mundo da tecnologia.
				</p>
			</article>
		</section>
	);
}
