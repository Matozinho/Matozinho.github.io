import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

export default function GiscusComment() {
	const [theme, setTheme] = useState<boolean | string>(false);

	useEffect(() => {
		if (window.location !== undefined) {
			const theme =
				document.documentElement.attributes.getNamedItem("data-theme")?.value;
			if (theme) {
				setTheme(theme);
			}
		}
	}, [theme]);

	return theme ? (
		<div className="mt-12 border-t pt-6 border-gray-200 dark:border-gray-800 w-full">
			<Giscus
				id="comments"
				repo="Matozinho/Matozinho.github.io"
				repoId="R_kgDOIJcaYg"
				category="General"
				categoryId="DIC_kwDOIJcaYs4CjRwm"
				mapping="url"
				term="Welcome to Matozinho's blog comment!"
				reactionsEnabled="1"
				emitMetadata="1"
				inputPosition="top"
				theme={theme === "dark" ? "dark" : "light"}
				lang="en"
				loading="lazy"
			/>
		</div>
	) : (
		<></>
	);
}
