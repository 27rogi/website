<script setup lang="ts">
definePageMeta({
  key: "index",
});
</script>

<template>
  <div
    p="x-6"
    flex="~ col"
    gap="4"
    m="auto"
    w="full"
    max-w="screen-2xl"
  >
    <div
      grid="~ rows-1 cols-1 lg:(rows-2 cols-3)"
      gap="y-4 lg:x-4"
    >
      <div
        flex="~ col"
        gap="4"
        row="span-2"
        col="span-2"
      >
        <UiCard>
          <template #header>
            <i18n-t
              keypath="page.index.intro.header"
              tag="h2"
            >
              <template #username>
                <span
                  inline-block
                  font="900"
                  u-text="transparent"
                  from="greenspring-400"
                  to="brilliantsea-700"
                  bg="clip-text gradient-to-rb"
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
        <PageIndexEducation />
      </div>
      <div
        flex="~ col"
        gap="4"
        row="span-2"
        col="span-1"
      >
        <PageIndexSidebar />
      </div>
    </div>
  </div>
</template>
