module.exports = {
	extends: 'fullstack',
	parser: 'babel-eslint',
	rules: {
		'no-unused-vars': 'off',
		'jsx-quotes': ['warn', 'prefer-single'],
		indent: ['warn', 'tab'],
		'object-curly-spacing': 'always',
		'array-bracket-spacing': 'always'
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		es6: true
	}
}
