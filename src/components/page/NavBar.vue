<script setup lang="ts">
import TwentySeven from "~/assets/27.svg?component";

const links = [
  {
    localePath: "navbar.projects",
    path: "/projects",
  },
  // {
  //   path: "/minecraft",
  //   text: "Minecraft",
  // },
];
</script>

<template>
  <div
    w="full"
    m="x-auto"
    max="w-screen-2xl"
    flex="~ items-center"
    p="y-4 x-6"
    leading="0"
  >
    <NuxtLinkLocale
      :to="{ path: '/' }"
      rounded="md"
      border="~ greendark-200/30"
      bg="greendark-500/60"
    >
      <TwentySeven
        u-text="white"
        w="12"
        h="12"
        p="1"
      />
    </NuxtLinkLocale>
    <UiLanguageToggle />
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
          u-text="hover:greenspring-500"
          p="4"
          leading="1px"
        >
          {{ $t(localePath) }}
        </NuxtLinkLocale>
      </template>
    </div>
  </div>
</template>
