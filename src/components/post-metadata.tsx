import type { BlogPost } from "@/content/config";
import type { FC } from "react";
import { Badge } from "./ui/badge";
import isEmpty from "lodash.isempty";
import { Folder, Hashtag, Menu } from "@carbon/icons-react";

export const PostMetadata: FC<{ postData: BlogPost["data"] }> = ({
	postData,
}) => {
	return (
		<div className="flex gap-4">
			{postData.series && (
				<div className="flex gap-2 items-center">
					<div className="p-1 rounded bg-slate-700">
						<Folder />
					</div>
					<Badge className="cursor-pointer">{postData.series}</Badge>
				</div>
			)}
			{!isEmpty(postData?.categories) && (
				<div className="flex gap-2 items-center">
					<div className="p-1 rounded bg-slate-700">
						<Menu />
					</div>
					{postData?.categories?.map((category) => (
						<Badge key={category} className="cursor-pointer">
							{category}
						</Badge>
					))}
				</div>
			)}
			{!isEmpty(postData?.tags) && (
				<div className="flex items-center">
					<div className="p-1 rounded bg-slate-700 mr-2">
						<Hashtag />
					</div>
					{postData?.tags?.map((tag, idx) => (
						<>
							<Badge key={tag} className="cursor-pointer">
								{tag}
							</Badge>
							{idx < (postData?.tags?.length ?? 1) - 1 && (
								<span className="text-slate-500 mx-1">•</span>
							)}
						</>
					))}
				</div>
			)}
		</div>
	);
};
