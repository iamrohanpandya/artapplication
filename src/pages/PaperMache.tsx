
import { paperMacheData } from '../data/paperMacheData';
import '../styles/PaperMache.css';

const PaperMache = () => (
  <div className="page-container">
    <h2>Paper Mache Art</h2>
    <div className="paper-mache-grid">
      {paperMacheData.map(item => (
        <div className="paper-mache-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PaperMache;
