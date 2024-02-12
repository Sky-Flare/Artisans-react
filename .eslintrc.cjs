module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    'plugin:tailwindcss/recommended'
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'graphql.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'tailwindcss/no-custom-classname': ['off'],
    "unused-imports/no-unused-imports": "error",
    "react/react-in-jsx-scope": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
