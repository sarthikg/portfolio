import type { APIContext, Props } from "astro";
import { Article, db } from "astro:db";

interface RequestBody {
  articles: string[];
}

/**
 * Syncs the list of articles with the database.
 *
 * @param {APIContext<Props>} context - The API context object.
 * @returns {Promise<Response>} A promise that resolves to the response.
 */
export async function GET({ request }: APIContext<Props>): Promise<Response> {
  const body = await request.json();
  const { articles } = body as RequestBody;
  if (!articles) {
    return new Response("Invalid request!", { status: 400 });
  }

  try {
    await db
      .insert(Article)
      .values(
        articles.map((article) => ({
          id: article,
        })),
      )
      .onConflictDoNothing();
    return new Response(`Inserted articles`, { status: 200 });
  } catch {
    return new Response("Something went wrong!", { status: 500 });
  }
}
