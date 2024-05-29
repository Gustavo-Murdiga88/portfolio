import { CardPresenter } from "@/components/card-presenter";
import { Title } from "@/components/title";

import { frameworks } from "./data";

export function Skills() {
	return (
		<section aria-label="Habilidades e Tecnologias">
			<div className="flex w-full flex-col">
				<Title
					title="Habilidades e Tecnologias"
					id="skills"
					data-main
					data-section="skills"
				/>

				<div className="mx-auto my-8 grid grid-cols-2 gap-10 lg:my-20 lg:grid-cols-4">
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
