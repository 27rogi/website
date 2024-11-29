<script setup lang="ts">
import { version } from "nuxt/package.json";

const { public: { branch } } = useRuntimeConfig();
</script>

<template>
  <div
    flex="~ items-center"
    class="[&_.colorful]:(align-top text-greenspring-500 font-bold)"
    m="x-auto"
    max="w-screen-2xl"
    p="y-4 x-6"
    u-text="brilliantsea-50/50"
  >
    <div>
      <p>
        <span
          u-text="inherit"
          font="head"
        >rogi#su (<NuxtLink :to="`https://github.com/27rogi/website/commit/${branch}`"><span class="colorful">{{ branch }}</span></NuxtLink>) <Icon
          name="ph:copyright-duotone"
          size="1em"
        /> {{ new Date().getFullYear() }}</span>
      </p>
      <i18n-t
        class="text-sm"
        keypath="footer.builtwith"
        tag="p"
        scope="global"
      >
      <template #nuxt>
        <span class="colorful">Nuxt {{ version }}</span>
      </template>
      <template #magic>
        <span class="colorful"><Icon
          name="ph:magic-wand-fill"
          size="1.2em"
        /></span>
      </template>
      </i18n-t>
    </div>
    <div m="l-auto">
      <NuxtLink
        class="colorful"
        to="https://status.rogi.su"
      >
        {{ $t("footer.status") }}
      </NuxtLink>
    </div>
  </div>
</template>
