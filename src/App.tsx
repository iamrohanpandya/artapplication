import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MiniatureArt from './pages/MiniatureArt';
import PaperArt from './pages/PaperArt';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import Exhibitions from './pages/Exhibitions';
import Media from './pages/Media';
import PaperMache from './pages/PaperMache';



import './App.css'; // ✅ Import CSS file


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/miniature-art" element={<MiniatureArt />} />
            <Route path="/paper-art" element={<PaperArt />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/media" element={<Media />} />
            <Route path="/paper-mache" element={<PaperMache />} />




          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
