<script lang="ts" setup>
defineProps({
  header: {
    default: null,
    type: String,
  },
});
</script>

<template>
  <div
    u-text="1.2em"
    font="600"
    p="4"
    flex="~ col"
    gap="2"
    card="greendark/30"
    rounded="md"
  >
    <div
      flex="~ 1 col"
      gap="2"
    >
      <div
        v-if="$slots.header || $props.header"
        font="head 700"
        u-text="1.5em"
      >
        <h2 v-if="$props.header">
          {{ $props.header }}
        </h2>
        <slot name="header" />
      </div>
      <slot />
    </div>
  </div>
</template>
