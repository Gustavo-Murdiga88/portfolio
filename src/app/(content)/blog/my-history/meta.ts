import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha Jornada no Mundo da Tecnologia",
  description:
    "Descubra minha trajetória completa como desenvolvedor full-stack sênior, desde os primeiros passos até a posição atual como desenvolvedor Sênior. Uma história inspiradora de crescimento profissional, aprendizado contínuo e paixão pela tecnologia, com foco especial em Node.js, React, React Native e mentoria para novos desenvolvedores. Aprenda sobre carreira em tech, fintech e desenvolvimento de software.",
  keywords: [
    "desenvolvedor full-stack sênior",
    "carreira em tecnologia",
    "trajetória profissional desenvolvedor",
    "Node.js developer",
    "React developer",
    "React Native",
    "mentoria em programação",
    "Remessa Online",
    "fintech brasil",
    "desenvolvedor JavaScript",
    "TypeScript",
    "AWS cloud",
    "desenvolvimento mobile",
    "programação web",
    "Gustavo Murdiga",
    "blog tecnologia",
    "carreira programador",
    "microserviços",
    "Jest testing",
    "gRPC",
    "RabbitMQ",
  ],
  authors: [
    {
      name: "Gustavo Murdiga",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    },
  ],
  creator: "Gustavo Murdiga",
  publisher: "Gustavo Murdiga Portfolio",
  category: "Tecnologia e Desenvolvimento",

  openGraph: {
    title: "De Estudante a Mentor: Minha Jornada no Mundo da Tecnologia",
    description:
      "🚀 Uma história inspiradora de crescimento em tecnologia: de estudante a desenvolvedor sênior em fintech. Descubra minha trajetória, aprendizados e como pretendo ajudar novos desenvolvedores a conquistarem suas primeiras oportunidades.",
    type: "article",
    siteName: "Gustavo Murdiga - Desenvolvedor Full-Stack",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gustavo-murdiga.vercel.app"}/blog/my-history`,
    locale: "pt_BR",
    countryName: "Brasil",
    images: [
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Desenvolvedor trabalhando com código - Trajetória profissional de crescimento na área de tecnologia",
        type: "image/jpeg",
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
        width: 800,
        height: 600,
        alt: "Equipe de desenvolvimento colaborando - representando mentoria em tecnologia",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2024-11-23T10:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    expirationTime: "2025-11-23T10:00:00.000Z",
    authors: ["Gustavo Murdiga"],
    section: "Carreira e Desenvolvimento",
    tags: [
      "Desenvolvimento Full-Stack",
      "Carreira em Tecnologia",
      "Node.js",
      "React",
      "React Native",
      "Mentoria",
      "Fintech",
      "JavaScript",
      "TypeScript",
      "AWS",
      "Programação",
      "Software Engineering",
    ],
  },
  twitter: {
    title: "De Estudante a Mentor: Minha Jornada em Tech 🚀",
    description:
      "📖 História completa: de estudante a dev sênior na Remessa Online\n🎯 Próximo passo: mentoria para novos devs\n💡 #NodeJS #React #ReactNative #Mentoria #TechCareer",
    card: "summary_large_image",
    creator: "@GustavoMurdiga",
    site: "@GustavoMurdiga",
    images: [
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Trajetória profissional em tecnologia - De estudante a mentor",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Minha Jornada em Tech - Gustavo Murdiga",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "/icons/apple-touch-icon.png",
  },
  verification: {
    google: "WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    languages: {
      "pt-BR": `${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  },
  other: {
    "article:author": "Gustavo Murdiga",
    "article:section": "Tecnologia",
    "article:published_time": "2024-11-23T10:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
    "article:tag": "Desenvolvimento, Carreira, Node.js, React, Mentoria",
    "og:see_also": [
      `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/skills`,
    ],
    "theme-color": "#121214",
    "color-scheme": "light dark",
  },
};
