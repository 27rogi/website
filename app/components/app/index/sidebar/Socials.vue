<script setup lang="ts">
const { $api } = useNuxtApp()
const { t } = useI18n()
const { data: webringData, error, status } = await useLazyAsyncData("webring", async () => {
  const { data, error } = await $api.webring.get()

  if (error)
    throw new Error("Failed to fetch webring data")
  return data
})

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
    <div u-text="sm">
      <LazyUiLoadingBlock v-if="status === 'pending'" />
      <p v-else-if="error">{{ t("page.index.cards.socials.webring.error") }}</p>
      <div
        v-else
        flex="~ col sm:row sm:items-stretch sm:justify-between"
        gap="2"
      >
        <template v-for="(data, i) in [webringData?.prev, webringData?.curr, webringData?.next].filter(Boolean)" :key="i">
          <UiBadge
            v-if="data"
            :link="i !== 1 ? data.url : 'https://webring.otomir23.me'"
            :title="i !== 1 ? `Open ${data.name} website` : `Open webring`"
            p="x-2 y-2"
            flex="~"
            color="bg-greendark-400/30"
            h="auto"
            :class="{ 'flex-grow-1': i !== 1 }"
          >
            <template v-if="data.favicon" #icon>
              <img
                v-if="i !== 1"
                :src="`https://webring.otomir23.me/media/${data.favicon}`"
                :alt="`Favicon for ${data.name}`"
                w="1.3em"
                h="1.3em"
                rounded="sm"
              >
            </template>
            <span u-text="xs">{{ i === 0 ? `./Anatoliy Ch.` : i === 2 ? `./Daniel Myslivets` : "webring" }}</span>
          </UiBadge>
        </template>
      </div>
    </div>
  </UiCard>
</template>
