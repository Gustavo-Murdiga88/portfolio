"use client";

import React, { ReactNode } from "react";

import * as RadixTooltip from "@radix-ui/react-tooltip";

interface ITooltipComponent {
	children: ReactNode;
	text: string | ReactNode;
}

export function Tooltip({ children, text }: ITooltipComponent) {
	return (
		<RadixTooltip.Provider delayDuration={0}>
			<RadixTooltip.Root>
				<RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
				<RadixTooltip.Portal>
					<RadixTooltip.Content
						align="center"
						className="z-[100] max-w-[450px] rounded-md bg-neutral-300 p-4 text-[14px] transition-all data-[state=closed]:animate-tooltipClose data-[state=delayed-open]:animate-tooltipOpen dark:bg-neutral-dark-300"
						sideOffset={5}
					>
						<p className="whitespace-break-spaces break-words font-semibold">
							{text}
						</p>
						<RadixTooltip.Arrow className="fill-neutral-300 dark:fill-neutral-dark-300" />
					</RadixTooltip.Content>
				</RadixTooltip.Portal>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
}
