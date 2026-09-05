<script setup lang="ts">
const { t } = useI18n()
const socials = {
  github: {
    color: "bg-[#2d2d2d]/30",
    icon: "simple-icons:github",
    link: "https://github.com/27rogi",
  },
  protonmail: {
    color: "bg-[#c511df]/30",
    icon: "simple-icons:protonmail",
    link: "mailto:27rogi@pm.me",
  },
  soundcloud: {
    color: "bg-[#fd6300]/30",
    icon: "simple-icons:soundcloud",
    link: "https://soundcloud.com/27rogi",
  },
  telegram: {
    color: "bg-[#0098ff]/30",
    icon: "simple-icons:telegram",
    link: "https://t.me/rogi27",
  },
}
</script>

<template>
  <UiCard
    :header="t('page.index.cards.socials.title')?.toString()"
    flex="~ col full"
    mb="-1px"
    rounded="0 b-md lg:0 lg:br-md"
    border="x-1"
  >
    <div
      justify="center"
      grid="~ cols-2"
      h="full"
      gap="2"
    >
      <UiBadge
        v-for="(data, name) in socials"
        :key="name"
        :link="data.link"
        :color="data.color"
        :icon="data.icon"
        h="4rem lg:full"
        w="full"
      />
    </div>
  </UiCard>
</template>
