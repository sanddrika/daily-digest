import './App.css';
import './index.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import NewsDetail from './pages/newsDetail';
import About from './pages/about';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsOfService from './pages/termsOfService';
import Quotes from './pages/quotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
