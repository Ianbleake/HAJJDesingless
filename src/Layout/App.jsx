import '../Styles/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../Views/Home';
import Careers from '../Views/Careers';
import CurateProyect from '../Views/Curate-your-project';
import Ournews from '../Views/Our-news';
import FeatureMedia from '../Views/Featured-media';
import OurOath from '../Views/Our-oath';
import OurShowroom from '../Views/Our-showroom';
import OurTeam from '../Views/Our-team';
import OurWork from '../Views/Our-work';
import Privacy from '../Views/Privacy-policy';
import ProyectDetail from '../Views/Project-detail';
import TermsAndConditions from '../Views/Terms-conditions';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Scripts/Core';

function CoreScriptExecutor() {
  const location = useLocation();

  useEffect(() => {
    
    if (typeof window.Webflow !== 'undefined') {
      window.Webflow.destroy(); 
      window.Webflow.ready(); 
      window.Webflow.require('ix2').init(); 
    }
  }, [location.pathname]); 

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <CoreScriptExecutor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/curate-your-proyect" element={<CurateProyect />} />
        <Route path="/feature-media" element={<FeatureMedia />} />
        <Route path="/our-news" element={<Ournews />} />
        <Route path="/our-oath" element={<OurOath />} />
        <Route path="/showroom" element={<OurShowroom />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/proyect-detail" element={<ProyectDetail />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
