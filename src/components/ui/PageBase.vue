<template>
  <div class="mx-auto flex flex-col gap-6 px-4 md:py-4">
    <div v-if="$slots.title" class="text-2xl font-extrabold leading-tight tracking-tight font-headline sm:text-4xl">
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
