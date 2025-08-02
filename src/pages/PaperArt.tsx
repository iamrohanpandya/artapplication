import React from 'react';
import { paperArtData } from '../data/paperArtData';
import '../styles/PaperArt.css';

const PaperArt = () => {
  return (
    <div className="paper-container">
      <h2 className="paper-heading">Paper Art Gallery</h2>
      <div className="paper-grid">
        {paperArtData.map((art) => (
          <div className="paper-card" key={art.id}>
            <img src={art.image} alt={art.title} className="paper-image" />
            <div className="paper-info">
              <h3>{art.title}</h3>
              {art.description && <p>{art.description}</p>}
              <button>OPTIONS AVAILABLE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperArt;
