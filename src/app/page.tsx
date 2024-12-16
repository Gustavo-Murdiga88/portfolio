
import { Controls } from "@/components/controls/widget";
import { Main } from "@/modules/main/presenter";
import { About } from "@/modules/about/presenter";
import { ShowCase } from "@/modules/show_case/presenter";
import { Skills } from "@/modules/skills/presenter";
import { TimeLine } from "@/modules/time_line/presenter";
import { Contact } from "@/modules/contact/presenter";

export const dynamic = "force-static";

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
