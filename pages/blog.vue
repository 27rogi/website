<script lang="ts" setup>
definePageMeta({
  metadataKey: 'blog',
})
</script>

<template>
  <div class="blog">
    <h1>Блог в процессе разработки!</h1>
  </div>
</template>

<style lang="scss">
.blog {
  @apply flex flex-col font-semibold p-4;
  h1 {
    @apply font-headline font-bold text-4xl;
  }
}
</style>
