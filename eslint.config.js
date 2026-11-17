import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';

export default [
	{
		ignores: ['**/public/**', '**/node_modules/**'],
	},
	{
		files: ['**/*.js', '**/*.jsx'],
		languageOptions: {
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
			globals: { window: 'readonly', document: 'readonly' },
		},
		plugins: { react: reactPlugin },
		rules: {
			// basic recommended ruleset
		},
	},
];

