import { getCollection } from "astro:content";
import isEmpty from "lodash.isempty";

export async function getSortedPosts({
	isDraft = false,
	planned = false,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: { isDraft?: boolean; planned?: boolean } = {}): Promise<any[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return data.isDraft === isDraft && data.planned === planned;
	});

	// Sort all posts by date
	const sorted = allBlogPosts.sort((a, b) => {
		const dateA = new Date(a.data.publishedAt);
		const dateB = new Date(b.data.publishedAt);
		return dateA > dateB ? -1 : 1;
	});

	// Handle linking within series
	const seriesMap = new Map();

	// Group posts by series
	for (const post of sorted) {
		const series = post.data.series;
		if (series) {
			if (!seriesMap.has(series)) {
				seriesMap.set(series, []);
			}
			seriesMap.get(series).push(post);
		}
	}

	// Assign next and previous posts within the same series
	for (const seriesPosts of seriesMap.values()) {
		for (let i = 1; i < seriesPosts.length; i++) {
			seriesPosts[i].data.nextSlug = seriesPosts[i - 1].slug;
			seriesPosts[i].data.nextTitle = seriesPosts[i - 1].data.title;
		}
		for (let i = 0; i < seriesPosts.length - 1; i++) {
			seriesPosts[i].data.prevSlug = seriesPosts[i + 1].slug;
			seriesPosts[i].data.prevTitle = seriesPosts[i + 1].data.title;
		}
	}

	// Assign next and previous posts for non-series posts
	sorted.forEach((post, index) => {
		if (!post.data.series) {
			if (index > 0) {
				post.data.nextSlug = sorted[index - 1].slug;
				post.data.nextTitle = sorted[index - 1].data.title;
			}
			if (index < sorted.length - 1) {
				post.data.prevSlug = sorted[index + 1].slug;
				post.data.prevTitle = sorted[index + 1].data.title;
			}
		}
	});

	return sorted;
}

export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return data.isDraft !== true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		post.data.tags.map((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
};

export async function getFiltersList(): Promise<{
	tags: Tag[];
	categories: Category[];
}> {
	const tags = await getTagList();
	const categories = await getCategoryList();

	return { tags, categories };
}

export function applyFilters({
	posts,
	appliedFilters,
	searchTerm,
}: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	posts: any[];
	appliedFilters?: string[];
	searchTerm?: string;
}) {
	let filteredPosts = posts;

	if (appliedFilters && !isEmpty(appliedFilters)) {
		filteredPosts = posts.filter((post) => {
			if (appliedFilters.length === 0) return true;
			for (const filter of appliedFilters) {
				if (
					post.data.tags.includes(filter) ||
					post.data.categories.includes(filter)
				)
					return true;
			}
			return false;
		});
	}

	if (searchTerm && !isEmpty(searchTerm)) {
		filteredPosts = filteredPosts.filter((post) => {
			return post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
		});
	}

	return filteredPosts;
}

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return data.isDraft !== true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		if (!post.data.categories) {
			const ucKey = "uncategorized";
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}
		// biome-ignore lint/complexity/noForEach: <explanation>
		post.data.categories.forEach((category: string) => {
			count[category] = count[category] ? count[category] + 1 : 1;
		});
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({ name: c, count: count[c] });
	}
	return ret;
}

export type Series = {
	name: string;
	count: number;
};

export async function getSeriesList(): Promise<Series[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return data.isDraft !== true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		if (!post.data.series) return;

		count[post.data.series] = count[post.data.series]
			? count[post.data.series] + 1
			: 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Series[] = [];
	for (const c of lst) {
		ret.push({ name: c, count: count[c] });
	}
	return ret;
}
