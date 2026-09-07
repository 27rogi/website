import { Elysia, t } from "elysia"

export const WebringNavItem = t.Object({
  favicon: t.Optional(t.String()),
  name: t.String(),
  slug: t.String(),
  url: t.String(),
})

export const WebringResponse = t.Object({
  curr: WebringNavItem,
  next: t.Optional(WebringNavItem),
  prev: t.Optional(WebringNavItem),
})

export default new Elysia({ prefix: "/webring" }).get("", async () => {
  const { webringSlug } = useRuntimeConfig()

  if (!webringSlug) {
    throw new Error("No webring slug provided in runtime config")
  }

  const res = await fetch(`https://webring.otomir23.me/${webringSlug}/data`)
  if (!res.ok) {
    throw new Error(`Webring fetch error: ${res.status} ${res.statusText}`)
  }

  return await res.json()
}, {
  response: WebringResponse,
})
