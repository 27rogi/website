<script setup>
const route = useRoute();
const { t } = useI18n({ useScope: "global" });

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: "id",
});

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
    <Html
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <Link
            href="/favicon.ico"
            rel="icon"
            type="image/x-icon"
          />
        <template
          v-for="link in head.link"
          :key="link.id"
        >
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.id"
        >
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
        <Meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Body>
        <PageBackground />
        <div
          flex="~ col"
          z="2"
          relative
          u-text="brilliantsea-50"
          bg="greendark-700/20"
          min-h="screen"
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
      </Body>
    </Html>
  </div>
</template>
