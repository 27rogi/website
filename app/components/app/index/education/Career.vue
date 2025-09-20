<script setup lang="ts">
import type { ExperienceType } from "~~/types/experience"
import { useSkillStore } from "~/store/skills"

const skills = await useSkillStore().$state
/* eslint-disable sort/object-properties */
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
}
/* eslint-enable sort/object-properties */
</script>

<template>
  <UiCard :header="$t(`page.index.cards.experience.title`)" line="left" border="x-0 b-0 lg:(l-1)">
    <div
      grid="~ cols-2 items-stretch [&_:last-child]:col-span-full"
      gap="2"
    >
      <UiCardDetailed
        v-for="(exp, key) in experiences"
        :key="key"
        col="span-2 sm:span-1"
        :icon="exp.icon"
        :link="exp.proof"
      >
        <template #header>
          <h3>
            {{ $t(`page.index.cards.experience.items.${key}.title`) }}
            <template v-if="exp.type === 'job'">
              (<span>{{ exp.yearEnd ? `${exp.year}-${exp.yearEnd}` : exp.year }}</span>)
            </template>
            <template v-else-if="exp.year">
              (<span>{{ exp.year }}</span>)
            </template>
          </h3>
        </template>
        <p v-if="exp.type === 'certificate' && exp.issuer">{{ $t(`page.index.cards.experience.issuedBy`) }} <span>{{ exp.issuer }}</span></p>
        <p v-if="exp.type === 'job'">{{ $t(`page.index.cards.experience.items.${key}.role`) }}</p>
        <p v-if="exp.type === 'competition'">{{ $t(`page.index.cards.experience.in`) }} <span>{{ $t(`page.index.cards.experience.items.${key}.competition`) }}</span></p>
        <div
          v-if="exp.type === 'job' && exp.skills"
          m="t-2"
          flex="~ row wrap items-center"
          gap="2"
        >
          <template v-for="(skill, index) in exp.skills">
            <VTooltip v-if="skill" :key="skill.name + index" :aria-id="skill.name + index" placement="bottom">
              <UiBadge
                v-if="skill"
                :key="index"
                :title="skill.name"
                u-text="0.8em"
                :color="skill.color"
                :icon="skill.icon"
                p="1"
                icon-size="1.2rem"
              />
              <template #popper>
                <p font="bold" u-text="sm">{{ skill.name }}</p>
              </template>
            </VTooltip>
          </template>
        </div>
      </UiCardDetailed>
    </div>
  </UiCard>
</template>
