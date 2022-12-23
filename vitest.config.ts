// vitest.config.ts
import { defineConfig } from 'vitest/config'
import NuxtVitest from 'vite-plugin-nuxt-test'

export default defineConfig({
    plugins: [NuxtVitest()],
    test: {
        // Your own configuration
    }
})
