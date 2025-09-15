<script setup>
const route = useRoute();
const { t } = useI18n({ useScope: "global" });

const metadata = computed(() => {
  return {
    description: route.meta.key ? t(`page.${route.meta.key}.seo.description`) : null,
  };
});

useSeoMeta({
  description: () => metadata.value.description,
  ogImage: "/fulllogo.png",
});

useHead({
  titleTemplate: () => {
    return t("general.title", { title: route.meta.key ? `${t(`page.${route.meta.key}.seo.title`)} ~ ` : "" })
  }
})
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
          relative
          u-text="brilliantsea-50 size-xs lg:size-base"
          bg="greendark-700/20"
          min-h="screen"
          selection="bg-greenspring-600/50 text-white"
        >
          <PageNavBar />
          <slot />
          <div
            sticky
            top="100vh"
          >
            <PageFooter />
          </div>
        </div>
        <LazyPageBackground hydrate-on-visible />
      </Body>
    </Html>
  </div>
</template>