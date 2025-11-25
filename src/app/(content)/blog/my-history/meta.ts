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
    title: "Minha Jornada no Mundo da Tecnologia",
    description:
      "Descubra minha trajetória completa como desenvolvedor full-stack sênior, desde os primeiros passos até a posição atual como desenvolvedor Sênior. Uma história inspiradora de crescimento profissional, aprendizado contínuo e paixão pela tecnologia, com foco especial em Node.js, React, React Native e mentoria para novos desenvolvedores. Aprenda sobre carreira em tech, fintech e desenvolvimento de software.",
    type: "article",
    siteName: "Gustavo Murdiga - Desenvolvedor Full-Stack",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/my-history`,
    locale: "pt_BR",
    countryName: "Brasil",
    images: [
      {
        url: "https://images.unsplash.com/photo-1591262184859-dd20d214b52a?q=80&w=2940&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Desenvolvedor trabalhando com código - Trajetória profissional de crescimento na área de tecnologia",
        type: "image/jpeg",
      },
      {
        url: "https://images.unsplash.com/photo-1591262184859-dd20d214b52a?q=80&w=2940&auto=format&fit=crop",
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
    title: "Minha Jornada no Mundo da Tecnologia",
    description:
      "Descubra minha trajetória completa como desenvolvedor full-stack sênior, desde os primeiros passos até a posição atual como desenvolvedor Sênior. Uma história inspiradora de crescimento profissional, aprendizado contínuo e paixão pela tecnologia, com foco especial em Node.js, React, React Native e mentoria para novos desenvolvedores. Aprenda sobre carreira em tech, fintech e desenvolvimento de software.",
    card: "summary_large_image",
    creator: "@GustavoMurdiga",
    site: "@GustavoMurdiga",
    images: [
      {
        url: "https://images.unsplash.com/photo-1591262184859-dd20d214b52a?q=80&w=2940&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Evolução engraçada",
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
