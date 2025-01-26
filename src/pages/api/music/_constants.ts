export interface SpotifyPlaylist {
  name: string;
  id: string;
  updateFrequency: "daily" | "weekly";
}

export const spotifyPlaylists: SpotifyPlaylist[] = [
  // Made for You
  {
    name: "Daily Mix 1",
    id: "37i9dQZF1E376QwloseAfr",
    updateFrequency: "daily",
  },
  {
    name: "Daily Mix 2",
    id: "37i9dQZF1E34T72I0DkmUy",
    updateFrequency: "daily",
  },
  {
    name: "Daily Mix 3",
    id: "37i9dQZF1E39QHotjSEEJ0",
    updateFrequency: "daily",
  },
  {
    name: "Daily Mix 4",
    id: "37i9dQZF1E37s9s5M96nRp",
    updateFrequency: "daily",
  },
  {
    name: "Daily Mix 5",
    id: "37i9dQZF1E35g41kUcLxdn",
    updateFrequency: "daily",
  },
  {
    name: "Daily Mix 6",
    id: "37i9dQZF1E39gipmPQ7hgQ",
    updateFrequency: "daily",
  },
  {
    name: "Discover Weekly",
    id: "37i9dQZEVXcLG1H4N5dmtG",
    updateFrequency: "weekly",
  },
  {
    name: "Release Radar",
    id: "37i9dQZEVXbhEnWhE7TIAb",
    updateFrequency: "weekly",
  },
  // Punjabi
  {
    name: "Punjabi Pyar",
    id: "37i9dQZF1DWSKoG4oVafMt",
    updateFrequency: "weekly",
  },
  {
    name: "Punjabi 101",
    id: "37i9dQZF1DX5cZuAHLNjGz",
    updateFrequency: "weekly",
  },
  {
    name: "Punjabi Pop",
    id: "37i9dQZF1DWWwF1YkSKLlU",
    updateFrequency: "weekly",
  },
  {
    name: "New Music Friday Punjabi",
    id: "37i9dQZF1DX5baCFRgbF3x",
    updateFrequency: "weekly",
  },
  // Hindi
  {
    name: "Bollywood Acoustic",
    id: "37i9dQZF1DWSwxyU5zGZYe",
    updateFrequency: "weekly",
  },
  {
    name: "Radar India",
    id: "37i9dQZF1DWTAtTdFMiJYK",
    updateFrequency: "weekly",
  },
  {
    name: "New Music Hindi",
    id: "37i9dQZF1DXd8cOUiye1o2",
    updateFrequency: "weekly",
  },
  // Hindi Indies
  {
    name: "hIndies",
    id: "37i9dQZF1DWXSzFkaLsPkN",
    updateFrequency: "weekly",
  },
  {
    name: "Indie India",
    id: "37i9dQZF1DX5q67ZpWyRrZ",
    updateFrequency: "weekly",
  },
  // Global
  {
    name: "Top 50 - Global",
    id: "37i9dQZEVXbMDoHDwVN2tF",
    updateFrequency: "daily",
  },
  {
    name: "Viral 50 - Global",
    id: "37i9dQZEVXbLiRSasKsNU9",
    updateFrequency: "daily",
  },
];
