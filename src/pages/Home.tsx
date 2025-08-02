import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Shutrashilps</h1>
        <p>Where imagination meets precision — dive into the world of Miniature & Paper Art</p>
        <div className="hero-buttons">
          <Link to="/miniature-art" className="hero-btn">Explore Miniature Art</Link>
          <Link to="/paper-art" className="hero-btn">Explore Paper Art</Link>
        </div>
      </section>

      <section className="home-about">
        <h2>About My Art</h2>
        <p>
          I'm passionate about creating intricate artworks through the medium of miniatures and paper. From handmade lanterns to micro-paintings on everyday objects, every piece reflects patience, precision, and creativity.
        </p>
      </section>
    </div>
  );
};

export default Home;
