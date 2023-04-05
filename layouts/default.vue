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
    <div class="font-sans min-h-screen leading-snug overflow-hidden relative">
      <div
        class="z-1 cover"
        :class="{
          'cover--compact':
            router.currentRoute.value.path !== '/'
            && router.currentRoute.value.path !== '/en',
        }"
      >
        <Background class="z-1" />
      </div>
      <div class="m-auto max-w-screen-xl z-10 relative overflow-auto">
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
.cover {
  @apply h-[52vw] transition-all top-0 right-0 left-0 duration-400 absolute overflow-hidden sm:h-[46vw] md:h-[58vw] lg:h-[50vw];

  .cover__image {
    @apply transform-gpu transition-all bottom-0 scale-x-160 duration-800 will-change-transform filter overflow-visible absolute blur-0 sm:scale-x-120 lg:scale-x-110;
  }

  &::before {
    @apply bg-cover bg-top h-screen w-screen transform transform-gpu transition-all inset-0 -z-1 scale-x-85 scale-y-40 -rotate-8 -translate-y-[25vh] -translate-x-[25vw] -skew-x-0 skew-y-15 duration-500 will-change-transform filter block content-[''] absolute saturate-150 blur-[8rem] lg:-translate-y-[10vh] lg:translate-x-[5vw];
    background-image: url("/sbg.jpg");
  }

  &--compact {
    @apply h-[40vw];

    .cover__image {
      @apply scale-x-150 blur-[36px] md:blur-3xl;
    }

    &::before {
      @apply scale-x-65 scale-y-45;
    }
  }
}
</style>
