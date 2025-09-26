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
  {
    localePath: "navbar.link.reviews",
    path: "/reviews/test",
  },
]
</script>

<template>
  <div
    w="full"
    m="x-auto"
    max="w-screen-2xl"
    flex="~ items-center"
    p="y-4 x-4"
    leading="0"
  >
    <NuxtLinkLocale
      :to="{ path: '/' }"
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
        v-for="{ path, localePath } in links"
        :key="path"
      >
        <NuxtLinkLocale
          :to="{ path }"
          hover="text-greenspring-500"
          p="y-2 x-2 last:r-0"
          leading="1px"
          active-class="text-greenspring-500"
        >
          <span>[</span> {{ $t(localePath) }} <span>]</span>
        </NuxtLinkLocale>
      </template>
    </div>
  </div>
</template>
