<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

function handleError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <div v-if="props.error" class="error">
      <template v-if="props.error.statusCode === 404">
        <div class="error__title">
          <Icon name="tabler:alert-triangle-filled" />
          <p>Такой страницы нет!</p>
        </div>
        <div class="error__content">
          <div>
            <p>Попробуйте проверить правильность введенного адреса или параметров.</p>
            <p>Если вы думаете что это ошибка, пожалуйста, напишите мне <Icon name="fluent-emoji:crying-face" /></p>
          </div>
          <div class="error__actions">
            <button
              class="error__action"
              @click="handleError"
            >
              Вернутся на главную
            </button>
          </div>
        </div>
      </template>
      <template v-else>
        <div>{{ props.error }}</div>
      </template>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
  @apply flex flex-col font-semibold text-lg p-4 pt-[8vh] gap-2;
  .error__title {
    @apply flex flex-row font-headline font-bold text-4xl gap-2 items-center;
  }
  .error__content {
    @apply flex flex-col gap-4;
    .error__actions {
      @apply flex flex-row gap-2 items-center;
      .error__action {
        @apply border rounded-md font-semibold bg-gray-800/50 border-gray-200/15 flex-1 p-2 text-gray-50 justify-center inline-flex hover:bg-gray-800/80;
      }
    }
  }
}
</style>
