import {
    eslintBaseConfig,
    eslintPluginStylisticConfig,
    eslintPluginTypescriptConfig,
    eslintPluginUnicornConfig,
    globals
} from "@virtuallyunknown/eslint-config";

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...eslintBaseConfig,
    ...eslintPluginTypescriptConfig,
    ...eslintPluginUnicornConfig,
    ...eslintPluginStylisticConfig,
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parserOptions: {
                project: true,
            },
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        linterOptions: {
            noInlineConfig: false,
            reportUnusedDisableDirectives: true,
        },
    },
    {
        ignores: ["**/*.{js,cjs,mjs}"],
    },
];