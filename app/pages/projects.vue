<script setup lang="ts">
import { useProjectStore } from "~/stores/projects"

const { t } = useI18n()
const categories = await useProjectStore().$state

definePageMeta({
  key: "projects",
})
</script>

<template>
  <div
    p="x-4"
    w="full"
    flex="~ col"
    gap="4"
    m="x-auto"
    max-w="screen-2xl"
  >
    <div
      v-for="(projects, category) in categories"
      :key="category"
    >
      <div
        flex="~ wrap"
        gap="4"
      >
        <AppProjectsCard
          v-for="(project, key) in projects"
          :key="key"
          :project="project"
          outline="~ 0 hover:4 greendark-200/30"
          transition="all delay-50 ease-in-out"
        >
          <template #header>
            <h2>{{ t(`page.projects.items.${key}.title`) }}</h2>
          </template>
          <p>
            {{ t(`page.projects.items.${key}.description`) }}
            <a
              v-if="project.image && !project.leading"
              target="_blank"
              :href="project.image"
              u-text="greenspring-500"
              font="bold"
            >
              {{ t(`page.projects.checkit`) }}
            </a>
          </p>
        </AppProjectsCard>
      </div>
    </div>
  </div>
</template>
