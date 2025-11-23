import dayjs from "dayjs";
import { Metadata } from "next";

interface IFetchReturn {
  data: string;
  liturgia: string;
  cor: string;
  dia: string;
  oferendas: string;
  comunhao: string;
  primeiraLeitura: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  segundaLeitura: string;
  salmo: {
    referencia: string;
    refrao: string;
    texto: string;
  };
  evangelho: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  antifonas: {
    entrada: string;
    ofertorio: string;
    comunhao: string;
  };
}

const today = dayjs().format("DD/MM/YYYY");

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "WQbYrmDaHz95-t54jPgWbYHPSBebm4LWjt1QC3UQtrg",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/daily-liturgy`,
    languages: {
      "pt-BR": `${process.env.NEXT_PUBLIC_SITE_URL}/daily-liturgy`,
    },
  },
  title: `Liturgia Diária 🙏 ${today}`,
  description: "Aqui será mostrado à você a liturgia diária da igreja católica",
  authors: [
    {
      name: "Gustavo Murdiga",
    },
  ],
  appleWebApp: {
    capable: false,
    statusBarStyle: "black-translucent",
    title: "Liturgia Diária",
  },
  category: "Religion",
  keywords: [
    "liturgia",
    "evangelho",
    "gospel",
    "católico",
    "evangelho do dia",
    "liturgia diária",
    "igreja católica",
    "fé",
    "oração",
    "devocional",
    "espiritualidade",
    "bíblia",
    "palavra de Deus",
    "meditação",
    "santo",
    "sacramento",
    "missal",
    "celebração",
    "liturgia das horas",
    "reflexão bíblica",
    "vida cristã",
  ],
  creator: "Gustavo Murdiga",
  openGraph: {
    type: "article",
    locale: "pt-br",
    title: `Liturgia Diária 🙏 ${today}`,
    description: "Liturgia diária",
    tags: ["gospel", "evangelho"],
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759287677/jesus_ld4tyz.jpg",
    ],
  },
  twitter: {
    site: "@GuMurdiga",
    description: "Tenha seu minuto de fé!",
    title: `Liturgia Diária 🙏 ${today}`,
    images: [
      "https://res.cloudinary.com/dtrh0qcd3/image/upload/v1759287677/jesus_ld4tyz.jpg",
    ],
  },
};

export default async function Page() {
  const today = new Date();
  const restInMiliSeconds = 60 * 60;

  const data = (await fetch(
    `${process.env.DAILY_LITURGY_URL}?dia=${today.getDate()}&mes=${today.getMonth() + 1}`,
    {
      method: "GET",
      next: {
        revalidate: restInMiliSeconds,
      },
    },
  ).then((result) => result.json())) as IFetchReturn;

  const gospel = `${data.evangelho.texto.replaceAll(/(\d)/g, "<sup class='font-semibold'>$1 </sup>")}`;
  const title = data.evangelho.titulo.replace("✠", "✞");

  return (
    <div className="prose prose-sm prose-zinc prose-invert mx-auto flex max-w-[45rem] flex-1 flex-col justify-center p-4 md:prose-base prose-h2:mt-0 prose-p:hyphens-auto">
      <span className="text-[0.75rem] font-semibold text-zinc-100/60">
        Cor Litúrgica: {data.cor}
      </span>
      <span className="mb-4 text-[0.75rem] font-semibold text-zinc-100/60">
        Data: {data.data}
      </span>

      <h1>{data.liturgia}</h1>
      <span className="text-[0.75rem] font-semibold text-zinc-200/60">
        Referência:
      </span>
      <h2>{data.evangelho.referencia}</h2>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: gospel }} />
      <strong className="block">— Palavra da Salvação.</strong>
      <strong className="block">— Glória a vós, Senhor.</strong>
    </div>
  );
}
