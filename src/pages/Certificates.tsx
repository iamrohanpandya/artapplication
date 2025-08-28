
import { certificatesData } from '../data/certificatesData';
import '../styles/Certificates.css';

const Certificates = () => (
  <div className="page-container">
    <h2>Certificates & Awards</h2>
    <div className="certificates-grid">
      {certificatesData.map(cert => (
        <div className="certificate-card" key={cert.id}>
          <img src={cert.image} alt={cert.title} />
          <div>
            <h3>{cert.title}</h3>
            <p>{cert.year}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certificates;
