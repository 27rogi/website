<script lang="ts" setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} ~ 27rogi` : "27rogi/website"
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  --at-apply: bg-greendark-900;
}

.fadePage-enter-active,
.fadePage-leave-active {
  --at-apply: transition-all ease-out duration-400;
}
.fadePage-enter-from,
.fadePage-leave-to {
  --at-apply: opacity-0 translate-y-400;
}

.fadeLayout-enter-active,
.fadeLayout-leave-active {
  --at-apply: transition-all ease-out duration-400;
}
.fadeLayout-enter-from,
.fadeLayout-leave-to {
  --at-apply: opacity-0 blur-xl;
}

.tippy-box {
  --at-apply: bg-greendark-500 border-1 border-greenspring-300/30 shadow-2xl;
}
</style>
