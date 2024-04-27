import { CardPresenter } from "@/components/card-presenter";
import { Title } from "@/components/title";

import { frameworks } from "./data";

export function Skills() {
	return (
		<section
			aria-label="Habilidades e Tecnologias"
			className="flex justify-center lg:min-h-content-height"
		>
			<div className="mb-20 flex w-full flex-col">
				<Title
					title="Habilidades e Tecnologias"
					id="skills"
					data-aos="fade-up"
					data-main
					data-section="skills"
				/>

				<div className="mx-auto mt-8 flex flex-col gap-10 p-4 lg:p-0">
					{frameworks.map(
						({ description, id, imageUrl, title, urlDoc }, index) => (
							<CardPresenter
								key={id}
								data-main={index === frameworks.length - 1 || index === 0}
								data-section="skills"
								description={description}
								imageUrl={imageUrl}
								title={title}
								urlDoc={urlDoc}
							/>
						),
					)}
				</div>
			</div>
		</section>
	);
}
