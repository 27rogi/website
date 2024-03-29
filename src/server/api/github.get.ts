/* eslint-disable camelcase */
export default defineEventHandler(async () => {
  const { githubToken } = useRuntimeConfig()
  const data = await $fetch('https://api.github.com/users/27rogi', {
    method: 'GET',
    retry: 3,
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  })
  if (!data) {
    return null
  }
  const { public_repos, followers, public_gists, owned_private_repos, created_at, url } = <any>data
  return {
    public_repos,
    followers,
    public_gists,
    owned_private_repos,
    created_at,
    url,
  }
})
