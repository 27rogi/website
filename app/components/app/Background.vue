<script lang="ts" setup>
// const router = useRouter()
// const hasPath = computed(() => {
//   if (!router)
//     return false
//   return !["", "/", "/en", "/ru"].includes(router.currentRoute.value.path)
// })
</script>

<template>
  <div
    inset="0" z="1" h="150vh sm:100vh" overflow="hidden" opacity="1" absolute
  >
    <video autoplay loop muted playsinline class="h-full w-full left-0 top-0 absolute z-0 object-cover brightness-30">
      <source src="/tortoise.webm" type="video/webm">
      <source src="/tortoise.mp4" type="video/mp4">
    </video>
    <div class="from-testudo-gold-800/30 to-greendark-800 to-90% bg-gradient-to-b" absolute inset="0" z="1" />
  </div>
</template>
