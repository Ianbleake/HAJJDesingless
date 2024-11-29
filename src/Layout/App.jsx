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
import '../Utils/Core';

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

function App({data}) {
  return (
    <Router>
      <Header />
      <CoreScriptExecutor />
      <Routes>
        <Route path="/" element={<Home data={data.views.home} />} />
        <Route path="/careers" element={<Careers data={data.views.careers}/>} />
        <Route path="/curate-your-proyect" element={<CurateProyect data={data.views.curateproyect} />} />
        <Route path="/feature-media" element={<FeatureMedia data={data.views.featuremedia} />} />
        <Route path="/our-news" element={<Ournews data={data.views.ournews} />} />
        <Route path="/our-oath" element={<OurOath data={data.views.ouroath} />} />
        <Route path="/showroom" element={<OurShowroom data={data.views.ourshowroom} />} />
        <Route path="/team" element={<OurTeam data={data.views.ourteam} />} />
        <Route path="/our-work" element={<OurWork data={data.views.ourwork} />} />
        <Route path="/privacy" element={<Privacy data={data.views.privacy} />} />
        <Route path="/proyect-detail" element={<ProyectDetail data={data.views.proyectdetail} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions data={data.views.termsandconditions} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
