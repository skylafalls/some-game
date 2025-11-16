import stylistic from "@stylistic/eslint-plugin";
import oxlint from "eslint-plugin-oxlint";
import svelte from "eslint-plugin-svelte";
import { type Config, defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

const _default: Config[] = defineConfig(
  globalIgnores(["node_modules", "dist"]),
  tseslint.configs.strictTypeChecked,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
        parser: tseslint.parser,
        extraFileExtensions: [".svelte"],
        svelteConfig,
      },
    },
  },
  stylistic.configs.customize({
    braceStyle: "1tbs",
    semi: true,
    quotes: "double",
  }),
  oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
  {
    rules: {
      "@typescript-eslint/no-misused-promises": ["error", {
        checksVoidReturn: false,
      }],
    },
  },
);

export default _default;
