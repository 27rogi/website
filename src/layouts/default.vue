<script lang="ts" setup>
import Background from '~/assets/bg.svg?component'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const metadataKey = computed(() => route.meta.metadataKey)

const seo = computed(() => {
  return {
    title: t('metadata.titleTemplate', [getMetadataTranslation(t, metadataKey.value, 'title', ' •')]),
    ogTitle: getMetadataTranslation(t, metadataKey.value, 'title'),
    description: getMetadataTranslation(t, metadataKey.value, 'description', '', 'My personal website and portfolio.'),
  }
})

const hasPath = computed(() => {
  if (!router) {
    return false
  }
  return router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/en'
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
      'https://github.com/rogi27',
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
      <div
        class="bg z-1"
        :class="{
          'bg--compact': hasPath,
        }"
      >
        <Background class="z-1" />
      </div>
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

<style lang="scss" scoped>
.bg {
  @apply h-full transition-all top-0 right-0 left-0 duration-400 absolute overflow-hidden;

  &--compact {
    @apply blur-3xl h-[40vw] -top-15;
  }
}
</style>
