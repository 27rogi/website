<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: {
    default: null,
    type: Object as () => NuxtError,
  },
})
</script>

<template>
  <div
    bg="greendark-900"
    font="content"
  >
    <NuxtLayout>
      <div
        z="2"
        relative
        u-text="testudo-gold-50"
        min-h="screen"
      >
        <div
          p="6"
          max-w="screen-2xl"
          m="x-auto"
          flex="~ col"
          leading="loose"
        >
          <h1
            flex="~ items-center gap-6"
            font="bold"
            u-text="4xl"
            m="b-4"
          >
            <span
              p="2"
              rounded="lg"
              border="1 testudo-gold-50/40"
            ><Icon
              name="ph:shooting-star-duotone"
              size="1.5em"
            /></span>
            {{ props.error?.statusCode === 404 ? "How did you get here?" : "A wild error appears!" }}
          </h1>
          <div v-if="props.error?.statusCode !== 404">
            <h3
              font="bold"
              u-text="2xl"
              m="b-4"
            >
              You found error №{{ props.error?.statusCode }}
            </h3>
            <p>Stack trace is printed below, create an GitHub issue including it:</p>
            <div u-text="greenspring-500">
              <p v-if="!props.error.stack">
                {{ props.error }}
              </p>
              <!-- eslint-disable vue/no-v-html -->
              <div
                v-else
                v-html="props.error.stack"
              />
            </div>
          </div>
          <p v-else>
            You are trying to access page that was removed or moved, maybe you have error in your URL path.
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
