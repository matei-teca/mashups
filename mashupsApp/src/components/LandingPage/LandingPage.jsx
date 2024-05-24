// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';  // Assuming you will add some styles

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <nav className="navbar">
                    <a href="/" style={{textDecoration: "none", color: "white"}}>
                        <div className="logo">MashupsApp</div>
                    </a>
                    <ul className="nav-links">
                        <li><a href="/mashup">Mashup</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="hero">
                    <h1>Welcome to MashupsApp</h1>
                    <p>Your one-stop solution for amazing mashups.</p>
                    <a href="/mashup" className="btn-primary">Discover More</a>
                </div>
            </header>
            <section id="features" className="features">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>Create Mashups Easily</h3>
                        <p>Use our intuitive tools to create amazing mashups with ease.</p>
                    </div>
                    <div className="feature">
                        <h3>Share with Friends</h3>
                        <p>Share your creations with your friends and the world.</p>
                    </div>
                    <div className="feature">
                        <h3>Explore Popular Mashups</h3>
                        <p>Discover and explore mashups created by others.</p>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <h2>About Us</h2>
                <p>MashupsApp is a platform that brings together creators and consumers of unique multimedia mashups. Our mission is to provide a seamless experience for users to express their creativity, discover new content, and connect with like-minded individuals.</p>
                <p>Whether you're a music enthusiast, a video creator, or simply someone who enjoys exploring innovative combinations of media, MashupsApp has something for you. Our user-friendly interface and powerful tools empower users to unleash their imagination and share their creations with the world.</p>
            </section>
            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>We value your feedback and are here to assist you with any questions or concerns you may have. Feel free to reach out to us via email at <a href="mailto:support@mashupsapp.com">support@mashupsapp.com</a> or through our social media channels:</p>
                <ul>
                    <li>Twitter: <a href="https://twitter.com/mashupsapp">@mashupsapp</a></li>
                    <li>Facebook: <a href="https://www.facebook.com/mashupsapp">MashupsApp</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/mashupsapp/">@mashupsapp</a></li>
                </ul>
            </section>
            <footer className="footer">
                <p>&copy; 2024 MashupsApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
