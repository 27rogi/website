<script setup lang="ts">
import Giscus from '@giscus/vue'
import { DateTime } from 'luxon'
import { useTagsStore } from '~/store/tags'

const { locale } = useI18n()
const tags = useTagsStore()
</script>

<template>
  <div class="blogpost">
    <!-- TODO: hacky workaround to fix 404 page if page has language in path, must find better solution -->
    <ContentDoc v-slot="{ doc }" :path="$route.path.replace(`/${locale}`, '')">
      <div class="flex flex-col gap-6 p-4">
        <div class="flex flex-row items-center gap-2 leading-none">
          <div class="font-semibold">
            <h1 class="text-4xl font-extrabold font-headline">
              {{ doc.title }}
            </h1>
            <p class="text-xl text-gray-200/80">
              Опубликовано {{ DateTime.fromFormat(doc.date, "dd.MM.yyyy").toFormat("DDD", { locale }) }}
            </p>
          </div>
          <div class="ml-auto">
            <div class="max-w-md flex flex-row flex-wrap gap-1">
              <template v-if="doc.tags">
                <UiBadge v-for="tag of doc.tags" :key="tag" :class="tags[tag].color" class="!text-sm">
                  <p class="text-gray-50/90">
                    {{ tag }}
                  </p>
                </UiBadge>
              </template>
            </div>
          </div>
        </div>
        <div class="max-w-[100%] flex flex gap-4 font-500 prose prose-gray prose-invert">
          <ContentRenderer :value="doc" />
        </div>
        <div class="blogpost__comments w-full">
          <Giscus
            repo="27rogi/website"
            repo-id="R_kgDOJRzv3Q"
            category="Comments"
            category-id="DIC_kwDOJRzv3c4CWgWu"
            mapping="title"
            strict="0"
            reactions-enabled="1"
            emit-metadata="0"
            input-position="top"
            theme="transparent_dark"
            :lang="locale"
            loading="lazy"
            crossorigin
          />
        </div>
      </div>
    </ContentDoc>
  </div>
</template>

<style lang="scss" scoped>
.blogpost {
  .prose :where(pre):not(:where(.not-prose,.not-prose *)) {
    @apply border-1 border-gray-200/20 bg-gray-800/10;
  }
}

.blogpost__comments {
  @apply max-h-[400px] mx-auto;
  giscus-widget {
    overflow-y: scroll;
    @apply flex overflow-auto scrollbar-rounded h-[400px];
    iframe {
      @apply flex min-h-auto;
    }
  }
}
</style>
