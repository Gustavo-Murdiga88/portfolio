import { Card } from "@/components/card-show-case/widget";
import { Title } from "@/components/title";

import { projects } from "./data";

export function ShowCase() {
	return (
		<section data-main id="show_case" className="mx-auto max-w-page">
			<Title title="Projetos práticos" />

			<main className="grid-col-1 mx-auto my-8 grid max-w-[56.25rem] justify-center gap-5 px-8 md:grid-cols-3">
				{projects.map((props) => (
					<Card {...props} key={props.nameOfProject} />
				))}
			</main>
		</section>
	);
}
