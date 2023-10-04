<script lang="ts" setup>
import { useProjectsStore } from '@/store/projects'

const { t } = useI18n()
const projects = useProjectsStore().$state

definePageMeta({
  metadataKey: 'projects',
})
</script>

<template>
  <div class="projects">
    <template
      v-for="(section, index) of projects"
      :key="index"
    >
      <div class="projects__section">
        <div class="projects__header">
          <h2>{{ t(`page.projects.header.${section.title}`) }}</h2>
        </div>
        <div class="projects__grid">
          <ProjectCard
            v-for="(project, i) of section.projects"
            :key="project.name + i"
            :project="project"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  @apply flex flex-col mx-auto px-4 gap-6 md:py-8;
  .projects__section {
    @apply flex flex-col gap-6;
    .projects__header {
      h2 {
        @apply font-headline font-extrabold leading-tight tracking-tight text-2xl sm:text-4xl;
        span {
          @apply text-villa-green-500;
        }
      }
    }
    .projects__grid {
      @apply grid gap-2 grid-cols-1 lg:grid-cols-2;
    }
  }
}
</style>
