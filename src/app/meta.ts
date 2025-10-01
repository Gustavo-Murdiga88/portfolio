import { Metadata } from "next";

const currentYear = new Date().getFullYear();
const myYearsOld = currentYear - 1999;
const exp = currentYear - 2020;

export const options: Metadata = {
  abstract: `Sou um engenheiro de software com +${exp} anos de experiência, especializado em tecnologias como React.js, Next.js, Node.js,NestJS e AWS.Brasileiro, nascido em Jaú no interior de São paulo, com ${myYearsOld} anos, católico, estudante e um desenvolvedor que busca ser melhor, não apenas nas linhas de código, mas como pessoa.`,
  applicationName: "Gustavo Murdiga",
  formatDetection: {
    address: true,
    date: false,
    email: true,
    telephone: true,
    url: true,
  },
  verification: {
    google: "WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    capable: false,
    title: "Olá, eu sou o Gustavo! 🤓",
  },
  publisher: "Gustavo Murdiga",
  classification: "Portfólio",
  metadataBase: new URL("https://gustavomurdiga.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: "Olá, eu sou o Gustavo! 🤓",
  description: `Sou um engenheiro de software com +${exp} anos de experiência, especializado em tecnologias como React.js, Next.js, Node.js,NestJS e AWS.Brasileiro, nascido em Jaú no interior de São paulo, com ${myYearsOld} anos, católico, estudante e um desenvolvedor que busca ser melhor, não apenas nas linhas de código, mas como pessoa.`,
  authors: [
    {
      name: "Gustavo Murdiga",
      url: "https://github.com/Gustavo-Murdiga88",
    },
  ],
  openGraph: {
    type: "profile",
    title: "Olá, eu sou o Gustavo! 🤓",
    url: "https://gustavomurdiga.vercel.app/",
    description: `Sou um engenheiro de software com +${exp} anos de experiência, especializado em tecnologias como React.js, Next.js, Node.js,NestJS e AWS.Brasileiro, nascido em Jaú no interior de São paulo, com ${myYearsOld} anos, católico, estudante e um desenvolvedor que busca ser melhor, não apenas nas linhas de código, mas como pessoa.`,
    firstName: "Gustavo",
    lastName: "Murdiga",
    username: "Gustavo Murdiga",
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759288004/333d6614-5da4-48de-89a4-c58b11fe436b.png",
    ],
  },
  twitter: {
    site: "@GuMurdiga",
    title: "Olá, eu sou o Gustavo! 🤓",
    description: `Sou um engenheiro de software com +${exp} anos de experiência, especializado em tecnologias como React.js, Next.js, Node.js,NestJS e AWS.Brasileiro, nascido em Jaú no interior de São paulo, com ${myYearsOld} anos, católico, estudante e um desenvolvedor que busca ser melhor, não apenas nas linhas de código, mas como pessoa.`,
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759288004/333d6614-5da4-48de-89a4-c58b11fe436b.png",
    ],
  },
  category: "Portfólios",
  creator: "GM Dev",
  keywords: [
    "Desenvolvedor",
    "Jaú",
    "Desenvolvedor em Jaú",
    "Tecnologia em Jaú",
    "GM Dev",
    "Gustavo Murdiga",
  ],
};

export const struttedData = {
  "@context": "http://schema.org/",
  "@type": "LocalBusiness",
  name: "Gustavo Murdiga",
  image:
    "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759288004/333d6614-5da4-48de-89a4-c58b11fe436b.png",
  url: "https://gustavomurdiga.vercel.app/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Luiz zanolla",
    addressLocality: "Jaú",
    addressRegion: "São Paulo",
    postalCode: "17209527",
    addressCountry: "Brazil",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:30",
    },
  ],
};

export const struttedDataOrganization = {
  "@context": "http://schema.org/",
  "@type": "Organization",
  name: "GM Dev",
  logo: "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759288004/333d6614-5da4-48de-89a4-c58b11fe436b.png",
  url: "https://gustavomurdiga.vercel.app/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Luiz zanolla",
    addressLocality: "Jaú",
    addressRegion: "São Paulo",
    postalCode: "17209527",
    addressCountry: "Brazil",
  },
};
