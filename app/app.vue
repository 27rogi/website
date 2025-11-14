<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

// see: https://i18n.nuxtjs.org/docs/guide/lang-switcher#wait-for-page-transition
async function onBeforeEnter () {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'fadePage',
      mode: 'out-in',
      onBeforeEnter
    }" />
  </NuxtLayout>
</template>

<style>
body {
  --at-apply: bg-greendark-900;
}

.fadePage-enter-active,
.fadePage-leave-active {
  transition: all 0.4s;
}
.fadePage-enter-from,
.fadePage-leave-to {
  opacity: 0;
}

.fadeLayout-enter-active,
.fadeLayout-leave-active {
  transition: all 0.4s;
}
.fadeLayout-enter-from,
.fadeLayout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
