import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterContractor from "./containers/RegisterContractor";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Contact from "./containers/Contact";
import Search from "./components/Search";
import Services from "./containers/Services";
import InfoContac from "./containers/InfoContac";
import PerfilFontanero from "./containers/PerfilFontanero";
import PerfilAyuda from "./containers/PerfilAyuda";
import PerfilElectricidad from "./containers/PerfilElectricidad";
import PerfilConstruccion from "./containers/PerfilConstruccion";
import PreRegister from "./containers/PreRegister";
import RegisterUser from "./containers/RegisterUser";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ login" element={<Login />} />
        <Route path="/ search" element={<><Navbar /><Search /></>} />
        <Route path="/ contact" element={<><Navbar /><Contact /></>} />
        <Route path="/ registercontractor" element={<RegisterContractor />} />
        <Route path="/ services" element={<><Navbar /><Services /></>} />
        <Route path="/ infocontac" element={<><Navbar /><InfoContac /></>} />
        <Route path="/ perfilFontanero" element={<><Navbar /><PerfilFontanero/></>} />
        <Route path="/ perfilAyuda" element={<><Navbar /><PerfilAyuda/></>} />
        <Route path="/ perfilElectricidad" element={<><Navbar /><PerfilElectricidad/></>} />
        <Route path="/ perfilConstruccion" element={<><Navbar /><PerfilConstruccion/></>} />
        <Route path="/ preregister" element={<PreRegister />} />
        <Route path="/ registeruser" element={<RegisterUser />} />
        
        <Route index path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
