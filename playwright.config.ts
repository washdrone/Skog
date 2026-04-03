import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.SITE_URL || 'http://localhost:3000'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--proxy-bypass-list=localhost,127.0.0.1,0.0.0.0',
      ],
    },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'iPhone 13',
      use: {
        ...devices['iPhone 13'],
        defaultBrowserType: 'chromium',
      },
    },
    {
      name: 'Pixel 7',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'iPad Mini',
      use: {
        ...devices['iPad Mini'],
        defaultBrowserType: 'chromium',
      },
    },
  ],
  webServer: process.env.SITE_URL
    ? undefined
    : {
        command: 'npm run dev -- -p 3100',
        url: 'http://localhost:3100',
        reuseExistingServer: !process.env.CI,
        timeout: 30000,
      },
})
