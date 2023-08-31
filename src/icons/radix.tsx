import * as React from "react";

interface IRadixProps extends React.ComponentProps<"svg"> {
	size?: number;
}

export function Radix({ size, ...props }: IRadixProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 70 70"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_9_1715)">
				<path
					d="M33.6 70a22.4 22.4 0 110-44.8V70zm0-70H11.2v22.4h22.4V0zm14 22.4a11.2 11.2 0 100-22.4 11.2 11.2 0 000 22.4z"
					fill="#E5E5E5"
				/>
			</g>
			<defs>
				<clipPath id="clip0_9_1715">
					<rect y={0.00012207} width={70} height={70} rx={16} fill="#fff" />
				</clipPath>
			</defs>
		</svg>
	);
}
