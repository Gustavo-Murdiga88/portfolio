import { Controls } from "@/components/controls/widget";
import { About } from "@/modules/about/presenter";
import { Contact } from "@/modules/contact/presenter";
import { Main } from "@/modules/main/presenter";
import { ShowCase } from "@/modules/show_case/presenter";
import { Skills } from "@/modules/skills/presenter";
import { TimeLine } from "@/modules/time_line/presenter";

export default function Home() {
	return (
		<>
			<Controls />
			<Main />
			<Skills />
			<TimeLine />
			<About />
			<ShowCase />
			<Contact />
		</>
	);
}
