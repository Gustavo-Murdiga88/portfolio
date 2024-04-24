import { useEffect, useState } from "react";

export type ControlsProps =
	| "home"
	| "skills"
	| "time_line"
	| "show_case"
	| "contract"
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
					setSelected(value[0].target.id as ControlsProps);
					window.history.pushState({}, "", `/#${value[0].target.id}`);
				}
			},
			{
				threshold: [0.2],
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
