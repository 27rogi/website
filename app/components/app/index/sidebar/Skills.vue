<script setup lang="ts">
import type { Skill, SkillCategory } from "~~/types/skill"
import { useSkillStore } from "~/stores/skills"

const { t } = useI18n()
const skills: Record<string, Skill> = await useSkillStore().$state
const categories: Array<SkillCategory> = [
  {
    items: [skills.js, skills.ts, skills.java, skills.kotlin, skills.go],
    key: "languages",
  },
  {
    items: [skills.nuxt, skills.vue, skills.astro, skills.fabric, skills.wails],
    key: "frameworks",
  },
  {
    items: [skills.unocss, skills.tailwind, skills.scss, skills.figma, skills.illustrator, skills.primevue],
    key: "uiux",
  },
  {
    items: [skills.mongodb, skills.mysql, skills.prisma],
    key: "databaseorms",
  },
  {
    items: [skills.vscode, skills.node, skills.linux, skills.bun, skills.idea, skills.caddy, skills.docker],
    key: "software",
  },
]
</script>

<template>
  <UiCard :header="t(`page.index.cards.skills.title`)?.toString()" line="right" border="x-0 lg:x-1 b-0" mt="-1px" rounded="0 lg:tr-md">
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
          <tippy v-if="skill" :key="skill.name + n" arrow :aria-id="skill.name + n">
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
    <p
      mt="0.5em"
      u-text="xs greendark-200/70"
    >
      {{ t(`page.index.cards.skills.hint`) }}
    </p>
  </UiCard>
</template>
