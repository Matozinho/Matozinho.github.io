import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const blogs = await getCollection("posts");
	const sortedPosts = blogs.sort(
		(a, b) =>
			Number(new Date(b.data.publishedAt)) -
			Number(new Date(a.data.publishedAt)),
	);
	return rss({
		title: "Matozinho's Blogs",
		description:
			"Welcome to my blog! Here you will find a collection of my thoughts, ideas, and projects.",
		site: context.site || "https://matozinho-github-io.vercel.app",
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishedAt,
			description: post.data.description,
			link: `/post/${post.slug}/`,
		})),
		customData: "<language>en-us</language>",
	});
}
