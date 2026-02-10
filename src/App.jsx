import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GeneratorPage from './pages/GeneratorPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-mint flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<GeneratorPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
