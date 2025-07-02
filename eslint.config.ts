import nadle from "@nadle/eslint-config";
import tsEslint, { type ConfigArray } from "typescript-eslint";

const config: ConfigArray = tsEslint.config(
	...nadle.configs.recommended,
	nadle.configs.react,
	{
		ignores: ["**/lib", "**/build", "**/.nadle", "**/node_modules/"]
	},
	{
		languageOptions: {
			parserOptions: {
				project: ["**/tsconfig.eslint.json"]
			}
		}
	}
);

export default config;
