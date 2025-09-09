<script lang="ts" setup>
import { NuxtLink } from "#components";

defineProps({
  header: {
    default: null,
    type: String,
  },
  icon: {
    default: null,
    type: String,
  },
  link: {
    default: null,
    type: String,
  }
});
</script>

<template>
  <component
    :is="link ? NuxtLink : 'div'"
    :to="link ?? null"
    u-text="1.2em"
    font="600"
    p="4"
    flex="~ row items-center"
    gap="4"
    card="greenspring/20"
    rounded="md"
  >
    <slot
      v-if="$slots.icon"
      flex="shrink-0"
      name="icon"
    />
    <Icon
      v-else-if="$props.icon"
      flex="shrink-0"
      :name="$props.icon"
      rounded="md"
      size="1.4em"
    />
    <div
      class="[&_span]:(text-greenspring-500)"
      flex="~ col"
    >
      <div
        v-if="$props.header || $slots.header"
        u-text="base"
        font="head 800"
      >
        <h3 v-if="$props.header">
          {{ $props.header }}
        </h3>
        <slot
          v-else
          name="header"
        />
      </div>
      <div u-text="sm greendark-200/70">
        <slot />
      </div>
    </div>
  </component>
</template>
