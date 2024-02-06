import docker from "@/assets/docker.svg";
import expo from "@/assets/expo.svg";
import flutter from "@/assets/flutter.svg";
import next from "@/assets/nextjs.svg";
import node from "@/assets/node.svg";
import react from "@/assets/react.svg";
import typescript from "@/assets/typescript.svg";
import vitejs from "@/assets/vitejs.svg";
import { CardPresenter } from "@/components/card-presenter";
import { Title } from "@/components/title";

export function Skills() {
	return (
		<section
			data-main
			className="flex justify-center lg:min-h-content-height"
			id="skills"
		>
			<div className="mb-20 flex w-full max-w-page flex-col justify-evenly">
				<Title title="Habilidades e Tecnologias" />

				<div className="mx-auto mt-8 flex flex-col gap-10 p-4 lg:max-w-[80%] lg:p-0">
					<CardPresenter
						description="O React marcou o ponto inicial da minha jornada no desenvolvimento. Graças a ele, tive a oportunidade de integrar equipes e contribuir para projetos desafiadores, abrangendo tanto o desenvolvimento web quanto mobile, incluindo o React Native. Essa tecnologia foi a chave para minha participação em diversos produtos inovadores."
						imageUrl={react}
						side="left"
						title="React"
						urlDoc="https://react.dev/"
					/>
					<CardPresenter
						urlDoc="https://nodejs.org/en"
						description="Node.js é um ambiente de execução JavaScript no lado do servidor, construído com a engine V8 do Chrome. Ele permite aos desenvolvedores usar JavaScript para operações do lado do servidor, além do tradicional lado do cliente. Com um modelo de I/O não bloqueante e orientado a eventos, Node.js é eficiente para operações intensivas de entrada e saída. É comumente utilizado para construir aplicações escaláveis e em tempo real, como servidores web e APIs, devido à sua capacidade de lidar com muitas conexões simultâneas de forma eficiente. Sua abordagem assíncrona permite um melhor desempenho em cenários de alta concorrência, sem alocar muitos recursos."
						imageUrl={node}
						side="right"
						title="Node JS"
					/>
					<CardPresenter
						urlDoc="https://expo.dev/"
						description="O Expo destaca-se como um framework essencial para o desenvolvimento multi-plataforma. Através dele, tive a oportunidade de conceber várias aplicações mobile, abrangendo tanto o ambiente IOS quanto Android. Recentemente, concluí um projeto significativo: a criação de um aplicativo para vendas de ingressos online."
						imageUrl={expo}
						side="left"
						title="Expo"
					/>
					<CardPresenter
						urlDoc="https://nextjs.org/"
						description="O Next.js é um framework que utiliza o React e que simplifica o desenvolvimento de aplicações web, oferecendo uma estrutura pronta para produção, roteamento intuitivo e suporte a renderização tanto no lado do servidor quanto no lado do cliente. Ele facilita a criação de páginas dinâmicas e otimizações para melhor desempenho, tornando o desenvolvimento web mais eficiente e acessível. Hoje 99% dos meus trabalhos são criados com esta tecnologia."
						imageUrl={next}
						side="right"
						title="Next"
					/>
					<CardPresenter
						urlDoc="https://devblogs.microsoft.com/typescript/"
						description="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela é uma extensão do JavaScript que adiciona tipos estáticos opcionais ao código. Isso proporciona aos desenvolvedores maior robustez e eficiência no desenvolvimento de software, ajudando a evitar erros comuns antes mesmo da execução do código. TypeScript é transpilado para JavaScript padrão, o que significa que pode ser executado em qualquer ambiente que suporte JavaScript. Ele é amplamente adotado em projetos grandes e complexos, oferecendo benefícios como melhor manutenção de código, ferramentas de desenvolvimento mais poderosas e facilitação da colaboração em equipes de programação."
						imageUrl={typescript}
						side="left"
						title="Typescript"
					/>
					<CardPresenter
						urlDoc="https://vitest.dev/"
						description="O VitestJS é um framework de testes JavaScript moderno que te ajuda a escrever código mais confiável e eficiente. Com uma velocidade até 20x superior ao Jest, o VitestJS te permite obter feedback mais rápido sobre suas alterações de código, otimizando o seu processo de desenvolvimento.
						Sua API amigável e documentação clara facilitam a criação de testes simples e intuitivos, mesmo para iniciantes. O VitestJS é flexível e pode ser usado para testar diferentes tipos de aplicações JavaScript, desde front-end e back-end até frameworks populares como React, Vue.js, Svelte, Node.js e Electron."
						imageUrl={vitejs}
						side="right"
						title="Vitest"
					/>
					<CardPresenter
						urlDoc="https://www.flutter.com/"
						description="
						ChatGPT
						Flutter é um framework de código aberto desenvolvido pelo Google para a criação de aplicativos nativos multiplataforma. Utilizando a linguagem de programação Dart, o Flutter permite o desenvolvimento eficiente de interfaces de usuário atraentes e responsivas, compartilhando o código-base entre plataformas como iOS e Android. Sua arquitetura centrada em widgets proporciona flexibilidade e desempenho, enquanto o Hot Reload permite alterações em tempo real durante o desenvolvimento, acelerando o ciclo de criação e testes."
						imageUrl={flutter}
						side="left"
						title="Flutter"
					/>{" "}
					<CardPresenter
						urlDoc="https://www.docker.com/"
						description="desenvolvimento, distribuição e execução de aplicativos. Os contêineres Docker encapsulam aplicativos e suas dependências, garantindo consistência em diferentes ambientes. Isso facilita a implantação rápida, escalabilidade e gerenciamento eficiente de aplicações em diversos sistemas operacionais."
						imageUrl={docker}
						side="right"
						title="Docker"
					/>{" "}
				</div>
			</div>
		</section>
	);
}
