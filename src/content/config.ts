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

			tags: z.array(z.string()).optional().default([]),
			categories: z.array(z.string()).optional().default([]),
			series: z.string().optional(),

			// To handle upcoming posts
			planned: z.boolean().optional().default(false),
			isDraft: z.boolean().default(false),

			// handle prev and next post
			prevTitle: z.string().optional(),
			prevSlug: z.string().optional(),
			nextTitle: z.string().optional(),
			nextSlug: z.string().optional(),
		}),
});

export interface BlogPost {
	slug: string;
	data: {
		image?: { src: z.ZodString; width: number; height: number };
		imageAlt?: string;
		ogImage?: string;
		slug: string;

		title: string;
		description: string;

		publishedAt: Date;
		updatedAt?: Date;

		from?: string;
		to?: string;

		tags?: string[];
		categories?: string[];
		series?: string;

		planned?: boolean;
		isDraft: boolean;

		prevTitle?: string;
		prevSlug?: string;
		nextTitle?: string;
		nextSlug?: string;
	};
}

export const collections = {
	posts: blogPostCollection,
};
