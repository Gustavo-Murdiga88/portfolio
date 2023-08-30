import { ComponentProps } from "react";

interface IFileProps extends ComponentProps<"svg"> {
	size?: number;
}

export function File({ size, ...props }: IFileProps) {
	return (
		<svg
			width={size ?? 24}
			height={size ?? 24}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M14.5 2.5H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-5.5-5.5z"
				stroke="#757575"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 2.5v6h6M8 13.5h8M8 17.5h8"
				stroke="#757575"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
