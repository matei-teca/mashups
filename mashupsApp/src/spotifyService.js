// src/spotifyService.js
import axios from 'axios';

const CLIENT_ID = 'f845a864dff54c38a5a11da027984622'; // Replace with your Client ID
const CLIENT_SECRET = '685404c96fb74441b5f9fe0c962b5bf4'; // Replace with your Client Secret
const REDIRECT_URI = 'http://localhost:5173/callback'; // Replace with your Redirect URI
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

export const getAuthUrl = () => {
    const scope = 'streaming user-read-email user-read-private';
    return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}&response_type=token&show_dialog=true`;
};

export const getAccessTokenFromUrl = () => {
    const hash = window.location.hash;
    let token = null;
    if (hash) {
        const params = new URLSearchParams(hash.substring(1));
        token = params.get('access_token');
    }
    return token;
};

export const searchTracks = async (token, query) => {
    const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            q: query,
            type: 'track'
        }
    });

    return response.data.tracks.items;
};
