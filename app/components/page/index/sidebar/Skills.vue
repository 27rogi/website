<script setup lang="ts">
import { useSkillStore } from "~/store/skills";
import type { Skill, SkillCategory } from "~~/types/skill";

const skills: Record<string, Skill> = await useSkillStore().$state;
const categories: Array<SkillCategory> = [
  {
    items: [skills.js!, skills.ts!, skills.java!, skills.scss!, skills.kotlin!, skills.go!],
    key: "languages",
  },
  {
    items: [skills.tailwind!, skills.nuxt!, skills.vue!, skills.fabric!],
    key: "frameworks",
  },
  {
    items: [skills.mongodb!, skills.mysql!, skills.prisma!],
    key: "databaseorms",
  },
  {
    items: [skills.vscode!, skills.figma!, skills.node!, skills.linux!, skills.bun!, skills.idea!, skills.caddy!, skills.docker!],
    key: "software",
  },
];
</script>

<template>
    <UiCard :header="$t(`page.index.cards.skills.title`)" line="right" border="x-0 lg:x-1 b-0" mt="-1px" rounded="0 lg:tr-md">
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
        <p>{{ $t(`page.index.cards.skills.categories.${key}`) }}</p>
        <div
          border="b greendark-200/30"
          flex="grow"
        />
      </div>
      <div
        flex="~ row wrap items-center"
        gap="2"
      >
      <VTooltip v-for="(skill, index) in items" :key="skill.name+index" :aria-id="skill.name+index" placement="bottom">
        <UiBadge
          :key="index"
          :title="skill.name"
          u-text="0.8em"
          :color="skill.color"
          :icon="skill.icon"
          icon-size="18px"
        />
        <template #popper>
          <p font="bold" u-text="sm">{{ skill.name }}</p>
        </template>
      </VTooltip>
      </div>
    </div>
    <p
      mt="0.5em"
      u-text="xs greendark-200/70"
    >
      {{ $t(`page.index.cards.skills.hint`) }}
    </p>
  </UiCard>
</template>