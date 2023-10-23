<script lang="ts" setup>
import { DateTime } from 'luxon'
import { useSkillsStore } from '@/store/skills'
import type { GitHubData } from '~~/types/github-data.type'

const skills = useSkillsStore().$state
const nuxtApp = useNuxtApp()
const { data: ghdata, pending } = useFetch<GitHubData>('/api/github', {
  deep: false,
  lazy: true,
  getCachedData: key => nuxtApp.static.data[key] ?? nuxtApp.payload.data[key],
})
const { t, locale } = useI18n()

// workaround to remove 'ago' in luxon
const usageTime = computed(() => {
  if (!ghdata.value) {
    return null
  }
  const relativeDate = DateTime.fromJSDate(new Date(ghdata.value.created_at)).toRelative({ locale: locale.value })
  return relativeDate?.substring(0, relativeDate.lastIndexOf(' '))
})

definePageMeta({
  metadataKey: 'index',
})
</script>

<template>
  <div class="intro">
    <div class="intro__grid">
      <div class="intro__greeting">
        <h1>
          {{ t("page.index.intro.promo.1") }}.
          <span class="text-villa-green-500">{{ t("page.index.intro.promo.2") }}.</span>
          {{ t("page.index.intro.promo.3") }}.
        </h1>
        <div class="intro__slogan">
          <i18n-t keypath="page.index.intro.desc.main" tag="p">
            <template #projects>
              <span>{{ t("page.index.intro.desc.projects") }}</span>
            </template>
            <template #js>
              <span>JavaScript</span>
            </template>
            <template #java>
              <span>Java</span>
            </template>
            <template #simplify>
              <span>{{ t("page.index.intro.desc.simplify") }}</span>
            </template>
            <template #happy>
              <span>{{ t("page.index.intro.desc.happy") }}</span>
            </template>
            <template #more>
              <nuxt-link :to="{ path: '/resume' }">
                {{ t("page.index.intro.desc.more") }}
              </nuxt-link>
            </template>
          </i18n-t>
        </div>
      </div>
      <div class="intro__card">
        <h2>{{ t("page.index.cards.skillstack") }}</h2>
        <div class="skills">
          <div class="skills__section">
            <template
              v-for="(skill, i) of skills"
              :key="i"
            >
              <IconBlock
                v-if="!skill.hidden && skill.stack"
                class="!bg-opacity-20"
                :class="skill.color"
                :title="skill.name"
                :icon="skill.icon"
              />
            </template>
          </div>
        </div>
      </div>
      <nuxt-link
        v-if="ghdata"
        to="https://github.com/rogi27"
        class="intro__card"
      >
        <i18n-t
          keypath="page.index.cards.ghstats.title"
          tag="h2"
          scope="global"
        >
          <Icon
            name="simple-icons:github"
            size="24"
            class="relative top-[-2px] mx-1.5 !text-villa-green-500"
          />
          <span>{{ usageTime }}</span>
        </i18n-t>
        <i18n-t
          keypath="page.index.cards.ghstats.text"
          tag="p"
          class="ghstats__text"
          scope="global"
        >
          <span class="ghstats__text__bold">{{
            t("page.index.cards.ghstats.open", { n: ghdata.public_repos })
          }}</span>
          <span class="ghstats__text__bold">{{
            t("page.index.cards.ghstats.closed", { n: ghdata.owned_private_repos })
          }}</span>
          <span class="ghstats__text__bold">{{
            t("page.index.cards.ghstats.followers", { n: ghdata.followers })
          }}</span>
        </i18n-t>
      </nuxt-link>
      <div
        v-else-if="pending"
        class="intro__card"
      >
        <i18n-t
          keypath="page.index.cards.ghstats.loading"
          tag="h2"
          scope="global"
        >
          <Icon
            name="mdi:github"
            size="32"
            class="relative mx-1 !text-villa-green-500"
          />
        </i18n-t>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  @apply flex flex-col min-h-[80vh] py-2 px-4 justify-center md:py-8;

  .intro__grid {
    @apply grid gap-4 grid-cols-8 items-center;

    .intro__greeting {
      @apply flex flex-col gap-4 col-span-8 row-span-1 justify-center md:col-span-4 md:row-span-2 lg:gap-8 lg:col-span-5;

      h1 {
        @apply font-headline font-extrabold leading-tight tracking-tight w-xs text-3xl sm:text-4xl lg:w-md lg:text-5xl;
      }

      p {
        @apply font-bold leading-snug tracking-tight max-w-[42.5rem] relative md:text-lg lg:text-xl;
      }

      .intro__slogan {
        a, span {
          @apply text-villa-green-500;
        }
        a {
          @apply underline-villa-green-500 underline;
        }
      }
    }

    .intro__card {
      @apply border rounded-lg flex flex-col border-gray-400/20 bg-gray-800/30 p-4 gap-2 col-span-8 row-span-1 md:col-span-4 lg:col-span-3;

      h2 {
        @apply font-headline font-extrabold text-xl leading-relaxed tracking-tight text-villa-green-500 md:text-2xl;
      }

      p {
        @apply font-semibold text-base leading-snug md:text-xl;
      }

      .skills {
        @apply rounded-md flex flex-col gap-2;

        .skills__header {
          @apply text-base;
        }

        .skills__section {
          @apply flex-wrap flex gap-2 justify-center;
        }
      }

      .ghstats__text {
        @apply flex-row gap-1 items-center;

        span {
          @apply font-bold text-villa-green-500;
        }
      }
    }
  }

  .intro__icon {
    @apply h-6 p-2 top-1.1 w-6 relative;
  }
}
</style>
