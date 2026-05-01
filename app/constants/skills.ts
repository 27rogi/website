import type { Skill } from "~~/types/skill"

// @unocss-include
export const Skills = {
  astro: {
    color: "bg-[#a7480b]/30",
    icon: "vscode-icons:file-type-astro",
    name: "Astro",
  },
  bun: {
    color: "bg-[#7d6369]/20",
    icon: "devicon:bun",
    name: "Bun",
  },
  caddy: {
    color: "bg-[#0cca06]/20",
    icon: "vscode-icons:file-type-caddy",
    name: "Caddy",
  },
  docker: {
    color: "bg-[#28b7e9]/20",
    icon: "devicon:docker",
    name: "Docker",
  },
  fabric: {
    color: "bg-[#d9ceb3]/20",
    icon: "material-icon-theme:minecraft-fabric",
    name: "Fabric for Minecraft",
  },
  figma: {
    color: "bg-[#a158fd]/20",
    icon: "material-icon-theme:figma",
    name: "Figma",
  },
  go: {
    color: "bg-[#6ad7e5]/20",
    icon: "vscode-icons:file-type-go",
    name: "Go",
  },
  idea: {
    color: "bg-[#fc2856]/20",
    icon: "devicon:intellij",
    name: "IDEA",
  },
  illustrator: {
    color: "bg-[#ff9a00]/20",
    icon: "devicon:illustrator",
    name: "Illustrator",
  },
  java: {
    color: "bg-[#e82d2e]/20",
    icon: "devicon:java",
    name: "Java",
  },
  js: {
    color: "bg-[#eed94e]/20",
    icon: "devicon:javascript",
    name: "JavaScript",
  },
  kotlin: {
    color: "bg-[#bb1be4]/20",
    icon: "devicon:kotlin",
    name: "Kotlin",
  },
  linux: {
    color: "bg-[#1790cd]/20",
    icon: "devicon:archlinux",
    name: "Linux (Endeavour OS / Arch)",
  },
  mongodb: {
    color: "bg-[#459f37]/20",
    icon: "devicon:mongodb",
    name: "MongoDB",
  },
  mysql: {
    color: "bg-[#015a6a]/20",
    icon: "vscode-icons:file-type-mysql",
    name: "MySQL",
  },
  nest: {
    color: "bg-[#dd234e]/20",
    icon: "devicon:nestjs",
    name: "NestJS",
  },
  node: {
    color: "bg-[#63b648]/20",
    icon: "devicon:nodejs",
    name: "Node",
  },
  nuxt: {
    color: "bg-[#00da81]/20",
    icon: "vscode-icons:file-type-nuxt",
    name: "Nuxt",
  },
  preact: {
    color: "bg-[#673ab8]/20",
    icon: "vscode-icons:file-type-preact",
    name: "Preact",
  },
  primevue: {
    color: "bg-[#40b782]/20 text-[#00da81]",
    icon: "simple-icons:primevue",
    name: "PrimeVue",
  },
  prisma: {
    color: "bg-[#015a6a]/20",
    icon: "vscode-icons:file-type-prisma",
    name: "Prisma",
  },
  scss: {
    color: "bg-[#b85d86]/20",
    icon: "vscode-icons:file-type-scss",
    name: "SCSS",
  },
  tailwind: {
    color: "bg-[#43a7b2]/20",
    icon: "vscode-icons:file-type-tailwind",
    name: "Tailwind",
  },
  ts: {
    color: "bg-[#0079ca]/20",
    icon: "devicon:typescript",
    name: "TypeScript",
  },
  unocss: {
    color: "bg-[#cacaca]/10",
    icon: "vscode-icons:file-type-unocss",
    name: "UnoCSS",
  },
  vscode: {
    color: "bg-[#3484ba]/20",
    icon: "devicon:vscode",
    name: "Visual Studio Code",
  },
  vue: {
    color: "bg-[#40b782]/20",
    icon: "vscode-icons:file-type-vue",
    name: "Vue",
  },
  wails: {
    color: "bg-[#6a0202]/30 text-[#e82d2e]",
    icon: "simple-icons:wails",
    name: "Wails",
  },
} as Record<string, Skill>
