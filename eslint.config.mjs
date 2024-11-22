import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['dist/*'],
  },
  eslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
]
