import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// pages are plain md in src/content/pages. images sit next to the md and are
// referenced relatively (./foo.jpg), so they render on github too.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages };
