<script setup lang="ts">
import { version } from "nuxt/package.json"

const { public: { branch, bunver } } = useRuntimeConfig()
const isHome = useRoute().path === "/en" || useRoute().path === "/ru"
</script>

<template>
  <div
    flex="~ items-center" class="[&_.colorful]:(text-greenspring-500 font-bold align-top)" m="x-auto"
    :class="isHome ? 'xl:max-w-screen-xl 2xl:max-w-screen-2xl' : 'max-w-screen-2xl'" p="y-4 x-4" u-text="brilliantsea-50/50 sm" leading="loose"
  >
    <div>
      <p leading="loose">
        <span u-text="inherit" font="head">rogi#su (<a
          :href="`https://github.com/27rogi/website/commit/${branch}`" target="_blank"
        ><span class="colorful">{{ branch }}</span>
        </a>)
          <Icon name="ph:copyright-bold" relative top="1px" size="1em" /> {{ new Date().getFullYear() }}
        </span>
      </p>
      <i18n-t u-text="xs" keypath="footer.builtwith" tag="p" scope="global">
        <template #nuxt>
          <span class="colorful">Nuxt {{ version }} / {{ bunver !== "" ? `Bun ${bunver}` : "(not using Bun?)" }}</span>
        </template>
        <template #magic>
          <span class="colorful">
            <Icon name="ph:magic-wand-fill" size="1.2em" />
          </span>
        </template>
      </i18n-t>
    </div>
    <div m="l-auto">
      <a class="colorful" target="_blank" href="https://status.rogi.su">
        {{ $t("footer.status") }}
      </a>
    </div>
  </div>
</template>
