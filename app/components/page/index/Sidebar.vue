<script setup lang="ts">
import { formatDistance } from "date-fns";
import { enUS, ru } from "date-fns/locale";
import { useSkillStore } from "~/store/skills";
import type { StatsData } from "~/types/api";
import type { Skill, SkillCategory } from "~/types/skill";

const { locale } = useI18n();
const { data: ghData, error, pending } = await useLazyFetch<StatsData>("/api/stats", { key: "ghData" });
const skills: Record<string, Skill> = await useSkillStore().$state;
const categories: Array<SkillCategory> = [
  {
    items: [skills.js!, skills.ts!, skills.java!, skills.scss!, skills.kotlin!],
    key: "languages",
  },
  {
    items: [skills.tailwind!, skills.nuxt!, skills.vue!, skills.fabric!, skills.nest!],
    key: "frameworks",
  },
  {
    items: [skills.mongodb!, skills.mysql!, skills.prisma!],
    key: "databaseorms",
  },
  {
    items: [skills.vscode!, skills.figma!, skills.node!, skills.idea!, skills.linux!, skills.bun!, skills.caddy!, skills.docker!],
    key: "software",
  },
];
const socials = {
  github: {
    color: "bg-[#2d2d2d]/30",
    link: "https://github.com/27rogi",
  },
  protonmail: {
    color: "bg-[#c511df]/30",
    link: "mailto:27rogi@pm.me",
  },
  soundcloud: {
    color: "bg-[#fd6300]/30",
    link: "https://soundcloud.com/27rogi",
  },
  telegram: {
    color: "bg-[#0098ff]/30",
    link: "https://t.me/rogi27",
  },
};
</script>

<template>
  <UiCard :header="$t(`page.index.cards.skills.title`)" line="right" border="b-0" mt="-1px" rounded="0 tr-md">
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
  <UiCard
    header="GitHub"
    flex="~ col 1"
    class="[&_span]:(text-greenspring-500)"
    line="right" border="b-0"
  >
    <UiLoadingBlock v-if="pending" />
    <p v-else-if="error">{{ $t("page.index.cards.github.error") }}</p>
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
        <span>{{ $t("page.index.cards.github.followers", { n: ghData?.followers }) }}</span>
      </template>
      <template #public_repos>
        <span>{{ $t("page.index.cards.github.public_repos", { n: ghData?.public_repos }) }}</span>
      </template>
      <template #stars>
        <span>{{ $t("page.index.cards.github.stars", { n: ghData?.total_stars }) }}</span>
      </template>
    </i18n-t>
  </UiCard>
  <UiCard
    :header="$t('page.index.cards.socials.title')"
    flex="~ col"
    mb="-1px"
    rounded="0 br-md"
  >
    <div
      class="[&_div]:(p-1.5)"
      flex="~ row"
      gap="2"
    >
      <UiBadge
        v-for="(data, name) in socials"
        :key="name"
        :link="data.link"
        flex="1"
        :color="data.color"
        :icon="`simple-icons:${name}`"
      />
    </div>
  </UiCard>
</template>
