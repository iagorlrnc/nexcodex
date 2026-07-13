import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import PortfolioPage from './pages/Portfolio';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contato" element={<Contato />} />
          <Route path="privacidade" element={<Privacidade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
