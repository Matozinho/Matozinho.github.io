export function getPostUrlBySlug(slug: string): string | null {
  if (!slug) return null;
  return url(`/post/${slug}/`);
}

function joinUrl(...parts: string[]): string {
  const joined = parts.join("/");
  return joined.replace(/\/+/g, "/");
}

export function url(path: string) {
  return joinUrl("", import.meta.env.BASE_URL, path);
}