<script setup lang="ts">
const { t } = useI18n()
definePageMeta({
  key: "index",
})
</script>

<template>
  <div
    flex="~ col full"
    m="x-auto"
    w="full"
    max-w="screen-2xl"
    p="x-4 2xl:x-0"
    relative
  >
    <div
      flex="~ col 1 lg:row"
      backdrop="filter blur-2xl brightness-80"
      h="full"
    >
      <div
        flex="~ col [2]"
      >
        <UiCard line="left" border="b-0 x-1 lg:r-0" flex="full" mt="-1px" rounded="0 t-md lg:0 lg:tl-md">
          <template #header>
            <i18n-t
              keypath="page.index.intro.header"
              tag="h2"
              leading="normal"
            >
              <template #username>
                <span
                  inline-block
                  font="900"
                  u-text="greenspring-400"
                >27rogi</span>
              </template>
            </i18n-t>
          </template>
          <div flex="~ full col" h="full" justify="center">
            <i18n-t
              keypath="page.index.intro.about_me"
              tag="p"
            />
            <nuxt-link
              m="t-6 x-auto"
              title="/projects"
              to="/projects"
              class="text-greenspring-400"
            >
              [ {{ t(`page.index.intro.to_projects`) }} ]
            </nuxt-link>
          </div>
        </UiCard>
        <AppIndexEducation />
      </div>
      <div
        flex="~ col [1]"
      >
        <AppIndexSidebar />
      </div>
    </div>
    <div class="block" absolute right="16px 2xl:0" left="16px 2xl:0" top="-100%" bottom="[calc(100%-0.375rem)]" border="dashed greendark-300/20 x" z="-1" />
    <div class="block" absolute right="16px 2xl:0" left="16px 2xl:0" top="100%" bottom="[calc(-100%+0.375rem)]" border="dashed greendark-300/20 x" z="-1" />
    <div class="block" absolute right="100%" left="[calc(-100%+0.375rem)]" top="0" bottom="0" border="dashed greendark-300/20 y" z="-1" />
    <div class="block" absolute right="[calc(-100%+0.375rem)]" left="100%" top="0" bottom="0" border="dashed greendark-300/20 y" z="-1" />
  </div>
</template>
