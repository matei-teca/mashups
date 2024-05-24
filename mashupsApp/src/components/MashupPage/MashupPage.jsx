// src/components/MashupPage.jsx
import React, { useState, useEffect } from 'react';
import { getAuthUrl, getAccessTokenFromUrl, searchTracks } from '../../spotifyService';
import SpotifyPlayer from './SpotifyPlayer';
import './MashupPage.css';

const MashupPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tracks, setTracks] = useState([]);
    const [token, setToken] = useState('');
    const [selectedTrackUri, setSelectedTrackUri] = useState('');

    useEffect(() => {
        const token = getAccessTokenFromUrl();
        if (token) {
            setToken(token);
        }
    }, []);

    const handleSearch = async () => {
        if (!token) {
            window.location.href = getAuthUrl();
            return;
        }

        const result = await searchTracks(token, searchQuery);
        setTracks(result);
    };

    const handlePlayTrack = (uri) => {
        setSelectedTrackUri(uri);
    };

    return (
        <div className="mashup-page">
            <header className="header">
                <nav className="navbar">
                    <a href="/" style={{ textDecoration: "none", color: "white" }}>
                        <div className="logo">MashupsApp</div>
                    </a>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section className="mashup-content">
                <h2>Mashup Your Content</h2>
                <p>Use our tools to create amazing mashups from your favorite music and videos.</p>
                <div className="mashup-tools">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for tracks"
                    />
                    <button onClick={handleSearch}>Search</button>
                    <div className="tracks">
                        {tracks.map((track) => (
                            <div key={track.id} className="track" onClick={() => handlePlayTrack(track.uri)}>
                                <img src={track.album.images[0]?.url} alt={track.name} />
                                <div>{track.name}</div>
                                <div>{track.artists.map(artist => artist.name).join(', ')}</div>
                            </div>
                        ))}
                    </div>
                    {selectedTrackUri && <SpotifyPlayer token={token} trackUri={selectedTrackUri} />}
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 MashupsApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MashupPage;
