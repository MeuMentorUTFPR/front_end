import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {
  CADASTRAR_USUARIO,
  PAGINA_INICIAL,
  CADASTRAR_CURSO,
  LISTAR_CURSOS,
  CADASTRAR_AVALIACAO,
  // CADASTRAR_DISCIPLINA,
  LISTAR_DISCIPLINAS,
  CADASTRAR_MONITORIA,
  EDITAR_MONITORIA,
  MINHAS_MONITORIAS,
  LOGIN,
} from './routes';

import {
  PaginaInicial,
  CadastrarUsuario,
  Login,
  CadastrarCurso,
  Avaliacao,
  // CadastrarDisciplina,
  ListarDisciplinas,
  CadastrarMonitoria,
  EditarMonitoria,
  MinhasMonitorias,
  ListarCursos,
} from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={CADASTRAR_USUARIO} element={<CadastrarUsuario />} />
        <Route exact path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
        <Route exact path={LISTAR_CURSOS} element={<ListarCursos />} />
        <Route exact path={CADASTRAR_AVALIACAO} element={<Avaliacao />} />
        {/* <Route
          exact
          path={CADASTRAR_DISCIPLINA}
          element={<CadastrarDisciplina />}
        /> */}
        <Route
          exact
          path={LISTAR_DISCIPLINAS}
          element={<ListarDisciplinas />}
        />
        <Route
          exact
          path={CADASTRAR_MONITORIA}
          element={<CadastrarMonitoria />}
        />
        <Route exact path={EDITAR_MONITORIA} element={<EditarMonitoria />} />
        <Route exact path={MINHAS_MONITORIAS} element={<MinhasMonitorias />} />
        <Route exact path={LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};
