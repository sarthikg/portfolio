import { spotifyPlaylists } from "./_constants";

/**
 * Set prerendering to false to be rendered on the server
 */
export const prerender = false;

export async function GET(): Promise<Response> {
  for (let i = 0; i < spotifyPlaylists.length; i++) {
    const playlist = spotifyPlaylists[i];

    const urlSearchParams = new URLSearchParams({ playlistId: playlist.id });
    console.log("Converting playlist:", playlist.name);
    const url = `${import.meta.env.SITE}/api/music/sync?${urlSearchParams.toString()}`;
    const response = await fetch(url, { method: "GET" });
    console.log("Response:", response.status);
  }
  return new Response("Submitted!", { status: 200 });
}
