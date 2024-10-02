/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', 'react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'off', // 关闭 react-refresh 仅导出组件的规则
		'react/display-name': 'off', // 关闭 React 组件必须有 displayName 的规则
		'@typescript-eslint/no-explicit-any': 'off', // 关闭 TypeScript 不允许使用 any 类型的规则
		'@typescript-eslint/triple-slash-reference': 'off', // 关闭 TypeScript 不允许使用三斜杠引用的规则
		'@typescript-eslint/no-misused-promises': 'off', // 关闭 TypeScript 不允许误用 Promise 的规则
		'@typescript-eslint/explicit-function-return-type': 'off', // 关闭 TypeScript 函数必须显式返回类型的规则
		'react/react-in-jsx-scope': 'off', // 关闭 React JSX 必须在作用域内的规则
		'@typescript-eslint/strict-boolean-expressions': 'off', // 关闭 TypeScript 严格布尔表达式的规则
		'@typescript-eslint/no-floating-promises': 'off', // 关闭 TypeScript 不允许浮动 Promise 的规则
		'@typescript-eslint/return-await': 'off', // 关闭 TypeScript 必须在 async 函数中返回 await 的规则
		'@typescript-eslint/restrict-template-expressions': 'off', // 关闭 TypeScript 限制模板表达式的规则
		'prefer-regex-literals': 'off', // 关闭 优先使用正则表达式字面量的规则
		'prefer-promise-reject-errors': 'off', // 关闭 优先使用 Error 对象作为 Promise 拒绝原因的规则
		'@typescript-eslint/promise-function-async': 'off', // 关闭 TypeScript 必须将返回 Promise 的函数标记为 async 的规则
		'@typescript-eslint/consistent-type-definitions': 'off', // 关闭 TypeScript 一致的类型定义的规则
		'@typescript-eslint/consistent-type-imports': 'off', // 关闭 TypeScript 一致的类型导入的规则
		'@typescript-eslint/prefer-nullish-coalescing': 'off', // 关闭 TypeScript 优先使用空值合并运算符的规则
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // 关闭 TypeScript 不必要的布尔字面量比较的规则
		'@typescript-eslint/no-confusing-void-expression': 'off', // 关闭 TypeScript 不允许混淆的 void 表达式的规则
		'@typescript-eslint/no-confusing-void-expression': 'off', // 关闭 TypeScript 不允许混淆的 void 表达式的规则（重复）
		'@typescript-eslint/no-non-null-assertion': 'off', // 关闭 TypeScript 不允许非空断言的规则
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // 关闭 TypeScript 不允许非空断言的可选链的规则
		'n/no-callback-literal': 'off', // 关闭 Node.js 不允许回调字面量的规则
		'no-async-promise-executor': 'off', // 关闭 不允许异步 Promise 执行器的规则
		'@typescript-eslint/no-dynamic-delete': 'off', // 关闭 TypeScript 不允许动态删除的规则
		'react-hooks/rules-of-hooks': 'off', // 关闭 React Hooks 的规则
		'no-empty': 'off', // 关闭 不允许空块的规则
		'react-hooks/exhaustive-deps': 'off', // 关闭 React Hooks 的依赖项规则
		'no-unsafe-optional-chaining': 'off', // 关闭 不安全的可选链的规则
		'react-hooks/exhaustive-deps': 'off', // 关闭 React Hooks 的依赖项规则（重复）
	},
}
