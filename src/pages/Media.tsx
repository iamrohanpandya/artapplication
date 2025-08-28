
import { mediaData } from '../data/mediaData';
import '../styles/Media.css';

const Media = () => (
  <div className="page-container">
    <h2>Media & Press</h2>
    <div className="media-grid">
      {mediaData.map(media => (
        <div className="media-card" key={media.id}>
          <img src={media.image} alt={media.title} />
          <div>
            <h3>{media.title}</h3>
            <p>{media.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Media;
