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
          url: 'https://github.com/rogi27/Fabric2Discord',
          skills: ['kotlin', 'java'],
          github: {
            organization: 'rogi27',
            repository: 'fabric2discord',
          },
        },
        {
          name: 'diaryproject',
          icon: '/diary.png',
          text: '!text-[#00b9ff]',
          url: 'https://github.com/rogi27/mgkeit-diary-server',
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
          url: 'https://github.com/rogi27/Homabric',
          skills: ['kotlin', 'java'],
          github: {
            organization: 'rogi27',
            repository: 'homabric',
          },
        },
        {
          name: 'renameit',
          url: 'https://github.com/rogi27/RenameIt',
          skills: ['kotlin', 'java'],
        },
        {
          name: 'projectagora',
          icon: '/agora.png',
          url: 'https://github.com/rogi27/agora',
          skills: ['preact', 'js', 'tailwind', 'scss'],
          github: {
            organization: 'rogi27',
            repository: 'agora',
          },
        },
        {
          name: 'vkdiary',
          url: 'https://github.com/rogi27/VKDiary',
          skills: ['ts'],
          github: {
            organization: 'rogi27',
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
          url: 'https://github.com/rogi27stash/rogi27stash.github.io',
          skills: ['ts', 'nuxt', 'tailwind', 'scss'],
        },
        {
          name: 'localized-soundcloud',
          url: 'https://github.com/rogi27/localized-soundcloud',
          skills: ['js'],
        },
        {
          name: 'vdiscorde',
          url: 'https://github.com/rogi27/VDiscorde',
          skills: ['ts'],
          github: {
            organization: 'rogi27',
            repository: 'vdiscorde',
          },
        },
      ] as Project[],
    },
  ],
})
