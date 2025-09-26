<template>
  <div grid="~ cols-2" p="4" card="greenspring/20">
    <h3 col-span="2">
      Плюсы и минусы
    </h3>
    <div v-if="$slots.pros" class="mt-4 -mb-4 -ml-4" col-span="1" card="green/30" border="r-0" rounded="r-0">
      <ul text="green-50">
        <slot name="pros" mdc-unwrap="ul" />
      </ul>
    </div>
    <div v-if="$slots.cons" class="mt-4 -mb-4 -mr-4" col-span="1" card="red/30" border="l-0" rounded="l-0">
      <ul text="red-50">
        <slot name="cons" mdc-unwrap="ul" />
      </ul>
    </div>
  </div>
</template>
