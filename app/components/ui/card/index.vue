<script lang="ts" setup>
defineProps({
  header: {
    default: null,
    type: String,
  },
  line: {
    default: null,
    type: [String, null] as PropType<"right" | "left" | null>,
  },
})
</script>

<template>
  <div u-text="1.2em" font="600" p="4" flex="~ col" gap="2" card="greendark/30" rounded="none" relative>
    <div
      v-if="$props.line"
      :class="{ 'left-[100%] right-[-100vw]': line === 'right', 'right-[100%] left-[-100vw]': line === 'left' }" absolute
      top="0" bottom="-1px" border="0 lg:b dashed greendark-300/20"
    />
    <div flex="~ 1 col" h="full" gap="2">
      <div v-if="$slots.header || $props.header" font="head 800" u-text="1.5em">
        <h2 v-if="$props.header" leading="normal">
          {{ $props.header }}
        </h2>
        <slot name="header" />
      </div>
      <div contents u-text="1rem">
        <slot />
      </div>
    </div>
  </div>
</template>
