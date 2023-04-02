<script lang="ts" setup>
import { useSkillsStore } from '~/store/skills'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()

const github: any = ref(null)
if (props.project.github) {
  useFetch('/api/repo', {
    key: props.project.name,
    method: 'POST',
    retry: 3,
    body: {
      organization: props.project.github.organization,
      repository: props.project.github.repository,
    },
  }).then((res) => {
    if (res.data.value) {
      github.value = res.data.value
    }
  })
}

const skills: any = useSkillsStore().$state

const projectUniqueId = computed(() => props.project.name.toLowerCase().split(' ').join('_'))
</script>

<template>
  <nuxt-link
    :id="projectUniqueId"
    :to="project.url"
    class="project"
    :class="{ 'project__no-img': !project.icon }"
  >
    <div class="project__body">
      <h2 :class="`project__title ${project.text}`">
        {{ t(`page.projects.items.${projectUniqueId}.title`) }}
      </h2>
      <div class="project__skills">
        <template
          v-for="(skill, i) of project.skills"
          :key="i"
        >
          <p
            v-if="skills[skill]"
            class="project__skill"
            :class="skills[skill].color"
          >
            <Icon
              class="skill__icon"
              :name="skills[skill].icon"
            />{{ skills[skill].name }}
          </p>
        </template>
      </div>
      <div class="project__desc">
        <p>{{ t(`page.projects.items.${projectUniqueId}.description`) }}</p>
      </div>
    </div>
    <Transition
      name="slide"
      mode="out-in"
    >
      <div
        v-if="github && !github.error"
        class="project__github"
      >
        <p v-if="github.stargazers_count! > 0">
          <Icon name="tabler:star" /> {{ github.stargazers_count }}
        </p>
        <p v-if="github.forks! > 0">
          <Icon name="tabler:git-fork" /> {{ github.forks }}
        </p>
      </div>
    </Transition>
    <nuxt-picture
      v-if="project.icon"
      preset="optimized"
      class="project__icon"
      :src="project.icon"
      placeholder
      loading="lazy"
      :alt="t(`page.projects.items.${projectUniqueId}.description`)"
    />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.project {
  @apply border rounded-lg flex flex-col bg-gray-800/20 border-villa-green-200/10 h-[240px] p-6 transition-all z-2 gap-2 col-span-1 row-span-1 duration-200 relative overflow-hidden sm:h-[203px];

  .project__skills {
    @apply flex flex-row flex-wrap max-h-full text-xs transition-all gap-1.5 duration-200 items-start md:text-sm md:gap-2;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

    .project__skill {
      @apply border rounded-md flex flex-row font-semibold bg-gray-700 border-villa-green-50/15 text-white py-1 px-2 gap-1.5 relative items-center justify-center !bg-opacity-20;

      .skill__icon {
        @apply rounded-sm h-3 top-0 w-3 relative md:rounded-md md:h-4.5 md:w-4.5;
      }
    }
  }

  .project__body {
    @apply flex flex-col transition-all z-6 gap-2 duration-300 relative;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

    .project__title {
      @apply border-transparent font-headline font-extrabold border-b-0 border-r-0 text-xl leading-tight tracking-tight transition-all text-villa-green-500 duration-200 backdrop-filter backdrop-blur-0 md:text-[1.6rem];
      transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    }

    .project__desc {
      @apply flex flex-col mt-2 transition-all duration-200;
      transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

      p {
        @apply font-semibold text-sm leading-tight tracking-tight md:text-lg;
      }
    }
  }

  .project__icon {
    @apply flex flex-col h-[fit-content] m-auto mx-auto rounded-4xl opacity-30 p-2 transform-gpu origin-center transition-all inset-0 z-5 scale-100 duration-400 overflow-hidden filter select-none will-change-transform absolute blur-3xl;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

    img {
      @apply m-auto;
    }
  }

  .project__github {
    @apply flex flex-row font-bold my-8 mx-6 text-sm leading-none transition-all top-0 right-0 gap-2 absolute;
    .icon {
      @apply align-bottom;
    }
  }

  &:hover {
    @apply bg-villa-green-800/20 border-villa-green-200/20;

    &:not(.project__no-img) {
      .project__body {
        .project__title {
          @apply border-b rounded-b-md bg-gray-900/40 border-villa-green-200/20 -m-6 text-lg py-2 px-3 backdrop-blur-md !text-villa-green-500;
        }

        .project__desc,
        .project__skills {
          @apply m-0 max-h-0 opacity-0;
        }
      }

      .project__icon {
        @apply opacity-100 left-0 blur-0;

        animation: showcase 6s cubic-bezier(0.5, 0, 0.24, 1) infinite;
      }

      .project__github {
        @apply opacity-0;
      }
    }
  }
}

@keyframes showcase {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  20% {
    transform: translateY(-6rem) scale(1.1);
  }

  80% {
    transform: translateY(6rem) scale(1.1);
  }
}
</style>
