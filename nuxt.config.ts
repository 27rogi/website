import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'
import viteSvgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: false,
  experimental: {
    inlineSSRStyles: false,
    // asyncEntry: true,
    // asyncContext: true,
    // writeEarlyHints: true,
  },
  runtimeConfig: {
    githubToken: '',
    public: {
      branch: 'main',
      siteUrl: 'https://rogi.su',
    },
  },
  nitro: {
    compressPublicAssets: true,
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  vite: {
    plugins: [
      viteSvgLoader(),
    ],
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://rogi.su' },
      ],
    },
    layoutTransition: { name: 'ease', mode: 'out-in' },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@fontsource-variable/inter',
    '@fontsource-variable/raleway',
    '~/assets/global.scss',
  ],
  // typescript: {
  //   tsConfig: {
  //     compilerOptions: {
  //       strict: true,
  //       moduleResolution: 'bundler',
  //     },
  //   },
  // },
  modules: [
    '@unocss/nuxt',
    // '@nuxtjs/device',
    'nuxt-security',
    '@nuxtjs/critters',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    // 'nuxt-seo-experiments',
    'nuxt-schema-org',
    ['@nuxtjs/robots', {
      rules: {
        Sitemap: 'https://rogi.su/sitemap.xml',
        Host: 'https://rogi.su/',
        UserAgent: '*',
        Disallow: '',
      },
    }],
    'nuxt-icon',
    '@nuxt/content',
    // '@nuxtjs/fontaine',
    // 'nuxt-delay-hydration',
  ],

  // Module Settings

  content: {
    api: {
      baseURL: '/api/_blog',
    },
    watch: {
      ws: {
        port: 4000,
      },
    },
    sources: {
      blog: {
        driver: 'fs',
        prefix: '/blog',
        base: resolve(__dirname, 'src/blog'),
      },
    },
    markdown: {
      anchorLinks: true,
    },
    highlight: {
      theme: 'poimandres',
    },
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  sitemap: {
    siteUrl: 'https://rogi.su',
  },
  delayHydration: {
    replayClick: true,
    mode: 'mount',
    // eslint-disable-next-line n/prefer-global/process
    debug: process.env.NODE_ENV === 'development',
  },
  security: {
    // vite has problems with CSP and requires deep look to fix all errors due to script-src and etc...
    // nonce: true,
    headers: false,
  },
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
    baseUrl: 'https://rogi.su',
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
      useCookie: false,
      redirectOn: 'root',
    },
    defaultLocale: 'ru',
    // prepare for migration
    // vueI18n: './i18n.config.ts',
    lazy: false,
    langDir: 'lang/',
    skipSettingLocaleOnNavigate: true,
  },
  schemaOrg: {
    host: 'https://rogi.su',
  },
})
