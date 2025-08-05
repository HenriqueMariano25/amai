// https://nuxt.com/docs/api/configuration/nuxt-
import Aura from '@primeuix/themes/aura'
import {definePreset} from "@primeuix/styled";
import {locale} from "./plugins/primevue-locale-dictionary"

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            500: '#167d7f',
            600: '#167d7f',
            950: '#0b2034',
            // 50: '#e8f2f2',
            // 100: '#b9d8d9',
            // 200: '#8bbebf',
            // 300: '#5ca4a5',
            // 400: '#2d8a8c',
            // 500: '#167d7f',
            // 600: '#147172',
            // 700: '#126466',
            // 800: '#0f5859',
            // 900: '#0b3f40',
            // 950: '#093233'
        },
        tooltip: {
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
            padding: '4px',
            borderRadius: '4px',
            gutter: '4px',
        },
    },
});

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    runtimeConfig: {
        public: {
            firebaseApiKey: process.env.FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
            firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            firebaseAppId: process.env.FIREBASE_APP_ID
        }
    },
    devtools: {enabled: true},
    modules: [
      '@nuxt/eslint',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxtjs/tailwindcss',
      '@primevue/nuxt-module',
    ],
    primevue: {
        options: {
            locale: {...locale},
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: MyPreset,
                options: {
                    prefix: 'p',
                    darkModeSelector: false,
                    cssLayer: false
                }
            }
        },
    },
    css: [
        '@/assets/css/fonts.css'
    ]
})