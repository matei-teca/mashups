// src/youtubeService.js
import axios from 'axios';

const API_KEY = 'AIzaSyBA8ILVI9PhsfydbRfGxyz2XFoZqTcmpPg'; // Replace with your YouTube API key

export const searchYouTube = async (query) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            q: query,
            type: 'video',
            key: API_KEY
        }
    });

    return response.data.items;
};
