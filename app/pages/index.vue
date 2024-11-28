<script setup lang="ts">
definePageMeta({
  key: "index",
});
</script>

<template>
  <div
    border="y greendark-200/10"
  >
    <div
      flex="~ col"
      m="auto"
      w="full"
      max-w="screen-2xl"
    >
      <div
        grid="~ rows-1 cols-1 lg:(rows-2 cols-3)"
      >
        <div
          flex="~ col"
          row="span-2"
          col="span-2"
        >
          <UiCard line="left" border="b-0 r-0" mt="-1px" rounded="0 tl-md">
            <template #header>
              <i18n-t
                keypath="page.index.intro.header"
                tag="h2"
                scope="global"
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
          row="span-2"
          col="span-1"
        >
          <PageIndexSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
