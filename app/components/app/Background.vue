<script lang="ts" setup>
const router = useRouter()
const hasPath = computed(() => {
  if (!router)
    return false
  return ["/", "/en", "/ru"].find(str => router.currentRoute.value.path === str) === undefined
})
</script>

<template>
  <div
    inset="0" z="1" max-h="100vh" overflow="hidden" opacity="1" absolute transition-600 transition-all ease-in :class="{
      '[&_.blob]:(opacity-10! animate-paused!)': hasPath,
    }" bg="greendark-800" style="mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));"
  >
    <svg
      class="z-1 [&_.blob]:(fill-greendark-800/0 opacity-30 transition ease-in-out)" blur="[84px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1620 1620"
      fill="none"
    >
      <g fill-rule="evenodd" clip-rule="evenodd" filter="url(#a)">

        <path
          id="blob1"
          class="blob"
          d="M1311 457c75 74 32 204-8 302-40 95-103 199-205 209-95 10-147-99-212-168-42-43-71-89-89-147-28-92-116-213-40-272 78-61 165 86 263 100 101 14 218-96 291-24Z"
        />

        <path
          id="blob2"
          class="blob"
          d="M740 580c2 58-20 120-68 154-44 31-101-1-155 2-58 2-116 39-168 13-70-35-140-92-146-169-5-79 70-134 119-196 60-76 100-214 195-200 100 15 96 164 145 252 28 49 76 87 78 144Z"
        />
        <path
          id="blob3"
          class="blob"
          d="M784 379c100-10 154-170 254-155 86 13 105 135 144 214 39 81 125 171 83 251-47 89-201 42-273 111-61 60-16 188-86 236-68 46-168 24-241-13a305 305 0 0 1-139-180c-20-62 28-125 18-189-11-65-80-113-77-179 3-77 19-183 92-205 81-25 140 117 225 108Z"
        />
      </g>
      <defs>
        <filter id="a" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <!-- <feGaussianBlur stdDeviation="65" result="a"/> -->
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style>
#blob1 {
  animation: colorful__blob 22s infinite cubic-bezier(0.65, -0.67, 0.24, 1.63);
}

#blob2 {
  animation: colorful__blob 28s infinite cubic-bezier(0.65, -0.67, 0.24, 1.63) reverse;
}

#blob3 {
  animation: colorful__blob 36s infinite cubic-bezier(0.65, -0.67, 0.24, 1.63);
}

@keyframes colorful__blob {
  0% {
    --at-apply: fill-[rgba(16, 185, 129, 0.1)];
    transform: scale(1) translateY(0%);
  }
  25% {
    --at-apply: fill-brilliantsea-400/20;
    transform: scale(0.9) translateY(-9%);
  }
  50% {
    --at-apply: fill-greenspring-500/25;
    transform: scale(1.2) translateY(-6%);
  }
  65% {
    --at-apply: fill-[rgba(20, 184, 166, 0.25)];
    transform: scale(1) translateY(-4%);
  }
  80% {
    --at-apply: fill-brilliantsea-400/40;
    transform: scale(0.9) translateY(-6%);
  }
  100% {
    --at-apply: fill-[rgba(16, 185, 129, 0.1)];
    transform: scale(1) translateY(0%);
  }
}
</style>
