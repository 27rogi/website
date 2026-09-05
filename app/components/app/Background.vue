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
    inset="0" z="1" h="100vh" overflow="hidden" opacity="1" absolute
  >
    <video autoplay loop muted playsinline class="h-full w-full left-0 top-0 absolute z-0 object-cover brightness-30">
      <source src="/tortoise.webm" type="video/webm">
      <source src="/tortoise.mp4" type="video/mp4">
    </video>
    <div class="from-testudo-gold-800/30 to-greendark-800 to-90% bg-gradient-to-b" absolute inset="0" z="1" />
  </div>
</template>

<style>
#blob1 {
  animation: colorful__blob 22s infinite cubic-bezier(0.65, -0.67, 0.24, 1.63);
}

#blob2 {
  animation: colorful__blob 28s infinite cubic-bezier(0.65, -0.67, 0.24, 1.63) reverse;
}

#blob3 {
  animation: colorful__blob 36s infinite cubic-bezier(0.65, -0.67, 0.24, 1.63);
}

@keyframes colorful__blob {
  0% {
    --at-apply: fill-[rgba(16, 185, 129, 0.1)];
    transform: scale(1) translateY(0%);
  }
  10% {
    --at-apply: fill-testudo-gold-400/20;
    transform: scale(0.9) translateY(-9%);
  }
  50% {
    --at-apply: fill-greenspring-500/25;
    transform: scale(1.2) translateY(-6%);
  }
  65% {
    --at-apply: fill-[rgba(20, 184, 166, 0.25)];
    transform: scale(1) translateY(-4%);
  }
  80% {
    --at-apply: fill-testudo-gold-400/40;
    transform: scale(0.9) translateY(-6%);
  }
  100% {
    --at-apply: fill-[rgba(16, 185, 129, 0.1)];
    transform: scale(1) translateY(0%);
  }
}
</style>
