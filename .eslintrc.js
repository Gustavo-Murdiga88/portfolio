module.exports = {
	root: true,
	extends: ["@gm-dev/eslint-config/next", "plugin:tailwindcss/recommended"],

	plugins: ["eslint-plugin-import-helpers"],

	rules: {
		"no-shadow": "off",
		"react/jsx-no-bind": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-var-requires": "off",
		"global-require": "off",
		"prefer-const": "off",
		"tailwindcss/no-custom-classname": "off",
		"import-helpers/order-imports": [
			"warn",
			{
				newlinesBetween: "always",
				groups: [
					"/^(react)$/",
					"/^(lucide-react|dayjs|next)/",
					"/^(@/)/",
					"/^(@)/",
					"/^(/assets|styles)/",
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
