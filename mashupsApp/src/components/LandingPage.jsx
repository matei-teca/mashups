// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';  // Assuming you will add some styles

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to MashupsApp</h1>
                <p>Your one-stop solution for amazing mashups.</p>
            </header>
            <section>
                <h2>Features</h2>
                <ul>
                    <li>Create mashups easily</li>
                    <li>Share with friends</li>
                    <li>Explore popular mashups</li>
                </ul>
            </section>
            <footer>
                <p>&copy; 2024 MashupsApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
