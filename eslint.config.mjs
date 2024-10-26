import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/prop-types": "off", // Set to "off" if you don't want prop validation
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "no-debugger": "warn",
      eqeqeq: ["warn", "always"],
      curly: "warn",
      "no-undef": "warn",
      "no-redeclare": "warn",
      "consistent-return": "warn",
    },
  },
];
