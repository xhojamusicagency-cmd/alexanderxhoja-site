import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Shows from './pages/Shows';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Lessons from './pages/Lessons';
import StudioIndex from './studio/StudioIndex';
import StudentPage from './studio/StudentPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// The public marketing site — wrapped in the full Layout (header + footer).
function PublicSite() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/biography" element={<Navigate to="/bio" replace />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/piano-lessons" element={<Navigate to="/lessons" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Navigate to="/contact" replace />} />
        <Route path="/booking-inquiry" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Private studio — its own minimal chrome, not the marketing nav. */}
        <Route path="/studio" element={<StudioIndex />} />
        <Route path="/studio/:slug" element={<StudentPage />} />
        {/* Everything else is the public marketing site. */}
        <Route path="*" element={<PublicSite />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
