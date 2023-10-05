import * as React from "react";

interface IDetailsProps extends React.ComponentProps<"svg"> {
	size?: number;
}
export function Details({ size, ...props }: IDetailsProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 52 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M32.417 32.916a12 12 0 01-12.828-8.201.5.5 0 00-.95.31 13 13 0 10.775-9.92.5.5 0 00.89.453 12 12 0 1112.113 17.358zM8.5 20h20.38a2.668 2.668 0 110 1H8.5a.5.5 0 110-1z"
				fill="#757575"
			/>
		</svg>
	);
}
