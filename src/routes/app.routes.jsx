import { Routes, Route } from "react-router-dom";

import  Vehicles  from '../pages/Vehicles';
import  RegisterVehicles  from '../pages/RegisterVehicles';
import  FormFiltro from '../pages/FormFiltro';


export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Vehicles />}/>
      <Route path="/RegisterVehicles" element={<RegisterVehicles />}/>
      <Route path="/FormFiltro" element={<FormFiltro />}/>
    </Routes>
  )
}