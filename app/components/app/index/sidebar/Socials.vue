<script setup lang="ts">
const socials = {
  github: {
    color: "bg-[#2d2d2d]/30",
    link: "https://github.com/27rogi",
  },
  protonmail: {
    color: "bg-[#c511df]/30",
    link: "mailto:27rogi@pm.me",
  },
  soundcloud: {
    color: "bg-[#fd6300]/30",
    link: "https://soundcloud.com/27rogi",
  },
  telegram: {
    color: "bg-[#0098ff]/30",
    link: "https://t.me/rogi27",
  },
};
</script>

<template>
  <UiCard
    :header="$t('page.index.cards.socials.title')"
    flex="~ col"
    mb="-1px"
    rounded="0 lg:br-md"
    border="x-0 lg:x-1"
  >
    <div
      class="[&_div]:(p-1.5)"
      flex="~ row"
      gap="2"
    >
      <UiBadge
        v-for="(data, name) in socials"
        :key="name"
        :link="data.link"
        flex="1"
        :color="data.color"
        :icon="`simple-icons:${name}`"
      />
    </div>
  </UiCard>
</template>