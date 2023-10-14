<script lang="ts" setup>
import Blobs from '~/assets/bg.svg?component'

const router = useRouter()

const hasPath = computed(() => {
  if (!router) {
    return false
  }
  return router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/en'
})
</script>

<template>
  <div
    class="bg z-1"
    :class="{
      'bg--compact': hasPath,
    }"
  >
    <Blobs class="z-1" />
  </div>
</template>

<style lang="scss" scoped>
.bg {
  @apply w-[160vw] lg:w-auto h-full transition-all top-0 right-0 left-0 duration-400 absolute overflow-hidden;

  &--compact {
    @apply blur-3xl sm:h-[50vw] -top-15;
  }
}
</style>
