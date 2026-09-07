import { Elysia, t } from "elysia"

export const RepoQuerySchema = t.Object({
  organization: t.String({ description: "GitHub organization or username" }),
  repository: t.String({ description: "Repository name" }),
})

export const RepoSchema = t.Object({
  forks: t.Number(),
  stargazers_count: t.Number(),
})

export default new Elysia({ prefix: "/repo" }).get("", async ({ query }) => {
  const { ghApiBase, ghApiToken } = useRuntimeConfig()
  const { organization, repository } = query as Record<string, string | undefined>

  if (!organization || !repository) {
    throw new Error("No organization or repository provided")
  }

  const res = await fetch(
    `${ghApiBase}/repos/${organization}/${repository}`,
    {
      headers: ghApiToken
        ? {
            Authorization: `Bearer ${ghApiToken}`,
          }
        : undefined,
    },
  )

  if (!res.ok) {
    console.error(res.status, res.statusText)
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
  }

  return await res.json()
}, {
  query: RepoQuerySchema,
  response: RepoSchema,
})
