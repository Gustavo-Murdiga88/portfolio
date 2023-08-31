import { Controls } from "@/components/controls/widget";

import { Main } from "@/modules/main/presenter";
import { Skills } from "@/modules/skills/presenter";
import { TimeLine } from "@/modules/time_line/presenter";

export default function Home() {
	return (
		<>
			{/* <Controls /> */}
			<Main />
			<Skills />
			<TimeLine />
		</>
	);
}
