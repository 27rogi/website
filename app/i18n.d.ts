// fix for vue-i18n $t breaking when using Pinia stores: https://github.com/nuxt-modules/i18n/issues/3167
declare module "vue" {
  interface ComponentCustomProperties {
    $device: Device;
    $breakpoints: {
      isMobile: boolean;
      isTablet: boolean;
      isDesktop: boolean;
      isPortable: boolean;
      current: string;
    };
  }
}