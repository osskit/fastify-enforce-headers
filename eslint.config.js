import { baseConfig, testConfig } from '@osskit/eslint-config';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  {
    ignores: ['dist/**', '**/dist/**'],
  },
  {
    ...baseConfig,
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    languageOptions: {
      ...baseConfig.languageOptions,
      parserOptions: {
        ...baseConfig.languageOptions.parserOptions,
      },
    },
  },
  {
    ...testConfig,
    files: ['**/*.spec.ts'],
  },
);
