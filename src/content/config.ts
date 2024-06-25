import { defineCollection, z } from "astro:content";

const blogPostCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			image: image().optional(),
			imageAlt: z.string().optional(),
			ogImage: z.string().optional(),

			title: z.string(),
			description: z.string(),

			publishedAt: z.date(),
			updatedAt: z.date().optional(),

			from: z.string().optional().default("gray-100"),
			to: z.string().optional().default("gray-800"),

			// To handle upcoming posts
			planned: z.boolean().optional().default(false),
			isDraft: z.boolean().default(false),
		}),
});

export const collections = {
	posts: blogPostCollection,
};
