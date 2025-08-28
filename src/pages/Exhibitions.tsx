
import { exhibitionsData } from '../data/exhibitionsData';
import '../styles/Exhibitions.css';

const Exhibitions = () => (
  <div className="page-container">
    <h2>Exhibitions</h2>
    <div className="exhibitions-grid">
      {exhibitionsData.map(exh => (
        <div className="exhibition-card" key={exh.id}>
          <img src={exh.image} alt={exh.title} />
          <div>
            <h3>{exh.title}</h3>
            <p>{exh.venue}<br/>{exh.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Exhibitions;
