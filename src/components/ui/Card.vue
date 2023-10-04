<script setup lang="ts">
defineProps({
  horizontal: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
})
</script>

<template>
  <div
    :class="{ 'flex-col': !horizontal, 'flex-row': horizontal }"
    class="flex flex gap-4 border border-gray-200/10 rounded-md bg-gray-800/20 p-4"
  >
    <slot v-if="$slots.icon" name="icon" />
    <div v-else-if="$props.icon" class="icon">
      <Icon :name="$props.icon" />
    </div>
    <div v-if="$slots.image" class="flex flex-col border border-gray-200/10 rounded-md">
      <slot name="image" />
    </div>
    <div class="flex flex-col gap-2 font-500 leading-none">
      <div v-if="$slots.header" class="text-xl font-extrabold leading-relaxed tracking-tight font-headline md:text-2xl">
        <slot name="header" />
      </div>
      <slot />
    </div>
  </div>
</template>
