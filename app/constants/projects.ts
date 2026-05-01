import type { ProjectBasic, ProjectLeading } from "~~/types/project"

// Disable sorted keys because projects
// shouldn't be sorted.
/* eslint-disable sort/object-properties */
// @unocss-include
export const Projects = {
  "f2d": {
    github: {
      organization: "27rogi",
      repository: "fabric2discord",
    },
    image: "/f2d.png",
    leading: true,
    palette: "card-lime/30",
    skills: ["fabric", "kotlin", "java"],
    url: "https://github.com/27rogi/fabric2discord",
  },
  "homabric": {
    github: {
      organization: "27rogi",
      repository: "homabric",
    },
    image: "/homabric.png",
    leading: true,
    palette: "card-sky/30",
    skills: ["fabric", "kotlin"],
    url: "https://github.com/27rogi/homabric",
  },
  "premid": {
    github: {
      organization: "premid",
      repository: "website-old",
    },
    image: "/premid.png",
    leading: true,
    organization: "premid",
    palette: "card-purple/30",
    repository: "premid",
    skills: ["ts", "nuxt", "tailwind", "scss"],
    url: "https://github.com/PreMiD/Website-old/commits?author=27rogi",
  },
  "rumc": {
    image: "/rumc.png",
    leading: true,
    palette: "card-orange/40",
    skills: ["ts", "js", "tailwind", "scss", "bun"],
    url: "https://ru-minecraft.com/",
  },
  "dorion": {
    github: {
      organization: "SpikeHD",
      repository: "Dorion",
    },
    icon: "ph:discord-logo-duotone",
    leading: false,
    skills: ["figma"],
    url: "https://github.com/SpikeHD/Dorion/issues/233",
  },
  "zen": {
    github: {
      organization: "zen-browser",
      repository: "www",
    },
    icon: "ph:dots-three-circle-duotone",
    leading: false,
    skills: ["ts", "tailwind"],
    url: "https://github.com/zen-browser/www/pulls?q=author%3A27rogi+",
  },
  "agora": {
    github: {
      organization: "27rogi",
      repository: "agora",
    },
    icon: "ph:palette-duotone",
    image: "/agora.png",
    leading: false,
    skills: ["preact", "js", "tailwind", "scss"],
    url: "https://github.com/27rogi/agora",
  },
  "rogisu": {
    github: {
      organization: "27rogi",
      repository: "website",
    },
    icon: "ph:book-open-duotone",
    leading: false,
    skills: ["ts", "nuxt", "unocss", "bun"],
    url: "https://github.com/27rogi/website",
  },
  "iris": {
    icon: "ph:cube-duotone",
    image: "/iris.jpg",
    leading: false,
    skills: ["ts", "nuxt", "tailwind", "scss"],
    url: "https://rogi27stash.github.io",
  },
  "renameit": {
    github: {
      organization: "27rogi",
      repository: "renameit",
    },
    icon: "ph:cube-duotone",
    leading: false,
    skills: ["fabric", "java"],
    url: "https://github.com/27rogi/RenameIt",
  },
  "vkdiary": {
    github: {
      organization: "27rogi",
      repository: "vkdiary",
    },
    icon: "ph:book-duotone",
    leading: false,
    skills: ["ts"],
    url: "https://github.com/27rogi/vkdiary",
  },
  "localized-soundcloud": {
    icon: "ph:music-notes-duotone",
    leading: false,
    skills: ["js"],
    url: "https://github.com/27rogi/localized-soundcloud",
  },
  "diary": {
    icon: "ph:book-open-text-duotone",
    image: "/diary.png",
    leading: false,
    skills: ["ts", "nuxt", "nest", "mongodb", "tailwind"],
    url: "https://github.com/27rogi/mgkeit-diary-server",
  },
} as Record<string, ProjectLeading | ProjectBasic>
/* eslint-enable sort/object-properties */
