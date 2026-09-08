// until fitting webring is found, this code is commented out
import { Elysia } from "elysia"

// export const WebringNavItem = t.Object({
//   favicon: t.Optional(t.String()),
//   name: t.String(),
//   slug: t.String(),
//   url: t.String(),
// })

// export const WebringResponse = t.Object({
//   curr: WebringNavItem,
//   next: t.Optional(WebringNavItem),
//   prev: t.Optional(WebringNavItem),
// })

export default new Elysia({ prefix: "/webring" }).get("", async () => {
  // const { webringSlug } = useRuntimeConfig()

  // if (!webringSlug) {
  //   throw new Error("No webring slug provided in runtime config")
  // }

  // const res = await fetch(`/${webringSlug}/data`)
  // if (!res.ok) {
  //   console.error(res.status, res.statusText)
  //   throw new Error(`Webring fetch error: ${res.status} ${res.statusText}`)
  // }

  // return await res.json()
  return { "ok": true }
}, {
  // response: WebringResponse,
})
