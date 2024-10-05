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
    <Blobs class="bg__blobs z-1 blur-[84px] filter" />
  </div>
</template>

<style lang="scss">
.bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  max-height: 100vh;
  overflow: hidden;
  opacity: 1;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 800ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  .bg__blobs {
    .blobs__blob {
      transform-origin: center;
      transform: translate3d(
          var(--un-translate-x),
          var(--un-translate-y),
          var(--un-translate-z)
        )
        rotate(var(--un-rotate)) rotateX(var(--un-rotate-x))
        rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z))
        skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
        scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
        scaleZ(var(--un-scale-z));
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      transition-duration: 800ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      &.blobs__blob1 {
        animation: colorful__blob 12s infinite
          cubic-bezier(0.65, -0.67, 0.24, 1.63);
      }
      &.blobs__blob2 {
        animation: colorful__blob 16s infinite
          cubic-bezier(0.65, -0.67, 0.24, 1.63) reverse;
      }
      &.blobs__blob3 {
        opacity: 0.6;
        animation: colorful__blob 26s infinite
          cubic-bezier(0.65, -0.67, 0.24, 1.63);
      }
    }
  }
  &--compact {
    opacity: 0.3;
    .bg__blobs .blobs__blob {
      &.blobs__blob1 {
        animation-play-state: paused;
        --un-translate-y: -10rem;
        transform: translateX(var(--un-translate-x))
          translateY(var(--un-translate-y)) translateZ(var(--un-translate-z))
          rotate(var(--un-rotate)) rotateX(var(--un-rotate-x))
          rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z))
          skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
          scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
          scaleZ(var(--un-scale-z));
      }
      &.blobs__blob2 {
        animation-play-state: paused;
        --un-translate-y: -12.5rem;
        transform: translateX(var(--un-translate-x))
          translateY(var(--un-translate-y)) translateZ(var(--un-translate-z))
          rotate(var(--un-rotate)) rotateX(var(--un-rotate-x))
          rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z))
          skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
          scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
          scaleZ(var(--un-scale-z));
      }
      &.blobs__blob3 {
        animation-play-state: paused;
        --un-translate-y: 15rem;
        transform: translateX(var(--un-translate-x))
          translateY(var(--un-translate-y)) translateZ(var(--un-translate-z))
          rotate(var(--un-rotate)) rotateX(var(--un-rotate-x))
          rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z))
          skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
          scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
          scaleZ(var(--un-scale-z));
      }
    }
  }
  @keyframes colorful__blob {
    0% {
      fill: rgb(16 185 129 / 0.1);
      transform: scale(1) translateY(0%);
    }
    25% {
      @apply fill-brilliantsea-400/20;
      transform: scale(0.8) translateY(-9%);
    }
    50% {
      @apply fill-greenspring-500/25;
      transform: scale(1.1) translateY(-6%);
    }
    65% {
      fill: rgb(20 184 166 / 0.25);
      transform: scale(1.2) translateY(-4%);
    }
    80% {
      @apply fill-brilliantsea-400/40;
      transform: scale(0.9) translateY(-6%);
    }
    100% {
      fill: rgb(16 185 129 / 0.1);
      transform: scale(1) translateY(0%);
    }
  }
}
</style>
