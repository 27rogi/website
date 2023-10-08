<script lang="ts" setup>
import { NuxtLink } from '#components'

const props = defineProps({
  link: {
    type: Boolean,
    default: false,
  },
  nuxtLink: {
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

function getComponent() {
  if (props.nuxtLink) {
    return NuxtLink
  }
  if (props.link) {
    return 'a'
  }
  return 'div'
}
</script>

<template>
  <component
    :is="getComponent()"
    class="button"
  >
    <Icon
      v-if="$props.icon"
      class="button__icon"
      size="1rem"
      :name="$props.icon"
    />
    <p><slot /></p>
  </component>
</template>

<style lang="scss" scoped>
.button {
  @apply border rounded-md flex flex-row bg-gray-500/20 border-gray-50/15 flex-1 p-2 gap-2 col-span-1 inline-flex justify-center items-center;
  .button__icon {
    @apply rounded-sm top-0 relative;
  }
  p {
    @apply font-bold text-sm;
  }
}
</style>
