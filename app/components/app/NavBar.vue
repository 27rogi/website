<script setup lang="ts">
import TwentySeven from "~/assets/27.svg?component"

const props = defineProps<{
  reviews?: boolean
}>()

const links = [
  {
    localePath: "navbar.link.projects",
    path: "/projects",
  },
]

const isHome = useRoute().path === "/en" || useRoute().path === "/ru"
</script>

<template>
  <div
    w="full"
    m="x-auto"
    flex="~ items-center"
    p="y-4 x-4"
    leading="0"
    :class="isHome ? 'xl:max-w-screen-xl 2xl:max-w-screen-2xl' : 'max-w-screen-2xl'"
  >
    <NuxtLinkLocale
      :to="{ path: '/' }"
      title="27rogi"
      rounded="md"
      border="~ greendark-200/30"
      bg="greendark-500/60"
      flex="~ row"
      gap="0.5"
      items-center
      :class="{ 'pr-10px': props.reviews === true }"
    >
      <TwentySeven
        u-text="white"
        w="10"
        h="10"
        p="0.5"
      />
      <span v-if="props.reviews">{{ $t('navbar.reviews') }}</span>
    </NuxtLinkLocale>
    <LazyUiLanguageToggle m="l-2" hydrate-on-visible />
    <div
      m="l-auto"
      font="head 600"
    >
      <template
        v-for="(linkKey, index) in links.keys()"
        :key="linkKey"
      >
        <span v-if="(index + 1) % 2 === 0" select="none" text="greenspring-500">/</span>
        <NuxtLinkLocale
          :to="{ path: links[linkKey]!.path }"
          :title="$t(links[linkKey]!.localePath)"
          hover="text-greenspring-500"
          p="y-2 x-2 last:r-0"
          leading="1px"
          active-class="text-greenspring-500"
        >
          {{ $t(links[linkKey]!.localePath) }}
        </NuxtLinkLocale>
      </template>
    </div>
  </div>
</template>
