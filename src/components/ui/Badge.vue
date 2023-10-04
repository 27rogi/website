<script setup lang="ts">
defineProps({
  iconSize: {
    type: String,
    default: '1rem',
  },
  bg: {
    type: String,
    default: 'bg-gray-300/20',
  },
  border: {
    type: String,
    default: 'border border-gray-50/20',
  },
})
</script>

<template>
  <div :class="[bg, border]" class="flex flex-row items-center gap-1 rounded-md px-2 py-1 text-xs font-bold leading-none font-sans">
    <div v-if="$slots.icon" :style="`weight: ${iconSize}; height: ${iconSize};`">
      <slot name="icon" />
    </div>
    <slot />
  </div>
</template>
