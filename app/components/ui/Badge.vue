<script lang="ts" setup>
import { NuxtLink } from "#components";

defineProps({
  color: {
    default: null,
    type: String,
  },
  icon: {
    default: null,
    type: String,
  },
  iconSize: {
    default: "1.4em",
    type: String,
  },
  link: {
    default: null,
    type: String,
  },
});
</script>

<template>
  <component
    :is="link ? NuxtLink : 'div'"
    :to="link ?? null"
    h="9"
    :w="$slots.default ? 'inherit' : '9'"
    rounded="md"
    border="~ slate-300/30"
    u-text="sm"
    font="head"
    :class="color"
  >
    <div
      w="full"
      gap="2"
      flex="inline items-center shrink-1 justify-center"
      h="full"
    >
      <slot
        v-if="$slots.icon"
        name="icon"
      />
      <LazyIcon
        v-else-if="$props.icon"
        :name="$props.icon"
        rounded="md"
        :size="$props.iconSize"
        hydrate-on-visible
      />
      <p
        v-if="$slots.default"
        leading="1px"
      >
        <slot />
      </p>
    </div>
  </component>
</template>
