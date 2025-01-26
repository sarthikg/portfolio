import { spotifyPlaylists } from "./_constants";

/**
 * Set prerendering to false to be rendered on the server
 */
export const prerender = false;

export async function GET(): Promise<Response> {
  spotifyPlaylists.forEach((playlist) => {
    const urlSearchParams = new URLSearchParams({
      playlistId: playlist.id,
    });
    console.log("Converting playlist:", playlist.name);
    const url = `${import.meta.env.SITE}/api/music/sync?${urlSearchParams.toString()}`;
    fetch(url, { method: "GET" });
  });
  return new Response("Submitted!", { status: 200 });
}
