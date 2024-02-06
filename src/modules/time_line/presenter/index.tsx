import { TimeBox } from "@/components/time_line/widget";
import { Title } from "@/components/title";

import { time_line } from "./data";

export function TimeLine() {
	return (
		<section data-main className="lg:min-h-content-height" id="time_line">
			<Title title="Trajetória" />

			<main className="mx-auto max-w-[50rem]">
				<h1
					data-aos="fade-up"
					className="mx-auto my-4 px-6  text-[44px] font-semibold md:my-10 md:gap-10 md:px-4"
				>
					Experiência
				</h1>

				{time_line.map(
					({ company, date, title, description, url, img, type }) => (
						<TimeBox
							key={title}
							company={company}
							date={date}
							description={description}
							title={title}
							img={img}
							type={type}
							url={url}
						/>
					),
				)}
			</main>
		</section>
	);
}
