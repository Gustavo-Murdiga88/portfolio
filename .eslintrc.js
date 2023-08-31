module.exports = {
	root: true,
	extends: [
		"next/core-web-vitals",
		"@gm-dev/eslint-config/react",
		"plugin:tailwindcss/recommended",
	],

	plugins: ["eslint-plugin-import-helpers"],

	rules: {
		"import-helpers/order-imports": [
			"warn",
			{
				newlinesBetween: "always",
				groups: [
					"/^(react)$/",
					"/^(lucide-react)$/",
					"/^(@/components)/",
					"/^(assets|styles)/",
					"/^(./)/",
				],
				alphabetize: {
					order: "asc",
					ignoreCase: true,
				},
			},
		],
	},
};
