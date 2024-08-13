/* eslint-disable react/no-danger */
import { Github, Home, Linkedin } from "lucide-react";
import Link from "next/link";

import { Title } from "@/components/title";

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

export default async function Page() {
	const today = new Date();
	const restInMiliSeconds = (24 - today.getHours()) * (60 * 60);

	const data = (await fetch("https://liturgiadiaria.site?dia=13&mes=08", {
		method: "GET",
		next: {
			revalidate: restInMiliSeconds,
		},
	}).then((result) => result.json())) as IFetchReturn;

	const gospel = `${data.evangelho.texto.replaceAll(/(\d)/g, "<sup class='font-semibold'>$1 </sup>")}`;
	const title = data.evangelho.titulo.replace("✠", "✞");

	return (
		<main className="grid min-h-screen grid-cols-1  md:grid-cols-[1fr_750px_1fr]">
			<div className="h-svh col-start-2 col-end-2 flex flex-col gap-6">
				<Title id="home" title="Liturgia diária" data-main data-section="home">
					<nav
						aria-label="Redes sociais"
						className="ml-auto flex items-center gap-4"
					>
						<Link
							aria-labelledby="home"
							href="/"
							title="Página principal"
							className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
						>
							<Home id="home" aria-label="Bíblia" size={20} />
						</Link>

						<Link
							aria-labelledby="github"
							href="https://github.com/Gustavo-Murdiga88"
							target="_blank"
							className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
						>
							<Github id="github" aria-label="github" size={20} />
						</Link>
						<Link
							aria-labelledby="LinkedIn"
							href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
							target="_blank"
							className="text-neutral-100 transition-colors hover:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-100"
						>
							<Linkedin id="LinkedIn" aria-label="LinkedIn" size={20} />
						</Link>
					</nav>
				</Title>
				<div className="prose prose-sm prose-zinc prose-invert flex min-w-full flex-col justify-center p-4 md:prose-base prose-h2:mt-0 prose-p:hyphens-auto">
					<span className="text-[0.75rem] font-semibold text-zinc-100/60">
						Cor Litúrgica: {data.cor}
					</span>
					<span className="text-[0.75rem] font-semibold text-zinc-100/60">
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
			</div>
		</main>
	);
}
