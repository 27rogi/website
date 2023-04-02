import viteSVGLoader from 'vite-svg-loader'
import viteWindiCSS from 'vite-plugin-windicss'
import viteStylelint from 'vite-plugin-stylelint'

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  runtimeConfig: {
    githubToken: '',
    public: {
      branch: 'master',
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ryzhenkov.space' },
      ],
    },
  },
  vite: {
    logLevel: 'info',
    plugins: [
      viteStylelint({
        fix: true,
      }),
      viteSVGLoader(),
      viteWindiCSS({
        transformCSS: 'pre',
        scan: {
          dirs: ['.'],
          fileExtensions: ['vue', 'js', 'ts', 'scss'],
        },
      }),
    ],
  },
  css: [
    'virtual:windi.css',
    '@fontsource/inter/variable.css',
    '@fontsource/raleway/variable.css',
    '~/assets/global.scss',
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
  },
  modules: [
    'nuxt-security',
    '@nuxtjs/html-validator',
    '@nuxtjs/critters',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    'nuxt-schema-org',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    'nuxt-icon',
  ],
  build: {
    transpile: [
      'date-fns',
    ],
  },
  // Module settings
  critters: {
    config: {
      preload: 'swap',
    },
  },
  image: {
    presets: {
      optimized: {
        modifiers: {
          format: 'webp',
          quality: 90,
          lazy: true,
        },
      },
    },
  },
  i18n: {
    baseUrl: 'https://ryzhenkov.space',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json',
      },
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'rspace--i18n',
      redirectOn: 'root',
    },
    defaultLocale: 'ru',
    vueI18n: {
      legacy: false,
      fallbackLocale: 'ru',
    },
    lazy: true,
    langDir: 'lang/',
    skipSettingLocaleOnNavigate: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  schemaOrg: {
    canonicalHost: 'https://ryzhenkov.space',
  },
})
