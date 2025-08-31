import nextPlugin from "@next/eslint-plugin-next";
import config from "@romashka_rv/frontend-config/eslint.config.js";

export default [
  ...config,
  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules
    },
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**"
    ],
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
