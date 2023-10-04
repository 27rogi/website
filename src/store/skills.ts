import { defineStore } from 'pinia'
import type Skill from '~~/types/skill.type'

// @unocss-include
export const useSkillsStore = defineStore('skills', {
  state: () => ({
    js: {
      icon: 'logos:javascript',
      color: '!bg-[#F0DB4F]',
      name: 'JavaScript',
    },
    ts: {
      icon: 'logos:typescript-icon',
      color: '!bg-[#3178c6]',
      name: 'TypeScript',
    },
    java: {
      icon: 'logos:java',
      color: '!bg-[#5382a1]',
      name: 'Java',
    },
    kotlin: {
      icon: 'logos:kotlin-icon',
      color: '!bg-[#B125EA]',
      name: 'Kotlin',
    },
    nuxt: {
      icon: 'logos:nuxt-icon',
      color: '!bg-[#00DC82]',
      name: 'Nuxt',
    },
    nest: {
      icon: 'logos:nestjs',
      color: '!bg-[#ed2945]',
      name: 'Nest',
    },
    vue: {
      icon: 'logos:vue',
      color: '!bg-[#41B883]',
      name: 'Vue',
    },
    preact: {
      icon: 'logos:preact',
      color: '!bg-[#724FB4]',
      name: 'Preact',
    },
    scss: {
      icon: 'logos:sass',
      color: '!bg-[#975073]',
      name: 'SCSS',
    },
    tailwind: {
      icon: 'logos:tailwindcss-icon',
      color: '!bg-cyan-500',
      name: 'Tailwind',
    },
    mongodb: {
      icon: 'logos:mongodb-icon',
      color: '!bg-[#589636]',
      name: 'MongoDB',
    },
    mysql: {
      icon: 'logos:mysql-icon',
      color: '!bg-[#00758f]',
      name: 'MySQL',
    },
    figma: {
      icon: 'logos:figma',
      color: '!bg-purple-500',
      name: 'Figma',
      hidden: true,
    },
    vscode: {
      icon: 'logos:visual-studio-code',
      color: '!bg-blue-500',
      name: 'VS Code',
      hidden: true,
    },
  } as Skill),
})
