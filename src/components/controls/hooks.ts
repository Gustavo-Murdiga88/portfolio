import { useEffect, useState } from "react";

export type ControlsProps =
	| "home"
	| "skills"
	| "time_line"
	| "show_case"
	| "contact"
	| "about";
export function useControls() {
	const [selected, setSelected] = useState<ControlsProps>("home");

	useEffect(() => {
		const location = window?.location.hash?.replace("#", "") as ControlsProps;
		setSelected(location);
	}, []);

	useEffect(() => {
		const searchNodes = document.querySelectorAll("[data-main='true']");

		const observer = new IntersectionObserver(
			(value) => {
				if (value[0].isIntersecting) {
					const data = (value[0].target as HTMLElement).dataset
						.section as ControlsProps;
					setSelected(data);
					window.history.pushState({}, "", `/#${data}`);
				}
			},
			{
				threshold: [1],
			},
		);

		searchNodes.forEach((node) => {
			observer.observe(node);
		});

		return () => {
			searchNodes.forEach((node) => {
				observer.unobserve(node);
			});
		};
	}, []);

	return {
		setSelected,
		selected,
	};
}
