import { ReactNode } from "react";

interface ITitleProps {
	title: string;
	children?: ReactNode;
	animation?: boolean;
}
export function Title({ title, children, animation = true }: ITitleProps) {
	return (
		<header>
			<strong
				data-aos={animation ? "fade-up" : undefined}
				className="mx-4 flex max-w-page border-b border-b-neutral-300 px-5 py-4 md:mx-auto md:w-full"
			>
				<span className="cursor-default uppercase text-neutral-600  dark:text-neutral-dark-900">
					{title}
				</span>
				{children}
			</strong>
		</header>
	);
}
