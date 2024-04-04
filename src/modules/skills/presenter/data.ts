import docker from "@/assets/docker.svg";
import expo from "@/assets/expo.svg";
import flutter from "@/assets/flutter.svg";
import next from "@/assets/nextjs.svg";
import node from "@/assets/node.svg";
import react from "@/assets/react.svg";
import typescript from "@/assets/typescript.svg";
import vitejs from "@/assets/vitejs.svg";

type FrameworksProps = {
	id: string;
	description: string;
	imageUrl: string;
	title: string;
	urlDoc: string;
};

export const frameworks: FrameworksProps[] = [
	{
		id: "1",
		description:
			"O React marcou o ponto inicial da minha jornada no desenvolvimento. Graças a ele, tive a oportunidade de integrar equipes e contribuir para projetos desafiadores, abrangendo tanto o desenvolvimento web quanto mobile, incluindo o React Native. Essa tecnologia foi a chave para minha participação em diversos produtos inovadores.",
		imageUrl: react,
		title: "React",
		urlDoc: "https://react.dev/",
	},
	{
		id: "2",
		urlDoc: "https://nodejs.org/en",
		description:
			"Com uma trajetória repleta de projetos bem-sucedidos, consolidei minha expertise em Node.js, tornando-me um profissional sênior nesta tecnologia. Node.js tem sido a pedra angular da minha carreira, capacitando-me a construir uma variedade de aplicações robustas e escaláveis no lado do servidor. Ao longo dos anos, explorei suas capacidades assíncronas e seu modelo de I/O não bloqueante para lidar com desafios complexos de alta concorrência, entregando soluções eficientes e de alto desempenho. Desde servidores web até APIs em tempo real, Node.js tem sido minha ferramenta de escolha, permitindo-me criar sistemas que lidam com múltiplas conexões simultâneas de maneira eficaz. Com cada novo projeto, minha familiaridade com Node.js cresceu, solidificando meu status como um desenvolvedor sênior capacitado para enfrentar os desafios mais exigentes no mundo do desenvolvimento de software.",
		imageUrl: node,
		title: "Node JS",
	},
	{
		id: "3",
		urlDoc: "https://expo.dev/",
		description:
			"O Expo destaca-se como um framework essencial para o desenvolvimento multi-plataforma. Através dele, tive a oportunidade de conceber várias aplicações mobile, abrangendo tanto o ambiente IOS quanto Android. Recentemente, concluí um projeto significativo: a criação de um aplicativo para vendas de ingressos online.",
		imageUrl: expo,
		title: "Expo",
	},
	{
		id: "4",
		urlDoc: "https://nextjs.org/",
		description:
			"À medida que avanço em minha carreira, tenho dedicado a maior parte do meu tempo e esforço ao aprimoramento de minhas habilidades em Next.js, um framework poderoso que utiliza o React. Com o passar do tempo, estou alcançando um nível sênior nesta tecnologia, dominando suas nuances e explorando todas as suas capacidades. Hoje, posso orgulhosamente afirmar que cerca de 99% de todos os meus trabalhos são desenvolvidos utilizando o Next.js. Este framework simplifica significativamente o desenvolvimento de aplicações web, proporcionando uma estrutura robusta pronta para produção, roteamento intuitivo e suporte tanto para renderização no lado do servidor quanto no lado do cliente. Com o Next.js, consigo criar páginas dinâmicas e implementar otimizações para garantir o melhor desempenho possível, tornando o desenvolvimento web mais eficiente e acessível. Estou entusiasmado com o que o futuro reserva à medida que continuo a aprimorar minhas habilidades e a explorar novas possibilidades com este poderoso framework.",
		imageUrl: next,
		title: "Next",
	},
	{
		id: "5",
		urlDoc: "https://devblogs.microsoft.com/typescript/",
		description:
			"Como parte fundamental de minha jornada de atualização contínua, tenho investido significativamente em aprimorar minhas habilidades em TypeScript, uma linguagem de programação de código aberto desenvolvida pela Microsoft. Agora, posso afirmar com confiança que todos os meus projetos, sem exceção, incorporam esta tecnologia. TypeScript, uma extensão poderosa do JavaScript que adiciona tipos estáticos opcionais ao código, tem se revelado indispensável para proporcionar robustez e eficiência no desenvolvimento de software. Com sua capacidade de detectar e prevenir erros comuns antes mesmo da execução do código, tenho experimentado uma melhoria significativa na qualidade e confiabilidade dos meus projetos. Além disso, o fato de o TypeScript ser transpilado para JavaScript padrão significa que posso executar meu código em qualquer ambiente que suporte JavaScript. Esta linguagem é amplamente adotada em projetos grandes e complexos, oferecendo benefícios como melhor manutenção de código, ferramentas de desenvolvimento mais poderosas e facilitação da colaboração em equipes de programação. Com minha dedicação contínua ao aprendizado e uso do TypeScript, estou preparado para enfrentar os desafios mais exigentes no desenvolvimento de software.",
		imageUrl: typescript,
		title: "Typescript",
	},
	{
		id: "6",
		urlDoc: "https://vitest.dev/",
		description:
			"Além de aproveitar as vantagens do VitestJS como um framework de testes JavaScript moderno para escrever código mais confiável e eficiente, tenho adotado esta ferramenta não apenas para desenvolvimento, mas também para garantir a qualidade de meus projetos. A cada dia que passa, incorporo o VitestJS em meu fluxo de trabalho para realizar testes unitários e end-to-end, assegurando-me de que todos os meus softwares sejam testáveis e mantenham os mais altos padrões de qualidade. Com uma velocidade até 20x superior ao Jest, o VitestJS oferece feedback rápido sobre minhas alterações de código, otimizando significativamente meu processo de desenvolvimento. Sua API amigável e documentação clara facilitam a criação de testes simples e intuitivos, mesmo para iniciantes. Além disso, a flexibilidade do VitestJS permite testar uma ampla variedade de aplicações JavaScript, desde o front-end e back-end até frameworks populares como React, Vue.js, Svelte, Node.js e Electron. Ao integrar o VitestJS em meu fluxo de trabalho, posso garantir a clareza e a certeza de que todos os meus softwares são testáveis e mantêm o mais alto nível de qualidade.",
		imageUrl: vitejs,
		title: "Vitest",
	},
	{
		id: "7",
		urlDoc: "https://www.flutter.com/",
		description:
			"Atualmente, estou imerso em estudos intensivos sobre o Flutter, reconhecendo-o como uma nova stack promissora e um serviço inovador que estou ansioso para oferecer aos meus clientes e comunidade. O Flutter é um framework de código aberto desenvolvido pelo Google, projetado especificamente para a criação de aplicativos nativos multiplataforma. Por meio da linguagem de programação Dart, o Flutter possibilita o desenvolvimento eficiente de interfaces de usuário atraentes e responsivas, compartilhando o código-base entre plataformas como iOS e Android. Sua arquitetura centrada em widgets oferece flexibilidade e desempenho excepcionais, enquanto o recurso de Hot Reload permite realizar alterações em tempo real durante o desenvolvimento, acelerando significativamente o ciclo de criação e testes. Estou entusiasmado com as possibilidades que o Flutter oferece e estou comprometido em dominar essa tecnologia para fornecer soluções de alta qualidade e experiências de usuário excepcionais em aplicativos móveis.",
		imageUrl: flutter,
		title: "Flutter",
	},
	{
		id: "8",
		urlDoc: "https://www.docker.com/",
		description:
			"Atualmente, estou dedicando meu tempo a imersão em estudos avançados sobre Docker e, especialmente, aprofundando meu conhecimento em Kubernetes para um gerenciamento mais abrangente e sofisticado desta tecnologia. Reconheço o poder dos contêineres Docker para desenvolvimento, distribuição e execução de aplicativos, pois eles encapsulam aplicativos e suas dependências, garantindo consistência em diferentes ambientes. Este é um passo crucial para a implantação rápida, escalabilidade e gerenciamento eficiente de aplicações em diversos sistemas operacionais. No entanto, para aproveitar ao máximo o potencial dos contêineres, estou me dedicando ao estudo e prática do Kubernetes, uma ferramenta essencial para orquestração de contêineres em ambientes de produção. Com o Kubernetes, tenho como objetivo aprimorar minhas habilidades para gerenciar, dimensionar e automatizar o ciclo de vida completo de aplicativos baseados em contêineres, proporcionando soluções ainda mais robustas e escaláveis para meus projetos e clientes.",
		imageUrl: docker,
		title: "Docker",
	},
];
