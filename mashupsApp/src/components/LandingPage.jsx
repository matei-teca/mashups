// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';  // Assuming you will add some styles

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">MashupsApp</div>
                    <ul className="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="hero">
                    <h1>Welcome to MashupsApp</h1>
                    <p>Your one-stop solution for amazing mashups.</p>
                    <a href="#features" className="btn-primary">Discover More</a>
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
                <p>MashupsApp is dedicated to providing the best platform for creating and sharing mashups. Our mission is to empower creativity and bring people together through music and videos.</p>
            </section>
            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>Have questions or feedback? <a href="mailto:support@mashupsapp.com">Email us</a>.</p>
            </section>
            <footer className="footer">
                <p>&copy; 2024 MashupsApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
