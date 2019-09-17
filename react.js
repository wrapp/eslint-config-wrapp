module.exports = {
	plugins: [
		'react-hooks',
	],
	extends: [
		'./base.js',
		'airbnb/rules/react',
		'airbnb/rules/react-a11y',
		'eslint-config-prettier/react',
	],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/require-default-props': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
}
