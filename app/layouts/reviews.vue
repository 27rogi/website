<script setup lang="ts">
const route = useRoute()
const { t } = useI18n({ useScope: "global" })

useSeoMeta({
  ogImage: "/fulllogo.png",
})

useHead({
  titleTemplate: () => {
    return t("general.title", { title: route.meta.title ? `${route.meta.title} ~ ` : "" })
  },
})
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
