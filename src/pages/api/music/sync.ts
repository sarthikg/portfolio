import type { APIContext, Props } from "astro";

/**
 * Set prerendering to false to be rendered on the server
 */
export const prerender = false;

export async function GET({ request }: APIContext<Props>): Promise<Response> {
  try {
    const playlistId = new URL(request.url).searchParams.get("playlistId");

    if (!playlistId) {
      return new Response("Missing playlistId", { status: 400 });
    }

    await fetch("https://playlistor.io/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Music-User-Token": import.meta.env.MUSIC_TOKEN,
      },
      body: JSON.stringify({
        platform: "apple-music",
        playlist: `https://open.spotify.com/playlist/${playlistId}`,
      }),
    });
  } catch (error) {
    return new Response("Something went wrong!", { status: 500 });
  }
  return new Response("Submitted!", { status: 200 });
}
