<script lang="ts" setup>
import { version } from 'nuxt/package.json'

const localePath = useLocalePath()
const path = computed(() => useRoute().path)
const { locale } = useI18n()
const branch = useRuntimeConfig().public.branch
</script>

<template>
  <footer class="footer">
    <div class="footer__copyright">
      <p>
        rogi.su (<span><nuxt-link :to="`https://github.com/rogi27/website/commit/${branch}`">{{ branch }}</nuxt-link></span>)  <Icon name="tabler:copyright" />  {{ new Date().getFullYear() }}
      </p>
      <p>
        Crafted using
        <span><Icon name="simple-icons:nuxtdotjs" /> {{ version }}</span> and
        <span><Icon name="icon-park-twotone:tea-drink" /></span> by <span>Igor Ryzhenkov</span>
      </p>
    </div>
    <div class="footer__locale">
      <IconBlock
        v-if="locale !== 'en'"
        title="Switch to English"
        icon="flag:us-1x1"
        active-class="active-locale"
        class="footer__button"
        :to="localePath({ path }, 'en')"
        is-link
      />
      <IconBlock
        v-if="locale !== 'ru'"
        title="Переключить на Русский"
        icon="flag:ru-1x1"
        active-class="active-locale"
        class="footer__button"
        :to="localePath({ path }, 'ru')"
        is-link
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply flex flex-row text-xs p-4 gap-2 justify-center items-center sm:text-sm;
  .footer__button {
    @apply border rounded-md font-semibold bg-gray-800/50 border-gray-200/15 p-2 text-gray-50 hover:bg-gray-800/80;
  }

  .footer__copyright
  {
    @apply flex flex-col mr-auto;
    p {
      @apply font-medium leading-snug text-gray-600;
    }
    span {
      @apply font-bold text-villa-green-500/50;
    }
  }

  .footer__locale {
    .footer__button {
      @apply flex gap-2 items-center;
    }
  }
}
</style>
