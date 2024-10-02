module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'prettier'],
	plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties', 'stylelint-prettier'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		],
		'at-rule-no-unknown': null,
	},
	ignoreFiles: ['**/node_modules/**/*', '**/build/**/*'],
}
