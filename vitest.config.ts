import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    globals: true,
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/**/*.spec.{js,jsx,ts,tsx}',
        'src/index.{js,jsx,ts,tsx}',
        'src/setupTests.{js,ts}',
        'src/**/*.d.ts',
        '**/node_modules/**',
      ],
      provider: 'v8', // или "c8" (устаревший)
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
      },
      // Дополнительные настройки (опционально)
      reporter: ['text', 'json', 'html'], // Форматы отчёта
    },
  },
});
