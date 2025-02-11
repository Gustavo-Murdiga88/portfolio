import { CardPresenter } from "@/components/card-presenter";

import { frameworks } from "./data";

export default function Skills() {
	return (
		<section aria-label="Habilidades e Tecnologias" className="flex flex-1">
			<div className="mx-auto flex w-[min(100%,780px)] flex-col justify-center">
				<h1 className="mb-4 text-lg font-semibold">Habilidades</h1>
				<p className="text-justify text-[0.75rem] font-semibold leading-relaxed text-zinc-200/50">
					Ao longo dos meu anos de experiência, tive a oportunidade de aprender
					e trabalhar com algumas das Tecnologias mais populares do mercado.
				</p>
				<div className="my-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
					{frameworks.map(({ id, imageUrl, title, urlDoc }, index) => (
						<CardPresenter
							key={id}
							data-main={index === frameworks.length - 1 || index === 0}
							data-section="skills"
							imageUrl={imageUrl}
							title={title}
							urlDoc={urlDoc}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
