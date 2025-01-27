import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import  Productos  from './componentes/Productos';
import  Home  from './componentes/Home';
import  About  from './componentes/About';
import  Layout  from './Layout';
import CasosExito from './componentes/CasosExito';
import LayoutInicio from './componentes/LayoutInicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
	   	    <Route index element={<Home />} />	
          <Route path="/about" element={<About />} />
          <Route path="/casosexito" element={<CasosExito />} />
          <Route path="/" element={<LayoutInicio />} >
          <Route path="/about" element={<About />} />
          <Route path="/casosexito" element={<CasosExito />} />
   	   </Route>
   	   </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
