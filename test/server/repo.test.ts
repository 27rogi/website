import { $fetch, setup } from "@nuxt/test-utils/e2e"
import { describe, expect, it } from "vitest"

describe("route: /api/env", async () => {
  await setup({
    server: true
  })

  it("return env NUXT_API_SECRET", async () => {
    const data = await $fetch("/api/stats")
    expect(data).toBeTypeOf("object")
    expect(data).toHaveProperty("total_stars")
  })
})