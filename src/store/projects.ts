import { defineStore } from 'pinia'
import type { Project } from '~~/types/project.type'

// @unocss-include
export const useProjectsStore = defineStore('projects', {
  state: () => [
    {
      title: 'large',
      projects: [
        {
          name: 'premid',
          icon: '/premid.png',
          text: '!text-[#7289da]',
          url: 'https://github.com/PreMiD/Website/graphs/contributors?from=2018-12-30&type=a',
          skills: ['ts', 'nuxt', 'tailwind', 'scss'],
          github: {
            organization: 'PreMiD',
            repository: 'PreMiD',
          },
        },
        {
          name: 'rumcredesign',
          icon: '/rumc.png',
          text: '!text-[#ffbc34]',
          url: 'https://ru-minecraft.ru/',
          skills: ['js', 'tailwind', 'scss'],
        },
        {
          name: 'f2d',
          icon: '/f2d.png',
          url: 'https://github.com/27rogi/Fabric2Discord',
          skills: ['kotlin', 'java'],
          github: {
            organization: '27rogi',
            repository: 'fabric2discord',
          },
        },
        {
          name: 'diaryproject',
          icon: '/diary.png',
          text: '!text-[#00b9ff]',
          url: 'https://github.com/27rogi/mgkeit-diary-server',
          skills: ['ts', 'nuxt', 'nest', 'mongodb', 'tailwind'],
        },
      ] as Project[],
    },
    {
      title: 'personal',
      projects: [
        {
          name: 'homabric',
          icon: '/homabric.png',
          url: 'https://github.com/27rogi/Homabric',
          skills: ['kotlin', 'java'],
          github: {
            organization: '27rogi',
            repository: 'homabric',
          },
        },
        {
          name: 'renameit',
          url: 'https://github.com/27rogi/RenameIt',
          skills: ['kotlin', 'java'],
        },
        {
          name: 'projectagora',
          icon: '/agora.png',
          url: 'https://github.com/27rogi/agora',
          skills: ['preact', 'js', 'tailwind', 'scss'],
          github: {
            organization: '27rogi',
            repository: 'agora',
          },
        },
        {
          name: 'vkdiary',
          url: 'https://github.com/27rogi/VKDiary',
          skills: ['ts'],
          github: {
            organization: '27rogi',
            repository: 'vkdiary',
          },
        },
      ] as Project[],
    },
    {
      title: 'experiments',
      projects: [
        {
          name: 'irisredesign',
          icon: '/iris.png',
          url: 'https://github.com/27rogistash/27rogistash.github.io',
          skills: ['ts', 'nuxt', 'tailwind', 'scss'],
        },
        {
          name: 'localized-soundcloud',
          url: 'https://github.com/27rogi/localized-soundcloud',
          skills: ['js'],
        },
        {
          name: 'vdiscorde',
          url: 'https://github.com/27rogi/VDiscorde',
          skills: ['ts'],
          github: {
            organization: '27rogi',
            repository: 'vdiscorde',
          },
        },
      ] as Project[],
    },
  ],
})
