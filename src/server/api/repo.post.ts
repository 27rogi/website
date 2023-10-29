import type { ProjectGitHubStats } from '~~/types/project.type'

/* eslint-disable camelcase */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (body && (!body.organization || !body.repository)) {
    return {
      error: 'No body',
    }
  }
  const { githubToken } = useRuntimeConfig()
  const data = await $fetch(`https://api.github.com/repos/${body.organization}/${body.repository}`, {
    method: 'GET',
    retry: 3,
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  })
  if (!data) {
    return null
  }
  const { stargazers_count, forks } = <ProjectGitHubStats>data
  return {
    stargazers_count,
    forks,
  }
})
