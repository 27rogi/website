<script lang="ts" setup>
const { getLocale, getLocales, switchLocale } = useI18n()
const locales = getLocales()
const locale = computed(() => getLocale())
</script>

<template>
  <div flex="~ row" items-center>
    <button
      v-for="{ code } in locales"
      :key="code"
      font="800"
      u-text="testudo-gold-50 hover:white xs"
      leading="0"
      p="y-5 x-2"
      border="~ greenspring-200/30 first:r-none hover:greenspring-300/80 hover:r-solid!"
      rounded="last:r-md first:l-md"
      bg="greendark-500/60"
      :class="{ 'bg-greenspring-900! pointer-events-none text-greenspring-500!': locale === code }"
      @click="switchLocale(code)"
    >
      {{ code.toLocaleUpperCase() }}
    </button>
  </div>
</template>
