<script lang="ts" setup>
import type { ProjectBasic, ProjectLeading } from "~~/types/project"
import { useSkillStore } from "~/stores/skills"

const props = defineProps({
  project: {
    default: null,
    type: Object as PropType<ProjectLeading | ProjectBasic>,
  },
})
const { $api } = useNuxtApp()
const ghData = (props.project?.github)
  ? await useLazyAsyncData(`${props.project.github!.organization}/${props.project.github!.repository}`, async () => {
      const { data, error } = await $api.repo.get({
        query: {
          organization: props.project.github!.organization,
          repository: props.project.github!.repository,
        },
      })
      if (error?.value) {
        throw new Error(`Failed to fetch GitHub data for ${props.project?.github?.organization}/${props.project?.github?.repository}: ${error.value.message}`)
      }
      return data
    })
  : null

const skills = await useSkillStore().$state
</script>

<template>
  <div
    v-if="project"
    u-text="1.2em"
    font="600"
    flex="~ basis-[49%] grow-1 col"
    gap="2"
    card="greendark/30"
    rounded="md"
    overflow="hidden"
    relative
    :class="project?.leading ? project.palette : null"
  >
    <div
      v-if="project.skills"
      absolute
      p="2"
      top="1"
      right="1"
      z="6"
    >
      <div
        :class="project?.leading ? `${project.palette ?? 'card-greendark/30'} p-2` : 'backdrop-filter-none'"
        backdrop="filter blur-xl brightness-20"
        flex="~ row wrap items-center"
        gap="2"
      >
        <template v-if="project?.skills">
          <template
            v-for="skillId in project.skills"
            :key="skillId"
          >
            <tippy v-if="skills[skillId]" arrow :aria-id="skills[skillId].name">
              <UiBadge
                :title="skills[skillId].name"
                :color="skills[skillId].color"
                :icon="skills[skillId].icon"
              />
              <template #content>
                <p font="bold" u-text="sm">{{ skills[skillId].name }}</p>
              </template>
            </tippy>
          </template>
        </template>
        <template v-if="project.github && ghData && ghData.error.value === undefined">
          <div
            leading="1.25rem"
            u-text="base brilliantsea-50"
          >
            <UiLoadingBlock v-if="ghData.status.value !== 'success'" />
            <a
              v-else-if="ghData.status.value === 'success' && ghData.data.value"
              :href="`https://github.com/${project.github.organization}/${project.github.repository}`"
              gap="1.5"
              flex="~ items-center"
            >
              <UiBadge icon="ph:star-duotone" px="2">
                {{ ghData.data.value.stargazers_count ?? 0 }}
              </UiBadge>
              <UiBadge v-if="ghData.data.value!.forks > 0" icon="ph:git-fork-duotone" px="2">
                {{ ghData.data.value.forks ?? 0 }}
              </UiBadge>
            </a>
          </div>
        </template>
      </div>
    </div>
    <div
      v-if="project?.leading"
      overflow="hidden"
      h="240px"
      flex="~ col"
      z="2"
      style="mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 10%, transparent 90%);"
    >
      <img
        w="full"
        :title="project.image"
        rounded="md"
        :src="project.image"
      >
    </div>
    <div
      relative
      z="3"
      u-text="brilliantsea-50/50 4"
      p="4"
      :class="{ 'mt--6 pt-0': $props.project?.leading }"
      flex="~ col"
      gap="2"
    >
      <component
        :is="project.url ? 'a' : 'div'"
        :href="project.url ?? null"
        flex="~ row gap-2 items-center"
        mb="2"
      >
        <Icon
          v-if="!project.leading"
          size="1.5em"
          :name="project.icon"
        />
        <div
          max-w="60%"
          u-text="brilliantsea-50 2xl"
          font="head 700"
          :class="{ 'text-lg': !project.leading }"
        >
          <slot name="header" />
        </div>
      </component>
      <slot />
    </div>
  </div>
</template>
