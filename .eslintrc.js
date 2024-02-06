module.exports = {
	root: true,
	extends: ["@gm-dev/eslint-config/next", "plugin:tailwindcss/recommended"],

	rules: {
		"import/first": "off",
		"no-shadow": "off",
		"react/jsx-no-bind": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-var-requires": "off",
		"global-require": "off",
		"prefer-const": "off",
		"tailwindcss/no-custom-classname": "off",
	},
};
