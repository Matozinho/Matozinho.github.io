import BlogPostViews from "./BlogPostViews";

// biome-ignore lint/suspicious/noExplicitAny: I still don't the type
const PlannedPosts = ({ sortedPosts }: { sortedPosts: any }) => {
	return (
		<>
			{/* <div className="relative w-full mb-4">
				<input
					aria-label="Search articles"
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Search articles"
					className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
				/>
				<svg
					className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
				All Posts
			</h3> */}

			<hr className="mb-4 border-gray-200 dark:border-gray-800 w-full" />

			<section className="flex flex-col w-full gap-2">
				{!sortedPosts.length && (
					<p className="mb-4 text-gray-600 dark:text-gray-400">
						No posts found.
					</p>
				)}
				{sortedPosts.length > 0 &&
					sortedPosts.map(
						(
							post: {
								slug: string;
								data: {
									title: string;
									slug: string;
									description: string;
								};
							},
							key: number,
						) => (
							<a
								href={`/post/${post.slug}`}
								className="w-full border border-gray-200 dark:border-gray-800 rounded-md p-3"
								key={key}
							>
								<div className="w-full">
									<div className="flex flex-col justify-between md:flex-row">
										<h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
											{post.data.title}
										</h4>
										<p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
											<div className="flex items-center space-x-1">
												{" "}
												<BlogPostViews slug={post.slug} />
												<span>views</span>
											</div>
										</p>
									</div>
									<p className="text-gray-600 dark:text-gray-400">
										{post.data.description}
									</p>
								</div>
							</a>
						),
					)}
			</section>
		</>
	);
};

export default PlannedPosts;
