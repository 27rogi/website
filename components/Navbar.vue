<script lang="ts" setup>
import Logo from '~/assets/logo.svg?component'

const localePath = useLocalePath()
const { t } = useI18n()

const links = [
  {
    path: '/projects',
    icon: 'tabler:code',
  },
  {
    path: '/blog',
    icon: 'tabler:writing',
  },
  {
    path: '/resume',
    icon: 'tabler:news',
  },
]
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo-wrapper">
      <nuxt-link
        active-class="logo-active"
        class="navbar__item"
        :to="localePath('/')"
      >
        <Logo class="navbar__logo" />
      </nuxt-link>
    </div>
    <div class="navbar__items">
      <nuxt-link
        v-for="(link, index) of links"
        :key="index"
        :to="localePath(link.path)"
        class="navbar__item"
      >
        <Icon
          v-if="link.icon"
          class="text-size-[24px]"
          :name="link.icon"
        />
        {{ t(`nav.items.${link.path}`) }}
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @apply flex flex-row font-headline mx-auto py-4 px-4 items-center;

  .navbar__logo-wrapper {
    @apply border rounded-md flex flex-row font-semibold bg-gray-800/20 border-villa-green-200/10 p-1 transition-all sm:p-2;
    a {
      @apply leading-0;
    }
    .navbar__logo {
      @apply h-6 fill-gray-100 duration-200 sm:h-8 hover:fill-villa-green-500;
    }
  }

  .navbar__items {
    @apply flex flex-row font-bold ml-auto gap-0 sm:gap-2;

    .navbar__item {
      @apply border rounded-md flex flex-row border-opacity-0 border-villa-green-200 text-xs py-2 px-2 transition-all text-gray-100 gap-0.5 duration-100 select-none items-center sm:text-base sm:py-2 sm:px-3 sm:gap-1 hover:bg-gray-800/20 hover:border-opacity-10 hover:text-villa-green-500 active:border-opacity-10;
      transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

      &.router-link-active {
        @apply bg-gray-800/20 border-opacity-20 text-gray-100;
      }

      .icon {
        @apply h-5 sm:h-auto;
      }
    }
  }
}
</style>
