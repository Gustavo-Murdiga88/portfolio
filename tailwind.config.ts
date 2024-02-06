import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)"],
			},
			transitionDuration: {
				scale: ".200s",
			},

			willChange: {
				tooltip: "opacity, transform",
			},

			keyframes: {
				rotate: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				"fade-in": {
					from: {
						opacity: "0",
					},
					to: {
						opacity: "1",
					},
				},
			},

			animation: {
				rotate: "rotate 2s cubic-bezier(.26,.09,.81,.55) infinite",
				"fade-in": "fade-in 1s ease-in-out forwards",
			},

			minHeight: {
				"content-height": "900px",
			},

			width: {
				modal: "800px",
			},

			maxWidth: {
				page: "1140px",
			},

			inset: {
				controls: "calc(((100% - 1255px)/2) - 56px)",
			},

			boxShadow: {
				btn1: "-4px 4px 6px 0px rgba(0, 0, 0, 0.35) inset, 4px 0px 4px 2px rgba(0, 0, 0, 0.30) inset",
				card: "-4px 4px 4px 2px rgba(0, 0, 0, 0.25)",
			},

			dropShadow: {
				btn: "-4px 4px 6px 0px rgba(0, 0, 0, 0.35) inset, 4px 0px 4px 2px rgba(0, 0, 0, 0.30) inset",
				card: "-4px 4px 4px rgba(0, 0, 0, 0.25)",
			},

			fontSize: {
				xs: "16px",
				"2xs": "17px",
				sm: "18px",
				md: "19px",
				lg: "21px",
				xl: "24px",
				"2xl": "29px",
				"3xl": "54px",
				"4xl": "150px",
			},

			borderRadius: {
				xs: "8px",
				sm: "16px",
				md: "20px",
				lg: "24px",
				xl: "32px",
				full: "50%",
			},

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				card: `linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))`,
			},

			colors: {
				blue: {
					"0": "#004381",
					"50": "#001733",
					"100": "#002F67",
					"200": "#004381",
					"300": "#00569A",
					"400": "#0069B3",
					"500": "#0078C5",
					"600": "#3E8CD8",
					"700": "#599FE8",
					"800": "#5BBAFF",
					"900": "#98D6FF",
					"950": "#C9EBFF",
				},

				"blue-dark": {
					"0": "#5BBAFF",
					"50": "#C9EBFF",
					"100": "#98D6FF",
					"200": "#5BBAFF",
					"300": "#599FE8",
					"400": "#3E8CD8",
					"500": "#0078C5",
					"600": "#0069B3",
					"700": "#00569A",
					"800": "#004381",
					"900": "#002F67",
					"950": "#001733",
				},
				neutral: {
					"0": "rgba(229, 229, 229, 0.8)",
					"50": "#F2F2F2",
					"100": "#E5E5E5",
					"200": "#CCCCCC",
					"300": "#A1A1A5",
					"400": "#999999",
					"500": "#646467",
					"600": "#454548",
					"700": "#404040",
					"800": "#333333",
					"900": "#262626",
					"950": "#000000",
					"1000": "rgba(253, 253, 255, 0.20)",
				},

				"neutral-dark": {
					"0": "rgba(38, 38, 38, 0.8)",
					"50": "#000000",
					"100": "#262626",
					"200": "#333333",
					"300": "#404040",
					"400": "#454548",
					"500": "#646467",
					"600": "#757575",
					"700": "#787777",
					"800": "#727272",
					"900": "#E5E5E5",
					"950": "#F2F2F2",
					"1000": "rgba(0,0,0, 0.2)",
					"1100": "#121214",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
