import type { APIContext, Props } from "astro";
import { Article, db, eq, max, sql } from "astro:db";

/**
 * Set prerendering to false to be rendered on the server
 */
export const prerender = false;

/**
 * Increments the view-count of an article.
 *
 * @param {APIContext<Props>} context - The API context object.
 * @returns {Promise<Response>} A promise that resolves to the response.
 */
export async function POST({ request }: APIContext<Props>): Promise<Response> {
  const url = new URL(request.url);
  const slug = url.searchParams.get("article");
  if (!slug) {
    return new Response("Invalid request!", { status: 400 });
  }

  try {
    const article = await db
      .update(Article)
      .set({ viewCount: sql`${Article.viewCount} + ${1}` })
      .where(eq(Article.id, slug))
      .returning({ slug: Article.id, viewCount: Article.viewCount });
    return new Response(
      `Updated view count of ${article.at(0).slug} to ${article.at(0).viewCount}`,
      {
        status: 200,
      },
    );
  } catch {
    return new Response("Something went wrong!", { status: 500 });
  }
}

/**
 * Fetches the view-count of an article.
 *
 * @param {APIContext<Props>} context - The API context object.
 * @returns {Promise<Response>} A promise that resolves to the response.
 */
export async function GET({ request }: APIContext<Props>): Promise<Response> {
  const url = new URL(request.url);
  const slug = url.searchParams.get("article");
  if (!slug) {
    try {
      const article = await db
        .select({ viewCount: max(Article.viewCount) })
        .from(Article);
      return new Response(`${article?.at(0)?.viewCount}`, { status: 200 });
    } catch {
      return new Response("Something went wrong!", { status: 500 });
    }
  }

  try {
    const article = await db
      .select({ viewCount: Article.viewCount })
      .from(Article)
      .where(eq(Article.id, slug));
    return new Response(`${article?.at(0)?.viewCount}`, { status: 200 });
  } catch {
    return new Response("Something went wrong!", { status: 500 });
  }
}
