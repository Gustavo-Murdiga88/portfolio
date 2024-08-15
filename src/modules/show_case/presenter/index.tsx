import { Card } from "@/components/card-show-case/widget";
import { Title } from "@/components/title";

import { projects } from "./data";

export function ShowCase() {
	return (
		<section aria-label="Projetos práticos" className="mx-auto max-w-page">
			<Title
				title="Projetos práticos"
				id="show_case"
				data-main
				data-section="show_case"
			/>

			<div className="mx-auto my-8 grid max-w-[56.25rem] grid-cols-1 justify-center gap-5 px-8 md:grid-cols-3">
				{projects.map((props, index) => (
					<Card
						{...props}
						data-main={index === projects.length - 1 || index === 0}
						data-section="show_case"
						key={props.nameOfProject}
					/>
				))}
			</div>
		</section>
	);
}
