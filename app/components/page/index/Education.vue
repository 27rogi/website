<script setup lang="ts">
import { useSkillStore } from "~/store/skills";
import type { ExperienceType } from "~/types/experience";

const skills = await useSkillStore().$state;
/* eslint-disable sort/object-properties */
const education = {
  mtuci: {
    icon: "mdi:university",
  },
  mgkeit: {
    icon: "mdi:college",
  },
};
const experiences: { [key: string]: ExperienceType } = {
  ctm: {
    icon: "mdi:university",
    skills: [skills.figma, skills.scss, skills.tailwind],
    type: "job",
    year: 2021,
    yearEnd: 2021,
  },
  premid: {
    icon: "mdi:college",
    skills: [skills.nuxt, skills.figma, skills.scss, skills.tailwind],
    type: "job",
    year: 2019,
    yearEnd: 2020,
  },
  ws_ix: {
    icon: "mdi:university",
    type: "competition",
    year: 2021,
  },
  ws_viii: {
    icon: "mdi:university",
    type: "competition",
    year: 2019,
  },
  htmlacademynode: {
    icon: "mdi:university",
    issuer: "htmlacademy",
    proof: "https://assets.htmlacademy.ru/certificates/intensive/463/2284645.pdf?1676649687",
    type: "certificate",
    year: 2023,
  },
};
/* eslint-enable sort/object-properties */
</script>

<template>
  <UiCard :header="$t(`page.index.cards.experience.title`)" line="left" border="b-0 r-0">
    <div
      grid="~ cols-2 items-stretch [&_div:last-child]:col-span-full"
      gap="2"
    >
      <UiCardDetailed
        v-for="(exp, key) in experiences"
        :key="key"
        col="span-2 sm:span-1"
        :icon="exp.icon"
      >
        <template #header>
          <h3>
            {{ $t(`page.index.cards.experience.items.${key}.title`) }}
            <template v-if="exp.type == 'job'">
              (<span>{{ exp.yearEnd ? `${exp.year}-${exp.yearEnd}` : exp.year }}</span>)
            </template>
            <template v-else-if="exp.year">
              (<span>{{ exp.year }}</span>)
            </template>
          </h3>
        </template>
        <p v-if="exp.type == 'certificate' && exp.issuer">{{ $t(`page.index.cards.experience.issuedBy`) }} <span>{{ exp.issuer }}</span></p>
        <p v-if="exp.type == 'job'">{{ $t(`page.index.cards.experience.items.${key}.role`) }}</p>
        <p v-if="exp.type == 'competition'">{{ $t(`page.index.cards.experience.in`) }} <span>{{ $t(`page.index.cards.experience.items.${key}.competition`) }}</span></p>
        <div
          v-if="exp.type == 'job' && exp.skills"
          m="t-2"
          flex="~ row wrap items-center"
          gap="2"
        >
        <template v-for="(skill, index) in exp.skills">
          <UiBadge
            v-if="skill"
            :key="index"
            :title="skill.name"
            u-text="0.8em"
            :color="skill.color"
            :icon="skill.icon"
            p="1"
            icon-size="10"
          />
        </template>
        </div>
      </UiCardDetailed>
    </div>
  </UiCard>
  <UiCard
    :header="$t(`page.index.cards.education.title`)"
    h="full"
    border="r-0" mb="-1px" rounded="0 bl-md"
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
        :header="$t(`page.index.cards.education.items.${key}.title`)"
      >
        <p>{{ $t(`page.index.cards.education.items.${key}.specialty`) }} (<span>{{ $t(`page.index.cards.education.items.${key}.status`) }}</span>)</p>
      </UiCardDetailed>
    </div>
  </UiCard>
</template>
