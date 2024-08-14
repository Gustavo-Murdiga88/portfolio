import nextDynamic from "next/dynamic";

import { Controls } from "@/components/controls/widget";
import { Main } from "@/modules/main/presenter";

export const dynamic = "force-static";

const About = nextDynamic(() =>
	import("@/modules/about/presenter").then(({ About }) => About),
);
const ShowCase = nextDynamic(() =>
	import("@/modules/show_case/presenter").then(({ ShowCase }) => ShowCase),
);

const Skills = nextDynamic(() =>
	import("@/modules/skills/presenter").then(({ Skills }) => Skills),
);

const TimeLine = nextDynamic(() =>
	import("@/modules/time_line/presenter").then(({ TimeLine }) => TimeLine),
);

const Contact = nextDynamic(() =>
	import("@/modules/contact/presenter").then(({ Contact }) => Contact),
);

export default function Home() {
	return (
		<>
			<Controls />
			<Main />
			<main>
				<Skills />
				<TimeLine />
				<About />
				<ShowCase />
				<Contact />
			</main>
		</>
	);
}
