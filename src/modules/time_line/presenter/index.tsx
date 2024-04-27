import { TimeBox } from "@/components/time_line/widget";
import { Title } from "@/components/title";

import { time_line } from "./data";

export function TimeLine() {
	return (
		<section aria-label="Minha experiência" className="lg:min-h-content-height">
			<Title
				title="Trajetória professional"
				id="time_line"
				data-main
				data-section="time_line"
			/>

			<div className="mx-auto max-w-[50rem]">
				{time_line.map(
					({ company, date, title, description, url, img, type }, index) => (
						<TimeBox
							key={title}
							data-main={index === time_line.length - 1 || index === 0}
							data-section="time_line"
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
			</div>
		</section>
	);
}
