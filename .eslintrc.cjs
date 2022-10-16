/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		'indent': ['error', 'tab'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-types': 'off',
		'no-console': 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
		'comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/no-empty-function': 'off',
		'vue/multi-word-component-names': 'off',
	},
	parserOptions: {
		ecmaVersion: 'latest',
	},
}
