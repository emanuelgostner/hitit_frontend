import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        baseURL: 'http://localhost:3000',
        headless: false,
        viewport: { width: 375, height: 812 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
    },
};
export default config;
