import {
    eslintBaseConfig,
    eslintPluginReactConfig,
    eslintPluginStylisticConfig,
    eslintPluginTypescriptConfig,
    eslintPluginUnicornConfig,
    globals,
} from "@virtuallyunknown/eslint-config";

export default [
    ...eslintBaseConfig,
    ...eslintPluginTypescriptConfig,
    ...eslintPluginUnicornConfig,
    ...eslintPluginReactConfig,
    ...eslintPluginStylisticConfig,
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
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