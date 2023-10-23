<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
const nuxtApp = useNuxtApp()
const { data, pending, error } = useFetch('/api/repo', {
  deep: false,
  lazy: true,
  getCachedData: key => nuxtApp.static.data[key] ?? nuxtApp.payload.data[key],
  key: props.project.name,
  method: 'POST',
  retry: 1,
  body: {
    organization: props.project.github.organization,
    repository: props.project.github.repository,
  },
})
</script>

<template>
  <div
    v-if="data && !pending && error?.message == null"
    class="project__github"
  >
    <p v-if="data.stargazers_count! > 0">
      <Icon name="tabler:star" /> {{ data.stargazers_count }}
    </p>
    <p v-if="data.forks! > 0">
      <Icon name="tabler:git-fork" /> {{ data.forks }}
    </p>
  </div>
</template>
