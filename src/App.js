// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroCurso from './pages/CadastroCurso';
import ListagemCursos from './pages/ListagemCursos';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListagemCursos />} />
                <Route path="/cadastro" element={<CadastroCurso />} />
                <Route path="/editar/:id" element={<ListagemCursos/>} />  {/* Rota de edição */}

                <Route path="/alunos" element={<ListagemCursos />} />
                <Route path="/alunos/cadastro" element={<CadastroCurso />} />
                <Route path="/alunos/editar/:id" element={<ListagemCursos/>} />  {/* Rota de edição */}
            </Routes>
        </Router>
    );
}

export default App;
