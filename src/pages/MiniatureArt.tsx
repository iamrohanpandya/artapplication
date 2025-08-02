import React from 'react';
import ArtCard from '../components/ArtCard';
import { miniatureArtData } from '../data/miniatureData';

const MiniatureArt = () => {
  return (
    <div className="page-container">
      <h2>Miniature Art Gallery</h2>
      <div className="art-grid">
        {miniatureArtData.map((art) => (
          <ArtCard key={art.id} title={art.title} image={art.image} description={art.description} />
        ))}
      </div>
    </div>
  );
};

export default MiniatureArt;
