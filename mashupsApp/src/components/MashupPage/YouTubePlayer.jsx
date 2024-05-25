// src/components/YouTubePlayer.jsx
import React, { useEffect } from 'react';

const YouTubePlayer = ({ videoId }) => {
    useEffect(() => {
        // Load the YouTube IFrame Player API
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('player', {
                height: '390',
                width: '640',
                videoId,
                events: {
                    onReady: (event) => event.target.playVideo(),
                },
            });
        };

        return () => {
            // Clean up the YouTube IFrame Player API
            document.body.removeChild(script);
        };
    }, [videoId]);

    return <div id="player"></div>;
};

export default YouTubePlayer;


