import { CardPresenter } from "@/components/card-presenter";
import { Title } from "@/components/title";

import { frameworks } from "./data";

export function Skills() {
	return (
		<section
			aria-label="Habilidades e Tecnologias"
			data-main
			className="flex justify-center lg:min-h-content-height"
			id="skills"
		>
			<div className="mb-20 flex w-full flex-col">
				<Title title="Habilidades e Tecnologias" />

				<div className="mx-auto mt-8 flex flex-col gap-10 p-4 lg:p-0">
					{frameworks.map(({ description, id, imageUrl, title, urlDoc }) => (
						<CardPresenter
							key={id}
							description={description}
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
