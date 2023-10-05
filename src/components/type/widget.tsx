"use client";

import { ComponentRef, useRef, useState } from "react";

import { TypeAnimation } from "react-type-animation";

export function TypeComponent() {
	const [shouldBeRender, setShouldBeRender] = useState(true);
	const typeComponent = useRef<ComponentRef<"div">>(null);

	if (!shouldBeRender) {
		return null;
	}

	function onTypeEnd() {
		const controls = document.querySelector("#controls");
		const doc = document?.documentElement;
		const nodes = document.querySelectorAll(".animated_stop");

		typeComponent?.current?.classList.add("animate-fadeOut");

		nodes.forEach((element) => {
			element.classList.remove("animated_stop");
		});

		controls.classList.remove("lg:invisible");
		controls.classList.add("animate-fadeIn");
		document.body.classList.remove("overflow-hidden");
		doc.classList.remove("overflow-hidden");

		setTimeout(() => {
			setShouldBeRender(false);
		}, 3000);
	}

	return (
		<div
			ref={typeComponent}
			className="fixed inset-0 z-10 flex items-center bg-neutral-100 dark:bg-neutral-dark-50"
		>
			<div className="mx-auto w-full max-w-page animate-modal px-3 text-center text-[32px] font-bold leading-relaxed text-neutral-900 dark:text-neutral-50 md:text-3xl">
				<TypeAnimation
					cursor
					style={{
						whiteSpace: "pre-line",
					}}
					sequence={[
						200,
						"Hey there 👋, I am Gustavo Murdiga",
						2000,
						"Hey there 👋, I am Gustavo Murdiga, and I am a Front-End developer",
						2000,
						"Hey there 👋, I am Gustavo Murdiga, and I am a Back-end developer",
						2000,
						"Hey there 👋, I am Gustavo Murdiga, and I am a Mobile developer",
						2000,
						`Hey there 👋, I am Gustavo Murdiga, and I am a Mobile developer.\nAre you read?`,
						onTypeEnd,
					]}
					repeat={0}
				/>
			</div>
		</div>
	);
}
