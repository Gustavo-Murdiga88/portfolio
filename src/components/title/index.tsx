import { ComponentProps, ReactNode } from "react";

interface ITitleProps extends ComponentProps<"header"> {
	title: string;
	children?: ReactNode;
}
export function Title({ title, children, ...props }: ITitleProps) {
	return (
		<header {...props}>
			<strong className="mx-4 flex max-w-page border-b border-b-neutral-300 px-5 py-4 md:mx-auto md:w-full">
				<span className="cursor-default uppercase text-neutral-600 dark:text-neutral-dark-900">
					{title}
				</span>
				{children}
			</strong>
		</header>
	);
}
