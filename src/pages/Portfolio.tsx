import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Miniature Heritage Series',
      description: 'A series of miniature artworks representing Indian architecture and culture on small objects.',
      image: '/images/portfolio1.jpg',
    },
    {
      title: 'Festive Paper Lanterns',
      description: 'Handmade paper lanterns (Kandil) created for Diwali using intricate folding techniques.',
      image: '/images/portfolio2.jpg',
    },
    {
      title: 'Micro Flora Collection',
      description: 'Tiny floral illustrations using acrylic on matchsticks and paper grains.',
      image: '/images/portfolio3.jpg',
    },
    // Add more as needed
  ];

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
