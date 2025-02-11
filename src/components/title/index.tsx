import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITitleProps extends ComponentProps<"header"> {
	children?: ReactNode;
}

export function Title({ children, ...props }: ITitleProps) {
	return (
		<header {...props} className={twMerge(props.className, "pt-2")}>
			<strong className="mx-4 flex max-w-page border-b border-b-neutral-300 px-5 py-4 pb-2 md:mx-auto md:w-full">
				{children}
			</strong>
		</header>
	);
}
