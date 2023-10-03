"use client";

import { ReactNode } from "react";

import { Keyframes, Scroll, ScrollItemProps } from "scrollex";

const keyframes: Record<string, Keyframes> = {
	greeting: ({ data }) => ({
		[data.index * 100]: {
			opacity: 0,
			translateY: -200,
		},
		[data.index * 100 + 1]: {
			opacity: 1,
			translateY: 0,
		},
	}),
};

interface IScrollerItemProps extends ScrollItemProps {
	children: ReactNode;
}

export function ScrollerItem({ children, ...props }: IScrollerItemProps) {
	return (
		<Scroll.Item {...props} keyframes={keyframes.greeting}>
			{children}
		</Scroll.Item>
	);
}
