<script setup lang="ts">
import { version } from "nuxt/package.json"

const { t } = useI18n()
const config = useRuntimeConfig()
const isHome = useRoute().path === "/en" || useRoute().path === "/ru"

const { $api } = useNuxtApp()
const { data, status } = await useAsyncData("bun", async () => {
  return (await $api.get()).data
})

const variantKey = useState("variantKey", () => {
  const variants = Object.keys(t("footer.builtwith.variants")!)
  return variants[Math.floor(Math.random() * variants.length)]
})
const variantIcons = {
  bugs: "ph:bug-beetle-duotone",
  magic: "ph:magic-wand-fill",
  quantum: "ph:atom-duotone",
  reactor: "ph:nuclear-plant-fill",
  scrap: "ph:crane-duotone",
} as Record<string, string>
</script>

<template>
  <div
    flex="~ items-end" class="[&_.colorful]:(text-greenspring-500 font-bold align-top)" m="x-auto"
    :class="isHome ? 'xl:max-w-screen-xl 2xl:max-w-screen-2xl' : 'max-w-screen-2xl'" p="y-4 x-8 2xl:x-4" u-text="testudo-gold-50/50 sm" leading="loose"
  >
    <div>
      <p font="head bold" leading="loose">
        <span u-text="inherit">rogi#su [<a
          :href="`https://github.com/27rogi/website/commit/${config.public.branch}`" font="content" target="_blank"
        ><span class="colorful">{{ config.public.branch }}</span>
        </a>]
          <Icon name="ph:copyright-bold" relative top="0.1rem" size="1em" /> {{ new Date().getFullYear() }}
        </span>
      </p>
      <i18n-t u-text="xs" keypath="footer.builtwith.base" tag="p" scope="global">
        <template #variant>
          <!-- somehow using v-if on slots for i18n breaks them, so we are making another layer -->
          <template v-if="variantKey">
            <span class="colorful">
              <Icon :name="variantIcons[variantKey]!" relative top="0.1rem" size="1.2em" /> {{ t(`footer.builtwith.variants.${variantKey!}`) }}
            </span>
          </template>
        </template>
        <template #versions>
          <span class="colorful">
            <Icon name="devicon:nuxt" relative top="0.1rem" size="1.2em" /> Nuxt {{ version }}</span>
          <span u-text="testudo-gold-50/50"> + </span>
          <span class="colorful"><Icon name="devicon:bun" relative top="0.1rem" size="1.2em" /> Bun {{ status === 'success' ? data?.runtime.bun ?? 'is not present! ⚠️' : '' }}
          </span>
        </template>
      </i18n-t>
    </div>
    <div m="l-auto">
      <a class="colorful" target="_blank" href="https://status.rogi.party">
        {{ t("footer.status") }}
      </a>
    </div>
  </div>
</template>
