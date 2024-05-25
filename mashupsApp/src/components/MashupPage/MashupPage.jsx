// src/components/MashupPage.jsx
import React, { useState, useEffect } from 'react';
import { getAuthUrl, getAccessTokenFromUrl, searchTracks } from '../../spotifyService';
import { searchYouTube } from '../../youtubeService';
import SpotifyPlayer from './SpotifyPlayer';
import YouTubePlayer from './YouTubePlayer';
import './MashupPage.css';

const MashupPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [spotifyTracks, setSpotifyTracks] = useState([]);
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [spotifyToken, setSpotifyToken] = useState('');
    const [selectedSpotifyTrackUri, setSelectedSpotifyTrackUri] = useState('');
    const [selectedYouTubeVideoId, setSelectedYouTubeVideoId] = useState('');

    useEffect(() => {
        const token = getAccessTokenFromUrl();
        if (token) {
            setSpotifyToken(token);
        }
    }, []);

    const handleSpotifySearch = async () => {
        if (!spotifyToken) {
            window.location.href = getAuthUrl();
            return;
        }

        const result = await searchTracks(spotifyToken, searchQuery);
        setSpotifyTracks(result);
    };

    const handleYouTubeSearch = async () => {
        const result = await searchYouTube(searchQuery);
        setYoutubeVideos(result);
    };

    return (
        <div className="mashup-page">
            <header className="header">
                <nav className="navbar">
                    <a href="/" className="logo-link">
                        <div className="logo">MashupsApp</div>
                    </a>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/mashup">Mashup</a></li>
                    </ul>
                </nav>
            </header>
            <section className="mashup-content">
                <h2>Mashup Your Content</h2>
                <p>Use our tools to create amazing mashups from your favorite music and videos.</p>
                <div className="search-tools">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for tracks and videos"
                        className="search-input"
                    />
                    <button onClick={handleSpotifySearch} className="btn btn-spotify">Search Spotify</button>
                    <button onClick={handleYouTubeSearch} className="btn btn-youtube">Search YouTube</button>
                </div>
                <div className="results">
                    <div className="results-section">
                        <h3>Spotify Tracks</h3>
                        <div className="tracks-grid">
                            {spotifyTracks.map((track) => (
                                <div
                                    key={track.id}
                                    className="track"
                                    onClick={() => setSelectedSpotifyTrackUri(track.uri)}
                                >
                                    <img src={track.album.images[0]?.url} alt={track.name} />
                                    <div className="track-info">
                                        <div className="track-name">{track.name}</div>
                                        <div className="track-artists">
                                            {track.artists.map(artist => artist.name).join(', ')}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="results-section">
                        <h3>YouTube Videos</h3>
                        <div className="videos-grid">
                            {youtubeVideos.map((video) => (
                                <div
                                    key={video.id.videoId}
                                    className="video"
                                    onClick={() => setSelectedYouTubeVideoId(video.id.videoId)}
                                >
                                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                                    <div className="video-info">
                                        <div className="video-title">{video.snippet.title}</div>
                                        <div className="video-channel">{video.snippet.channelTitle}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="player-section">
                    {selectedSpotifyTrackUri && <SpotifyPlayer token={spotifyToken} trackUri={selectedSpotifyTrackUri} />}
                    {selectedYouTubeVideoId && <YouTubePlayer videoId={selectedYouTubeVideoId} />}
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 MashupsApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MashupPage;
