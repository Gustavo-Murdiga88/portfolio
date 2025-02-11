/* eslint-disable react/no-danger */

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
	);
}
