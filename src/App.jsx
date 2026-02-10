import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GeneratorPage from './pages/GeneratorPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter basename="/Password_Generator">
      <div className="min-h-screen bg-mint flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<GeneratorPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
