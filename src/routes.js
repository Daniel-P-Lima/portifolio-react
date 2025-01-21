import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />}></Route>
        <Route path="*" element={<div>Página não encontrada</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
