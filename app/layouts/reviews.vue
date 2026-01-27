<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const localeHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: "id",
})

useSeoMeta({
  ogImage: "/fulllogo.png",
})

// () => is required here, see: https://github.com/nuxt-modules/i18n/issues/3206
useHead(() => ({
  ...localeHead.metaObject.value,
  titleTemplate: () => {
    return t("general.title", { title: route.meta.key ? `${t(`page.${route.meta.key}.seo.title`)} ~ ` : "" })!.toString()
  },
}))
watch(() => route.fullPath, () => localeHead.updateMeta(), { immediate: true })
</script>

<template>
  <div
    bg="greendark-900"
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
          relative
          u-text="brilliantsea-50 size-xs lg:size-base"
          bg="greendark-700/20"
          min-h="screen"
          selection="bg-greenspring-600/50 text-white"
          class="[&_p]:leading-normal"
        >
          <AppNavBar reviews />
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
      </Body>
    </Html>
  </div>
</template>
