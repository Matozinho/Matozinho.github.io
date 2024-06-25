import type { FC } from "react";

export interface FollowMeCardProps {
	href: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
}

export const FollowMeCard: FC<FollowMeCardProps> = ({
	href,
	icon: Icon,
	title,
	description,
}) => {
	return (
		<a
			href={href}
			className="transform hover:scale-[1.01] transition-all border dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon />
			<h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
				{title}
			</h3>
			<p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
		</a>
	);
};
