import { Card } from "@/components/card-show-case/widget";
import { Title } from "@/components/title";

import { projects } from "./data";

export function ShowCase() {
	return (
		<section
			aria-label="Projetos práticos"
			data-main
			data-section="show_case"
			className="mx-auto max-w-page"
		>
			<Title title="Projetos práticos" id="show_case" />

			<div className="grid-col-1 mx-auto my-8 grid max-w-[56.25rem] justify-center gap-5 px-8 md:grid-cols-3">
				{projects.map((props) => (
					<Card {...props} key={props.nameOfProject} />
				))}
			</div>
		</section>
	);
}
