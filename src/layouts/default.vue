<script lang="ts" setup>
const route = useRoute()
const { t } = useI18n()
const metadataKey = computed(() => route.meta.metadataKey)

const seo = computed(() => {
  return {
    title: t('metadata.titleTemplate', [getMetadataTranslation(t, metadataKey.value, 'title', ' •')]),
    ogTitle: getMetadataTranslation(t, metadataKey.value, 'title'),
    description: getMetadataTranslation(t, metadataKey.value, 'description', '', 'My personal website and portfolio.'),
  }
})

useHeadSafe({
  title: () => seo.value.title,
  meta: [
    {
      name: 'description',
      content: () => seo.value.description,
    },
  ],
})

useSchemaOrg([
  definePerson({
    name: () => t('page.resume.header.name'),
    image: '/face.jpg',
    sameAs: [
      'https://github.com/27rogi',
    ],
  }),
])

useSeoMeta({
  ogTitle: () => seo.value.ogTitle,
  ogDescription: () => seo.value.description,
  ogImage: '/fulllogo.png',
  ogImageHeight: 128,
  ogImageWidth: 128,
  themeColor: '#4ecba4',
})
</script>

<template>
  <div>
    <div class="relative min-h-screen overflow-hidden leading-snug font-sans">
      <Background />
      <div class="relative z-10 m-auto max-w-screen-xl overflow-auto">
        <Navbar />
        <div class="min-h-[80vh]">
          <slot :metadata-key="metadataKey" />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
