<script lang="ts" setup>
import Blobs from "~/assets/blobs.svg?component";

const router = useRouter();
const hasPath = computed(() => {
  if (!router) return false;
  return ["/","/en","/ru"].find((str) => router.currentRoute.value.path === str) === undefined;
});
</script>

<template>
  <div
    class="bg"
    :class="{
      'bg--compact': hasPath,
    }"
  >
    <Blobs class="bg__blobs z-1" />
  </div>
</template>

<style lang="scss">
.bg {
  @apply opacity-100 duration-800 transition-all ease-out absolute inset-0 z-1 max-h-screen overflow-hidden;
  .bg__blobs {
    @apply filter blur-[84px];
    .blobs__blob {
      @apply duration-800 transition-all ease-out transform-gpu transform-origin-center;
      &.blobs__blob1 {
        animation: colorful__blob 12s infinite cubic-bezier(0.65,-0.67,0.24,1.63);
      }
      &.blobs__blob2 {
        animation: colorful__blob 16s infinite cubic-bezier(0.65,-0.67,0.24,1.63) reverse;
      }
      &.blobs__blob3 {
        @apply opacity-60;
        animation: colorful__blob 26s infinite cubic-bezier(0.65,-0.67,0.24,1.63);
      }
    }
  }
  &--compact {
    @apply opacity-30;
    .bg__blobs .blobs__blob {
      &.blobs__blob1 {
        animation-play-state: paused;
        @apply -translate-y-40;
      }
      &.blobs__blob2 {
        animation-play-state: paused;
        @apply -translate-y-50;
      }
      &.blobs__blob3 {
        animation-play-state: paused;
        @apply translate-y-60;
      }
    }
  }
  @keyframes colorful__blob {
    0%   { @apply fill-emerald-500/10; transform: scale(1) translateY(0%); }
    25%   { @apply fill-brilliantsea-400/20; transform: scale(0.8) translateY(-9%); }
    50%   { @apply fill-greenspring-500/25; transform: scale(1.1) translateY(-6%); }
    65%   { @apply fill-teal-500/25; transform: scale(1.2) translateY(-4%); }
    80%   { @apply fill-brilliantsea-400/40; transform: scale(0.9) translateY(-6%); }
    100%   { @apply fill-emerald-500/10; transform: scale(1) translateY(0%); }
  }
}
</style>
