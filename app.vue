<script setup lang="ts">
const router = useRouter()
const { finalizePendingLocaleChange } = useI18n()
const pageOrder = ['index', 'projects', 'blog', 'resume']
const transitionName = ref('ease')
async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

router.beforeResolve((to, from) => {
  if (from.name && to.name) {
    const toRouteIndex = pageOrder.indexOf(to.name.toString().split('___')[0])
    const fromRouteIndex = pageOrder.indexOf(from.name.toString().split('___')[0])

    if (toRouteIndex === -1 || fromRouteIndex === -1) {
      transitionName.value = 'ease'
      return
    }

    if (toRouteIndex === fromRouteIndex) {
      transitionName.value = 'ease'
      return
    }

    if (toRouteIndex > fromRouteIndex) {
      transitionName.value = 'slide-up'
    } else {
      transitionName.value = 'slide-down'
    }
  }
})
</script>

<template>
  <NuxtLayout>
    <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
    </Html>
    <Body>
      <NuxtPage :transition="{ name: transitionName, mode: 'out-in', onBeforeEnter }" />
    </Body>
  </NuxtLayout>
</template>

<style lang="scss">
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition-all duration-400;
  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}
.slide-up-enter-from,
.slide-down-leave-to {
  @apply opacity-0 transform-gpu origin-top translate-y-30 overflow-hidden;
}
.slide-up-leave-to,
.slide-down-enter-from {
  @apply opacity-0 transform-gpu origin-top -translate-y-30 overflow-hidden;
}

.ease-enter-active,
.ease-leave-active {
  @apply transition-all duration-300;
  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}

.ease-enter-from,
.ease-leave-to {
  @apply opacity-0 transform-gpu origin-top filter overflow-hidden;
}
</style>
