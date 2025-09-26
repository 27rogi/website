<script setup lang="ts">
import type { Collections } from "@nuxt/content"

interface RouteParams {
  item: string[]
}

const route = useRouter()
const { item } = route.currentRoute.value.params as RouteParams
const { locale } = useI18n()

const { data: page, status } = await useAsyncData(`page-${locale.value}-${item}`, async () => {
  const article = await queryCollection((`reviews_${locale.value}`)).path(`/reviews/${item.join("/")}`).first()

  // if no content found on current language try to use another one (ru/en or en/ru)
  if (!article) {
    const altLocale = locale.value === "ru" ? "en" : "ru"
    return { article: await queryCollection(`reviews_${altLocale}`).path(`/reviews/${item.join("/")}`).first(), differentLocale: true }
  }
  return { article, differentLocale: false }
}, {
  watch: [locale],
})

definePageMeta({
  // direct usage of useRoute from component leads to mount errors!
  key: route => `review-${(route.params as any).item}`,
  layout: "reviews",
})
</script>

<template>
  <div
    flex="~ col"
    m="x-auto"
    w="full"
    p="x-4"
    max-w="screen-2xl"
    gap="4"
    relative
  >
    <div v-if="page?.differentLocale === true" p="4" card="amber/60">
      <p>{{ $t("general.lang_missing") }}</p>
    </div>
    <div v-if="page" flex="~ col">
      <div relative text="xl" flex="~ col" gap="2" p="4" card="greendark/30" leading-tight>
        <h1 text="2xl" font="head 800">
          {{ page.article!.title }}
        </h1>
        <p>{{ page.article?.description }}</p>
        <p>{{ (page.article?.meta.categories as string[]) }}</p>
        <div v-if="page.article?.meta.icon" absolute top="0" right="0" p="4">
          <LazyIcon u-text="300% greendark-400" :name="page.article.meta.icon as string" />
        </div>
      </div>
      <article max-w-none prose="~ lg greendark invert" class="prose-headings:my-0 prose-p:my-2 prose-headings:py-0 [&_p]:text-brilliantsea-50" leading-snug>
        <ContentRenderer :value="page.article!" />
      </article>
    </div>
    <div v-else-if="status === 'pending'">
      <UiLoadingBlock />
    </div>
    <div v-else>
      <h1>Page not found</h1>
      <p>This page doesn't exist.</p>
    </div>
  </div>
</template>
