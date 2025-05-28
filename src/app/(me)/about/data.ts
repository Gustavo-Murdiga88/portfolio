import anhanguera from "@/assets/anhanguera.jpg";
import fluency from "@/assets/Fluency.png";
import guarani from "@/assets/guarani.jpg";
import onfriday from "@/assets/onfriday.jpeg";
import rockeatseat from "@/assets/rockeat-seat.png";
import sti3 from "@/assets/sti3.png";
import { ITimeLineProps } from "@/components/time_line/widget";

export const time_line: ITimeLineProps[] = [
  {
    company: "Guarani sistemas",
    date: "Atualmente",
    title: "Desenvolvedor full-stack web/mobile",
    url: "https://guaranisistemas.com.br/",
    description:
      "Sou peça fundamental no avanço contínuo do sistema ERP em nuvem,liderando a implementação de funcionalidades e estabelecendo padrõesde projeto para uma arquitetura eficiente e facilmente mantida. Minha atuação abrange desde a resolução de bugs até aprimoramentos na performance, com dedicação à criação e implementação de testes automatizados para garantir qualidade e conformidade com padrões de desenvolvimento.À frente da equipe web, conduzo a equipe na implementação de novas tarefas, especialmente para telas responsivas, e contribuo para o design system da empresa. Na equipe mobile, destaco-me no desenvolvimento de um ERP offline-first em Flutter. Utilizamos Next.js como core em nossos projetos web, ampliando nossa versatilidade. Essa diversidade de habilidades e contribuições reforça meu papel como agente-chave para o sucesso e a evolução contínua dos sistemas.",
    img: guarani.src,
  },
  {
    company: "OnFriday Technologies",
    date: "17/09/2023 à 17/12/2023",
    title: "Desenvolvedor Mobile",
    url: "https://www.linkedin.com/company/onfridaytech/",
    description:
      "Como desenvolvedor, tive o papel fundamental na criação da arquitetura de um aplicativo móvel inovador. Minhas responsabilidades incluíram a implementação de funcionalidades e telas para um eficiente sistema de venda de ingressos online, integrado harmoniosamente com um site na web. Utilizei a tecnologia React Native com Expo para garantir uma experiência ágil e unificada em ambas as plataformas",
    img: onfriday.src,
  },
  {
    company: "STi3",
    date: "17/10/2022 à 17/10/2023",
    title: "Desenvolvedor Front-End",
    url: "https://www.sti3.com.br",
    description:
      "Atuando de forma proativa no desenvolvimento e aprimoramento contínuo de funcionalidades cruciais para o sistema ERP comercializado pela empresa. Minha expertise concentra-se no uso predominante da tecnologia React.js, combinada com bibliotecas de estilização. Como parte integral da equipe, sou responsável por manter e contribuir para novas implementações no sistema ERP em nuvem. Destacando-me no gerenciamento de relatórios, implementação do PDV do sistema e nas estratégias de implementações de cache em requisições, otimizando assim a eficiência do sistema.",
    img: sti3.src,
  },
  {
    company: "Fluency Academy",
    date: "Cursando",
    title: "English tech",
    url: "https://fluency.io/br/",
    img: fluency.src,
    type: "student",
  },
  {
    company: "Rocketseat",
    date: "01/01/2021 à 01/01/2022",
    title: "Formação Full-Stack",
    url: "https://www.rocketseat.com.br",
    img: rockeatseat.src,
    type: "student",
  },
  {
    company: "Anhanguera",
    date: "01/01/2020 à 01/07/2022",
    title: "Arquitetura de dados",
    url: "https://www.anhanguera.com/curso/arquitetura-de-dados-tecnologo/?gclid=CjwKCAiAq4KuBhA6EiwArMAw1LnZymbJsqQlrOUQdPupcAJBhoiUFqi9VJtjlG6yblK3Nx4pKt7T1xoCaxkQAvD_BwE",
    img: anhanguera.src,
    type: "student",
  },
];
