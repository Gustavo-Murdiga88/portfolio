"use client";

import { ReactNode } from "react";

import { Scroll, ScrollContainerProps } from "scrollex";

interface IScrollerContainerProps extends ScrollContainerProps {
	children: ReactNode;
}

export function ScrollerContainer({
	children,
	...props
}: IScrollerContainerProps) {
	return <Scroll.Container {...props}>{children}</Scroll.Container>;
}
