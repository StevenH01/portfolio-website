import axios from 'axios';
import { Track } from '../types/spotify';

export interface SpotifyTrack {
  id: string;
  name: string;
  album: {
    images: { url: string }[];
  };
  artists: { name: string }[];
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyTopTracksResponse {
  items: SpotifyTrack[];
}

export const getAccessToken = async (): Promise<string | null> => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = 'http://localhost:3000'; // Change to your app's URL
  const scopes = 'user-top-read';
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes)}`;

  if (!window.location.hash) {
    window.location.replace(authUrl); // Redirect to Spotify login
    return null; // Wait for user to log in
  } else {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');

    if (token) {
      localStorage.setItem('spotify_access_token', token); // Store token
    }

    return token;
  }
};

function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export const fetchTopTracks = async (accessToken: string): Promise<SpotifyTrack[]> => {
  const apiUrl = 'https://api.spotify.com/v1/me/top/tracks';

  try {
    // Call the Spotify API
    const response = await axios.get<SpotifyTopTracksResponse>(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Return the array of top tracks
    return response.data.items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unknown error:', error);
    }

    throw error;
  }
};
