<script lang="ts" setup>
defineProps({
  color: {
    default: null,
    type: String,
  },
  icon: {
    default: "ph:spinner-bold",
    type: String,
  },
});
</script>

<template>
  <div
    flex="~ 1"
    gap="2"
    p="2"
    rounded="md"
    font="head"
    :class="color"
  >
    <div class="m-auto">
      <Icon
        animate="spin"
        :name="$props.icon!"
        rounded="md"
        size="1.4em"
      />
      <p
        v-if="$slots.default"
        leading="1px"
      >
        <slot />
      </p>
    </div>
  </div>
</template>
