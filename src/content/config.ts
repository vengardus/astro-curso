import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),

    // Relation
    author: z.string(),

    // Relationm
    tags: z.array(z.string()),
  }),
});

// Debe tene el nombre collectiions
// crear carpeta contents/blog
export const collections = { 
    blog: blogCollection 
}