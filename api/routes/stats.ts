import { Elysia, t } from "elysia"

export const StatsSchema = t.Object({
  created_at: t.String(),
  followers: t.Number(),
  public_repos: t.Number(),
  total_stars: t.Number(),
})

export default new Elysia({ prefix: "/stats" }).get("", async () => {
  const { ghApiBase, ghApiToken } = useRuntimeConfig()
  const baseFetchSettings: BunFetchRequestInit = {
    headers: ghApiToken
      ? {
          Authorization: `Bearer ${ghApiToken}`,
        }
      : undefined,
    method: "GET",
  }

  const userRes = await fetch(`${ghApiBase}/users/27rogi`, baseFetchSettings)
  if (!userRes.ok) {
    throw new Error(`GitHub API error: ${userRes.status} ${userRes.statusText}`)
  }
  const user = await userRes.json()

  const repoRes = await fetch(`${ghApiBase}/users/27rogi/repos?per_page=50&sort=pushed&type=public`, baseFetchSettings)
  if (!repoRes.ok) {
    throw new Error(`GitHub API error: ${repoRes.status} ${repoRes.statusText}`)
  }
  const repos = await repoRes.json()
  const totalStars = (repos as Array<any>)
    .filter((repo: any) => repo?.stargazers_count > 0)
    .reduce((sum, repo) => sum + repo?.stargazers_count, 0)

  return {
    created_at: user.created_at,
    followers: user.followers,
    public_repos: user.public_repos,
    total_stars: totalStars,
  }
}, {
  response: StatsSchema,
})
