<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocale = useSwitchLocalePath()
</script>

<template>
  <div flex="~ row" items-center>
    <NuxtLink 
      v-for="{ code } in locales"
      :to="switchLocale(code)"
      :key="code"
      title="Switch to {{ code }}"
      font="head 800"
      u-text="white hover:greenspring-500 xs"
      leading="0"
      p="y-5 x-2"
      border="~ greendark-200/30 first:r-none"
      rounded="last:r-md first:l-md"
      bg="greendark-500/60"
      :class="{ 'bg-greendark-400/25! text-greenspring-500!': locale === code }"
    >
      {{ code }}
  </NuxtLink>
  </div>
</template>
