import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function AppRoutes() {
  {
    /* 
          Na rota "/" a estrutura a ser renderizada é:
          <Pagina Padrão>
            <Inicio/>
          </Pagina Padrão>

          Na rota "/sobremim" a estrutura a ser renderizada é:
          <Pagina Padrão>
            <SobreMim/>
          </Pagina Padrão>
          
        */
  }
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />}></Route>
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>}></Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
