import { defineStore } from 'pinia'
import type Tag from '~/types/tag.type'

// @unocss-include
export const useTagsStore = defineStore('tags', {
  state: () => ({
    web: {
      color: 'bg-teal-400/20',
    },
    devlog: {
      color: 'bg-purple-400/20',
    },
  }) as Tag,
})
