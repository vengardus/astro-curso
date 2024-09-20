import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine(
        (img) => img.width < 1200,
        "La imagen debe tener un ancho menor a 1200",
      ),

      // Relation
      // author: z.string(),
      author: reference("author"),

      // Relationm
      tags: z.array(z.string()),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
  }),
});

// Debe tene el nombre collectiions
// crear carpeta contents/blog
export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
