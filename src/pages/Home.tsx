import React from 'react';
import { miniatureArtData } from '../data/miniatureData';
import { paperArtData } from '../data/paperArtData';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  // Show top 4 miniature and top 2 paper art as samples
  const featuredMiniature = miniatureArtData.slice(0, 4);
  const featuredPaper = paperArtData.slice(0, 2);

  return (
    <div className="home-root">
      {/* Hero / Banner */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Shutrashilps</span></h1>
          <p>
            Celebrating the soul of Indian culture through miniature and paper art.<br />
            Explore a world where every detail is made by hand and heart.
          </p>
          <Link to="/miniature-art" className="hero-btn">Browse Art Gallery</Link>
        </div>
        {/* Optional: You can add a hero image here */}
        {/* <img src="/images/banner.jpg" alt="Hero Art Banner" className="hero-img" /> */}
      </section>

      {/* Featured Miniature Art */}
      <section className="featured-section">
        <div className="section-head">
          <h2>Featured Miniature Art</h2>
          <Link to="/miniature-art" className="see-all-link">See all</Link>
        </div>
        <div className="art-preview-grid">
          {featuredMiniature.map((art) => (
            <div className="preview-card" key={art.id}>
              <img src={art.image} alt={art.title} />
              <div className="preview-title">{art.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Paper Art */}
      <section className="featured-section">
        <div className="section-head">
          <h2>Featured Paper Art</h2>
          <Link to="/paper-art" className="see-all-link">See all</Link>
        </div>
        <div className="art-preview-grid">
          {featuredPaper.map((art) => (
            <div className="preview-card" key={art.id}>
              <img src={art.image} alt={art.title} />
              <div className="preview-title">{art.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / About Short */}
      <section className="about-short">
        <h3>About Shutrashilps</h3>
        <p>
          Shutrashilps is the vision of an artist dedicated to reviving Indian traditions and stories
          through handmade miniature and paper art. Every piece echoes patience, detail, and a passion for spreading messages of culture, unity, and joy.
        </p>
        <Link to="/portfolio" className="portfolio-link">See My Artistic Journey</Link>
      </section>
    </div>
  );
};

export default Home;
