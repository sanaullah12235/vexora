import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Pricing from './pages/Pricing';
import Process from './pages/Process';
import Blog from './pages/Blog';
import Consultation from './pages/Consultation';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="process" element={<Process />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
