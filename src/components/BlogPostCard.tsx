import type { FC } from "react";
import { cn } from "../lib/utils";
import { Badge } from "@/components/ui/badge";

export interface BlogPostCardProps {
	title: string;
	slug: string;
	gradient: string;
	link?: string;
	tags?: string[];
	categories?: string[];
}

export const BlogPostCard: FC<BlogPostCardProps> = ({
	title,
	slug,
	gradient,
	link,
	tags,
	categories,
}) => {
	return (
		<a
			href={link ?? `/blog/${slug}`}
			className={cn(
				"transform hover:scale-[1.01] transition-all",
				"rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1",
				gradient,
			)}
		>
			<section className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
				{/* <div className="flex flex-col md:flex-row justify-between"> */}
				<h4 className="break-words text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
					{title}
				</h4>
				{/* </div> */}
				<div className="flex gap-2 overflow-auto whitespace-nowrap no-scrollbar">
					{tags?.map((tag) => (
						<Badge key={tag} variant="secondary">
							{tag}
						</Badge>
					))}
					{categories?.map((category) => (
						<Badge key={category} variant="secondary">
							{category}
						</Badge>
					))}
				</div>
			</section>
		</a>
	);
};
