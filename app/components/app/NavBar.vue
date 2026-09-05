<script setup lang="ts">
const props = defineProps<{
  reviews?: boolean
}>()

const { t } = useI18n()

const links = [
  {
    localePath: "navbar.link.projects",
    path: "/projects",
  },
]
</script>

<template>
  <div
    w="full"
    m="x-auto"
    flex="~ items-center"
    p="y-4 x-8 2xl:x-4"
    leading="0"
    class="max-w-screen-2xl"
  >
    <nuxt-link
      to="/"
      title="27rogi"
      rounded="md"
      border="~ greendark-200/30"
      bg="greendark-500/60"
      flex="~ row"
      gap="0.5"
      items-center
      :class="{ 'pr-10px': props.reviews === true }"
    >
      <Icon name="custom:27" u-text="white"
            w="10"
            h="10"
            p="0.5" size="1"
      />
      <span v-if="props.reviews">{{ t('navbar.reviews') }}</span>
    </nuxt-link>
    <UiLanguageToggle m="l-2" />
    <div
      m="l-auto"
      font="600"
    >
      <template
        v-for="(linkKey, index) in links.keys()"
        :key="linkKey"
      >
        <span v-if="(index + 1) % 2 === 0" select="none" text="greenspring-500">/</span>
        <nuxt-link
          :to="links[linkKey]!.path"
          :title="t(links[linkKey]!.localePath)?.toString()"
          hover="text-greenspring-500"
          p="y-2 x-2 last:r-0"
          leading="1px"
          active-class="text-greenspring-500"
        >
          ./{{ t(links[linkKey]!.localePath) }}
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
