// src/components/SpotifyPlayer.jsx
import React, { useEffect, useState } from 'react';

const SpotifyPlayer = ({ token, trackUri }) => {
    const [player, setPlayer] = useState(undefined);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'MashupsApp Player',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                playTrack(device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.connect();
        };

        return () => {
            if (player) {
                player.disconnect();
            }
        };
    }, [token, trackUri]);

    const playTrack = (deviceId) => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [trackUri] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    };

    return (
        <div>
            <button onClick={() => player.togglePlay()}>Play/Pause</button>
        </div>
    );
};

export default SpotifyPlayer;
