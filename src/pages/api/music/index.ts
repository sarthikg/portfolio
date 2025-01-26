import { spotifyPlaylists } from "./_constants";

/**
 * Set prerendering to false to be rendered on the server
 */
export const prerender = false;

export async function GET(): Promise<Response> {
  spotifyPlaylists.forEach(async (playlist) => {
    const urlSearchParams = new URLSearchParams({
      playlistId: playlist.id,
    });
    console.log("Converting playlist:", playlist.name);
    console.log(
      `${import.meta.env.SITE}/api/music/sync?${urlSearchParams.toString()}`,
    );
    const response = await fetch(
      `${import.meta.env.SITE}/api/music/sync?${urlSearchParams.toString()}`,
    );
    console.log(response);
    if (response.status === 200) {
      console.log("Converted playlist:", playlist.name);
    } else {
      console.log("Failed to convert playlist:", playlist.name);
    }
  });
  return new Response("Submitted!", { status: 200 });
}
