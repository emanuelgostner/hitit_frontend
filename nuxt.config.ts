// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // target: 'static',
    vue: {
      config: {
          productionTip: false,
          devtools: true
      }
    },
    experimental: {
        externalVue: false,
    },
    typescript: {
        shim: false
    },
    modules: [
        // '@kevinmarrec/nuxt-pwa',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    pwa: {
        meta: {
            title: 'My PWA',
            author: 'Me',
        },
        manifest: {
            name: 'Nuxt.js PWAs are so easy',
            short_name: 'Nuxt.js PWA',
            lang: 'en',
            display: 'standalone',
            "icons": [
                {
                    "src": "static/icons/icon-48x48.png",
                    "sizes": "48x48",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-72x72.png",
                    "sizes": "72x72",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-96x96.png",
                    "sizes": "96x96",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-128x128.png",
                    "sizes": "128x128",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-144x144.png",
                    "sizes": "144x144",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-152x152.png",
                    "sizes": "152x152",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-384x384.png",
                    "sizes": "384x384",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "static/icons/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                }
            ]
        },
        // to allow the app to be installable in development, default is false
        workbox: {
            enabled: true
        }
    },
    app: {
        head: {
            meta: [
                {
                    name:"viewport",
                    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                }
            ]
        },
    },
    css: ['~/assets/css/tailwind.css'],
})
