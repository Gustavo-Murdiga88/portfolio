"use client";

import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

export function InitAOS() {
	useEffect(() => {
		setTimeout(() => {
			AOS.init({
				once: true,
				offset: 40,
			});
		}, 200);
	}, []);
}
