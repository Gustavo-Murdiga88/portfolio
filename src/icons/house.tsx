import { ComponentProps } from "react";

interface IHouseProps extends ComponentProps<"svg"> {
  size?: number;
}

export function House({ size, ...props }: IHouseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.393.705a1 1 0 011.214 0l11 8.4A1 1 0 0124 9.9v13.2c0 .908-.367 1.774-1.015 2.41a3.467 3.467 0 01-2.43.99H3.446a3.467 3.467 0 01-2.43-.99A3.378 3.378 0 010 23.1V9.9a1 1 0 01.393-.795l11-8.4zM2 10.395V23.1c0 .365.148.72.417.983.27.265.638.417 1.027.417h17.112c.389 0 .758-.152 1.027-.416.27-.264.417-.619.417-.984V10.395L12 2.758 2 10.395z"
        fill="#E5E5E5"
        className={props.className}
      />
    </svg>
  );
}
