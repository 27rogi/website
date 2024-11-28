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
    rounded="none"
    relative
    :class="line ? (line == 'right' ? '[&_.line]:(left-[100%] right-[-100vw])' : '[&_.line]:(right-[100%] left-[-100vw])'): null"
  >
    <div 
      v-if="$props.line"
      class="line"
      absolute
      top="0"
      right="0"
      bottom="-1px"
      border="b greendark-200/10"
    />
    <div
      flex="~ 1 col"
      gap="2"
    >
      <div
        v-if="$slots.header || $props.header"
        font="head 800"
        u-text="1.5em"
      >
        <h2 v-if="$props.header">
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
