module.exports = {
  env: {
    "browser": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "prettier",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    "no-unused-expressions": "off",
    "object-shorthand": "off",
    "import/order": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["error", {
      "extensions": [".ts", ".tsx"]
    }],
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "off"
  }
};