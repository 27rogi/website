import { defineCollection, defineContentConfig } from "@nuxt/content"
import { defineSitemapSchema } from "@nuxtjs/sitemap/content"
import { z } from "zod/v4"

// TODO: implement schema for reviews
// const reviewSchema = z.object({
//   categories: z.array(z.string()),
//   createdAt: z.date(),
//   daysInUse: z.number().min(0),
//   description: z.string(),
//   icon: z.string(),
//   rating: z.number().min(1).max(5),
//   title: z.string(),
//   updatedAt: z.date(),
// })

export default defineContentConfig({
  collections: {
    reviews_en: defineCollection({
      schema: z.object({
        sitemap: defineSitemapSchema(),
      }),
      source: {
        include: "reviews/en/**",
        prefix: "/reviews/",
      },
      type: "page",
    }),
    reviews_ru: defineCollection({
      schema: z.object({
        sitemap: defineSitemapSchema(),
      }),
      source: {
        include: "reviews/ru/**",
        prefix: "/reviews/",
      },
      type: "page",
    }),
  },
})
