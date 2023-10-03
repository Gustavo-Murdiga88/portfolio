"use client";

import { ReactNode } from "react";

import { Scroll, ScrollSectionProps } from "scrollex";

interface IScrollerSectionProps extends ScrollSectionProps {
	children: ReactNode;
}

export function ScrollerSection({ children, ...props }: IScrollerSectionProps) {
	return <Scroll.Section {...props}>{children}</Scroll.Section>;
}
