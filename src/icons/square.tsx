import { ComponentProps } from "react";

interface ISquareProps extends ComponentProps<"svg"> {
	size?: number;
}

export function Square({ size, ...props }: ISquareProps) {
	return (
		<svg
			width={size ?? 24}
			height={size ?? 24}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 2.5a1 1 0 00-1 1v6h7v-7H3zm7-2H3a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-14a3 3 0 00-3-3h-7zm1 2v7h7v-6a1 1 0 00-1-1h-6zm-2 9H2v6a1 1 0 001 1h6v-7zm2 7v-7h7v6a1 1 0 01-1 1h-6z"
				fill="#757575"
			/>
		</svg>
	);
}
