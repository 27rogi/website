<script lang="ts" setup>
const { locale, locales } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>

<template>
  <a
    v-for="{ code } in availableLocales"
    :key="code"
    font="head 600"
    p="4"
    u-text="white hover:greenspring-500"
    leading="1px"
    :href="`/${code}`"
  >
    {{ code }}
  </a>
</template>
