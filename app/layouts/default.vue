<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
// to be replaced in i18n with experimental.strictSeo
const localeHead = useLocaleHead({ seo: true})

const metadata = computed(() => {
  return {
    description: route.meta.key ? t(`page.${route.meta.key}.seo.description`) : null,
  }
})

useSeoMeta({
  description: () => metadata.value.description,
  ogImage: "/fulllogo.png",
})

// () => is required here, see: https://github.com/nuxt-modules/i18n/issues/3206
useHead(() => ({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs!.lang
  },
  link: [...(localeHead.value.link || [])],
  meta: [...(localeHead.value.meta || [])],
  titleTemplate: () => {
    return t("general.title", { title: route.meta.key ? `${t(`page.${route.meta.key}.seo.title`)} ~ ` : "" })
  }
}))
</script>

<template>
  <div
    bg="greendark-800"
    font="content 500"
    overflow="hidden"
  >
    <Html>
      <Head>
        <Link
          href="/favicon.ico"
          rel="icon"
          type="image/x-icon"
        />
        <Meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Body>
        <div
          flex="~ col"
          z="2"

          u-text="brilliantsea-50 size-xs lg:size-base"
          bg="greendark-700/20"
          min-h="screen"
          selection="bg-greenspring-600/50 text-white"
          relative
          class="[&_p]:leading-normal"
        >
          <AppNavBar />
          <div contents>
            <slot />
          </div>
          <div
            sticky
            top="100vh"
          >
            <AppFooter />
          </div>
        </div>
        <AppBackground />
      </Body>
    </Html>
  </div>
</template>
