<script setup lang="ts">
definePageMeta({
  key: "index",
})
</script>

<template>
  <div
    flex="~ col"
    m="auto"
    w="full"
    max-w="screen-2xl"
    relative
  >
    <div
      grid="~ rows-1 cols-1 lg:(rows-2 cols-3)"
    >
      <div
        flex="~ col"
        row="span-2"
        col="span-2"
      >
        <UiCard line="left" border="b-0 r-0 l-0 lg:l-1" mt="-1px" rounded="0 lg:tl-md">
          <template #header>
            <i18n-t
              keypath="page.index.intro.header"
              tag="h2"
              scope="global"
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
          <p>
            {{ $t(`page.index.intro.about_me`) }}
            <NuxtLinkLocale
              :to="{ path: '/projects' }"
              class="text-greenspring-400"
            >
              {{ $t(`page.index.intro.to_projects`) }}
            </NuxtLinkLocale>.
          </p>
        </UiCard>
        <AppIndexEducation />
      </div>
      <div
        flex="~ col"
        row="span-2"
        col="span-1"
      >
        <AppIndexSidebar />
      </div>
    </div>
    <div class="hidden lg:block" absolute right="0" left="0" top="-100%" bottom="[calc(100%-0.375rem)]" border="dashed greendark-300/20 x" z="-1" />
    <div class="hidden lg:block" absolute right="0" left="0" top="100%" bottom="[calc(-100%+0.375rem)]" border="dashed greendark-300/20 x" z="-1" />
    <div class="hidden lg:block" absolute right="100%" left="[calc(-100%+0.375rem)]" top="0" bottom="0" border="dashed greendark-300/20 y" z="-1" />
    <div class="hidden lg:block" absolute right="[calc(-100%+0.375rem)]" left="100%" top="0" bottom="0" border="dashed greendark-300/20 y" z="-1" />
  </div>
</template>
