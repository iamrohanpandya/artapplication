import React from 'react';
import './ArtCard.css';

interface ArtCardProps {
  title: string;
  image: string;
  description?: string;
  artist?: string;
  price?: string;
}

const ArtCard: React.FC<ArtCardProps> = ({
  title,
  image,
  description,
  artist,
  price,
}) => (
  <div className="art-card">
    <img src={image} alt={title} className="art-img" />
    <div className="art-info">
      <div className="art-title">{title}</div>
      {artist && <div className="art-artist">By {artist}</div>}
      {price && <div className="art-price">{price}</div>}
      {description && <div className="art-description">{description}</div>}
      <button className="art-btn">Options Available</button>
    </div>
  </div>
);

export default ArtCard;
