module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'eslint-plugin-react',
    'simple-import-sort',
    'import',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    curly: 'error',
    'no-unused-expressions': 'error',

    'import/prefer-default-export': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],

    'react/jsx-no-useless-fragment': [
      'error',
      { allowExpressions: true },
    ],
  },
}
