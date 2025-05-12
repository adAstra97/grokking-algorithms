import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
      'no-console': 'warn'
    },
    env: {
      browser: true,
      node: true,
      es2021: true
    }
  },
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended
])
