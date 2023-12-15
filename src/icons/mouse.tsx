import { ComponentProps } from "react";

interface IHouseProps extends ComponentProps<"svg"> {
	size?: number;
}

export function Mouse({ size, ...props }: IHouseProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20 40A11.6 11.6 0 018.432 28.432V11.568a11.568 11.568 0 0123.136 0v16.864A11.6 11.6 0 0120 40zm0-37.924a9.504 9.504 0 00-9.492 9.492v16.864a9.492 9.492 0 0018.984 0V11.568A9.504 9.504 0 0020 2.076z"
				className="fill-zinc-950 dark:fill-[#004381]"
				fillOpacity={0.8}
			/>
			<path
				d="M20 16.512a1.04 1.04 0 01-1.04-1.036V9.344a1.04 1.04 0 112.08 0v6.132A1.04 1.04 0 0120 16.512z"
				className="animate-scroll fill-zinc-950 dark:fill-[#004381]"
				fillOpacity={0.8}
			/>
		</svg>
	);
}
