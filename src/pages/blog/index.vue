<script setup lang="ts">
import { DateTime } from 'luxon'
import { useTagsStore } from '~/store/tags'

const { locale } = useI18n()
const localePath = useLocalePath()
const tags = useTagsStore()

function getPosts() {
  return useAsyncData('posts', () => queryContent().find().then(posts => posts.sort((a, b) => {
    const diff = DateTime.fromFormat(b.date, 'dd.MM.yyyy').diff(DateTime.fromFormat(a.date, 'dd.MM.yyyy'))
    if (diff.milliseconds === 0) {
      return 0
    }
    return diff.milliseconds > -1 ? 1 : -1
  })))
}
const posts = await getPosts()
</script>

<template>
  <UiPageBase>
    <template #title>
      <h2>Личный блог <span class="ml-2 border-1 border-gray-100/20 rounded-md bg-gray-300/10 px-2 py-1 align-middle text-sm">beta</span></h2>
    </template>
    <div class="flex flex-row flex-wrap items-center gap-4">
      <template v-if="posts.pending.value">
        <h1>Waiting for posts to load!</h1>
      </template>
      <template v-else-if="posts.error.value">
        <h1>Something broke when posts were loading!</h1>
      </template>
      <template v-else-if="posts.data.value != null">
        <nuxt-link
          v-for="(post, index) of posts.data.value"
          :key="post._id"
          class="w-[calc(50%-0.5rem)]"
          :class="{ 'w-full': (index > 2) && (index + 1 === posts.data.value.length) && (2 % index === 0) }"
          :to="post._path"
        >
          <UiCard horizontal class="flex-row-reverse items-start transition-all ease hover:bg-gray-800/50" :class="{ 'opacity-30': locale !== post.locale }">
            <template v-if="post.icon" #icon>
              <div :style="post.color ? `background-color: ${post.color};` : undefined" class="ml-auto w-auto flex flex-col border border-gray-100/20 rounded-md p-2">
                <Icon :name="post.icon" size="3rem" />
              </div>
            </template>
            <template #header>
              <div class="mb-2 flex flex-row gap-1">
                <div class="flex flex-row flex-wrap gap-1">
                  <template v-if="post.tags">
                    <UiBadge>
                      <Icon :name="`flag:${post.locale === 'en' ? 'us' : post.locale}-1x1`" />
                    </UiBadge>
                    <UiBadge v-for="tag of post.tags" :key="post._id + tag" :class="tags[tag].color">
                      <p class="text-gray-50/90">
                        {{ tag }}
                      </p>
                    </UiBadge>
                  </template>
                </div>
              </div>
              <h3 class="line-clamp-1 leading-none md:text-xl">
                {{ post.title }}
              </h3>
            </template>
            <div class="leading-none">
              <p class="line-clamp-3 text-gray-200/80">
                {{ post.description }}
              </p>
            </div>
          </UiCard>
        </nuxt-link>
      </template>
      <h1 v-else>
        No posts found!
      </h1>
    </div>
  </UiPageBase>
</template>
