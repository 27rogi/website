<script setup lang="ts">
import { Skills } from "~/constants/skills"
import type { SkillCategory } from "~~/types/skill"

const { t } = useI18n()
const categories: Array<SkillCategory> = [
  {
    items: [Skills.js, Skills.ts, Skills.java, Skills.kotlin, Skills.go],
    key: "languages",
  },
  {
    items: [Skills.nuxt, Skills.vue, Skills.astro, Skills.fabric, Skills.wails],
    key: "frameworks",
  },
  {
    items: [Skills.unocss, Skills.tailwind, Skills.scss, Skills.figma, Skills.illustrator, Skills.primevue],
    key: "uiux",
  },
  {
    items: [Skills.mongodb, Skills.mysql, Skills.prisma],
    key: "databaseorms",
  },
  {
    items: [Skills.vscode, Skills.node, Skills.linux, Skills.bun, Skills.idea, Skills.caddy, Skills.docker],
    key: "software",
  },
]
</script>

<template>
  <UiCard :header="t(`page.index.cards.skills.title`)?.toString()" line="right" border="x-1 b-0" mt="-1px" rounded="0 lg:tr-md">
    <div class="grid grid-cols-2 lg:flex lg:flex-col" gap="2">
      <div
        v-for="({ key, items }, i) in categories"
        :key="i"
        flex="~ col"
        gap="2"
      >
        <div
          font="700"
          flex="~ items-center"
          relative
          gap="4"
        >
          <p>{{ t(`page.index.cards.skills.categories.${key}`) }}</p>
          <div
            border="b greendark-200/30"
            flex="grow"
          />
        </div>
        <div
          flex="~ row wrap items-center"
          gap="2"
        >
          <template v-for="(skill, n) in items" :key="n">
            <tippy v-if="skill" :key="skill.name + n" arrow>
              <UiBadge
                :key="i"
                :color="skill.color"
                :icon="skill.icon"
                icon-size="1.2rem"
                class="gap-0 relative"
              />
              <template #content>
                <p font="content bold" u-text="sm">{{ skill.name }}</p>
              </template>
            </tippy>
            <p v-else>Unknown skill in {{ key }} at index {{ n }}</p>
          </template>
        </div>
      </div>
    </div>
    <p
      mt="0.5em"
      u-text="xs testudo-gold-200"
    >
      {{ t(`page.index.cards.skills.hint`) }}
    </p>
  </UiCard>
</template>
