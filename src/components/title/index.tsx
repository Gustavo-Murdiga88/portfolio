import { ReactNode } from "react";

interface ITitleProps {
	title: string;
	children?: ReactNode;
}
export function Title({ title, children }: ITitleProps) {
	return (
		<strong
			data-aos="fade-up"
			data-aos-delay="50"
			className="mx-4 flex max-w-page border-b border-b-neutral-300 px-5 py-4 md:mx-auto md:w-full"
		>
			<span className="cursor-default uppercase text-neutral-600  dark:text-neutral-dark-900">
				{title}
			</span>
			{children}
		</strong>
	);
}
