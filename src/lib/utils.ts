import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatViews = (views: number) => {
	return new Intl.NumberFormat("en-US").format(views);
};
