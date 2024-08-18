export async function incrementArticleReadCount(
  slug: string,
): Promise<Response> {
  const response = await fetch("/api/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ article: slug }),
  });
  return response;
}
