import React from 'react';
import ArtCard from '../components/ArtCard';
import { paperArtData } from '../data/paperArtData';

const PaperArt = () => {
  return (
    <div className="page-container">
      <h2>Paper Art Gallery</h2>
      <div className="art-grid">
        {paperArtData.map((art) => (
          <ArtCard key={art.id} title={art.title} image={art.image} description={art.description} />
        ))}
      </div>
    </div>
  );
};

export default PaperArt;
