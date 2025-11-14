<script lang="ts" setup>
import { NuxtLinkLocale } from "#components"

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
  },
  nuxtLink: {
    default: null,
    type: String,
  },
})
</script>

<template>
  <component
    :is="nuxtLink ? NuxtLinkLocale : link ? 'a' : 'div'"
    :to="nuxtLink ?? null"
    :href="link ?? null"
    :title="nuxtLink ?? link ?? null"
    u-text="1.2em"
    font="600"
    p="4"
    flex="~ row items-start"
    gap="4"
    card="greenspring/20"
    rounded="md"
  >
    <slot
      v-if="$slots.icon"
      flex="shrink-0"
      name="icon"
    />
    <LazyIcon
      v-else-if="$props.icon"
      flex="shrink-0"
      :name="$props.icon"
      rounded="md"
      size="28px"
      hydrate-on-visible
      mt="4px"
    />
    <div
      class="[&_span]:(text-greenspring-500)"
      flex="~ col"
      gap="0.5"
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
