module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'eslint-plugin-react',
    'simple-import-sort',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],

    'no-console': 'warn',
    curly: 'error',
    'react/jsx-no-useless-fragment': [
      'error',
      { allowExpressions: true },
    ],
    'no-unused-expressions': 'error',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
  },
}
