// src/components/YouTubePlayer.jsx
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return <YouTube videoId={videoId} opts={opts} key={videoId} />;
};

export default YouTubePlayer;
