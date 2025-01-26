import { spotifyPlaylists } from "./_constants";

export async function GET(): Promise<Response> {
  spotifyPlaylists.forEach(async (playlist) => {
    const urlSearchParams = new URLSearchParams({
      playlistId: playlist.id,
    });
    console.log("Converting playlist:", playlist.name);
    const response = await fetch(
      `${import.meta.env.SITE}/api/music/sync?${urlSearchParams.toString()}`,
    );
    if (response.status === 200) {
      console.log("Converted playlist:", playlist.name);
    } else {
      console.log("Failed to convert playlist:", playlist.name);
    }
  });
  return new Response("Submitted!", { status: 200 });
}
