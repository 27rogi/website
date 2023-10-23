<script lang="ts" setup>
import { NuxtLink } from '#components'

defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <component
    :is="isLink ? NuxtLink : 'div'"
    :class="{
      '!gap-0': $props.title == null,
    }"
    class="iconblock"
  >
    <Icon
      v-if="$props.icon"
      class="iconblock__icon"
      size="1rem"
      :name="$props.icon"
    />
    <p>
      {{ title }}
    </p>
  </component>
</template>

<style lang="scss" scoped>
.iconblock {
  @apply border rounded-md flex flex-row bg-gray-500/20 border-gray-50/15 flex-1 p-2 gap-2 col-span-1 inline-flex justify-center items-center;
  .iconblock__icon {
    @apply rounded-sm top-0 relative;
  }
  p {
    @apply font-bold text-sm;
  }
}
</style>
