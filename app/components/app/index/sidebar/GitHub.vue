<script setup lang="ts">
import type { StatsData } from "~~/types/api"
import { formatDistance } from "date-fns"
import { enUS, ru } from "date-fns/locale"

const { locale, t } = useI18n()
const { data: ghData, error, status } = await useLazyFetch<StatsData>("/api/stats", { key: "ghData" })
</script>

<template>
  <UiCard
    header="GitHub"
    flex="~ col 1"
    class="[&_span]:(text-greenspring-500)"
    line="right" border="x-0 lg:x-1 b-0"
  >
    <UiLoadingBlock v-if="status === 'pending'" />
    <p v-else-if="error">{{ t("page.index.cards.github.error") }}</p>
    <i18n-t
      v-else
      m="y-auto"
      keypath="page.index.cards.github.text"
      tag="p"
      scope="global"
    >
      <template #github>
        <span><b>GitHub</b></span>
      </template>
      <template #time>
        <span>{{ formatDistance(new Date(ghData!.created_at), new Date(), { locale: locale === 'ru' ? ru : enUS }) }}</span>
      </template>
      <template #followers>
        <span>{{ t("page.index.cards.github.followers", { n: ghData?.followers }) }}</span>
      </template>
      <template #public_repos>
        <span>{{ t("page.index.cards.github.public_repos", { n: ghData?.public_repos }) }}</span>
      </template>
      <template #stars>
        <span>{{ t("page.index.cards.github.stars", { n: ghData?.total_stars }) }}</span>
      </template>
    </i18n-t>
  </UiCard>
</template>
