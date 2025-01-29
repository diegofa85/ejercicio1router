import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './componentes/Home';
import About from './componentes/About';
import Layout from './Layout';
import LayoutAbout from './componentes/LayoutAbout';
import LayoutCasosExito from './componentes/LayoutCasosExito';
import CasosExito from './componentes/CasosExito';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principal */}
        <Route path="/" element={<Layout />} />
        
        {/* About con subrutas */}
        <Route path="/about/*" element={<LayoutAbout />} />

        {/* Casos de Éxito con subrutas */}
        <Route path="/casosexito/*" element={<LayoutCasosExito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
