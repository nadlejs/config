import eslint from "@eslint/js";
import { type Linter } from "eslint";
import nPlugin from "eslint-plugin-n";
import tsEslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const recommended: Linter.Config[] = [
	eslint.configs.recommended,
	tsEslint.configs.recommended as Linter.Config,
	nPlugin.configs["flat/recommended-module"],
	{
		name: "nadle/recommended",
		linterOptions: {
			reportUnusedDisableDirectives: "error"
		},
		plugins: {
			stylistic,
			perfectionist,
			unusedImports
		},
		rules: {
			curly: "error",
			"sort-keys": "off",
			"no-console": "warn",
			"max-params": ["error", 4],
			"no-restricted-imports": ["error", { patterns: ["consola"] }],

			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/explicit-member-accessibility": "error",
			"@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports", fixStyle: "inline-type-imports" }],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", ignoreRestSiblings: true, destructuredArrayIgnorePattern: "^_", caughtErrorsIgnorePattern: "^error$" }
			],

			"n/hashbang": "off",
			"n/no-missing-import": "off",
			"n/no-unpublished-import": "off",
			"n/prefer-node-protocol": "error",
			"n/no-unsupported-features/node-builtins": "off",

			"unusedImports/no-unused-imports": "error",

			"perfectionist/sort-named-imports": ["error", { type: "line-length" }],
			"perfectionist/sort-objects": ["error", { type: "line-length", partitionByNewLine: true }],
			"perfectionist/sort-exports": ["error", { type: "line-length", partitionByNewLine: true }],
			"perfectionist/sort-interfaces": ["error", { type: "line-length", partitionByNewLine: true }],
			"perfectionist/sort-object-types": ["error", { type: "line-length", partitionByNewLine: true }],
			"perfectionist/sort-imports": [
				"error",
				{ type: "line-length", newlinesBetween: "always", groups: ["side-effect", "builtin", "external", ["parent", "sibling", "index"]] }
			],

			"stylistic/padding-line-between-statements": [
				"error",
				{ prev: "*", blankLine: "always", next: ["if", "while", "for", "switch", "try", "do", "return"] },
				{ next: "*", prev: "block-like", blankLine: "always" }
			]
		}
	}
];

const react: Linter.Config = {
	...reactPlugin.configs.flat.recommended,
	name: `nadle/react`,
	settings: {
		react: {
			version: "19.0.0"
		}
	},
	plugins: {
		...reactPlugin.configs.flat.recommended.plugins,
		"react-hooks": reactHooksPlugin
	},
	rules: {
		...reactPlugin.configs.flat.recommended.rules,
		"react/prop-types": "off",
		"react/display-name": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-boolean-value": "error",
		"react/jsx-curly-brace-presence": ["error", "never"],

		...reactHooksPlugin.configs.recommended.rules,
		"react-hooks/exhaustive-deps": "error"
	}
};

export default {
	configs: {
		react,
		recommended
	}
};
