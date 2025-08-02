import React from 'react';
import './ArtCard.css';

interface ArtCardProps {
  title: string;
  image: string;
  description: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, image, description }) => {
  return (
    <div className="art-card">
      <img src={image} alt={title} className="art-image" />
      <div className="art-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ArtCard;
