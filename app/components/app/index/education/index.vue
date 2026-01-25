<script setup lang="ts">
const { t } = useI18n()
/* eslint-disable sort/object-properties */
const education = {
  mtuci: {
    icon: "mdi:university",
  },
  mgkeit: {
    icon: "mdi:college",
  },
}
/* eslint-enable sort/object-properties */
</script>

<template>
  <AppIndexEducationCareer />
  <UiCard
    :header="t(`page.index.cards.education.title`)"
    h="full"
    border="x-0 b-0 lg:(b-1 l-1)" mb="-1px" rounded="0 bl-md"
  >
    <div
      grid="~ cols-1 lg:cols-2 items-stretch"
      gap="2"
    >
      <UiCardDetailed
        v-for="(item, key) in education"
        :key="key"
        col="span-1"
        :icon="item.icon"
        :header="t(`page.index.cards.education.items.${key}.title`)"
      >
        <p>{{ t(`page.index.cards.education.items.${key}.specialty`) }} (<span>{{ t(`page.index.cards.education.items.${key}.status`) }}</span>)</p>
      </UiCardDetailed>
    </div>
  </UiCard>
</template>
