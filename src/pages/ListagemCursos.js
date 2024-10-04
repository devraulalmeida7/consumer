// /src/pages/ListagemAlunos.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import CursoList from '../components/CursoList';

const ListagemCursos = () => {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();  // Para navegação programática

    const loadCursos = async () => {
        const response = await api.get('/cursos');
        setCursos(response.data);
    };

    useEffect(() => {
        loadCursos();
    }, []);

    const handleEdit = (id) => {
        navigate(`/cursos//editar/${id}`);  // Navega para a página de edição
    };

    const handleDelete = async (id) => {
        await api.delete(`/cursos/del/${id}`);
        loadCursos();
    };

    return (
        <div>
            <h2>Lista de Cursos</h2>
            <Link to="/cursos/cadastro">
                <button>Cadastrar Curso</button>
            </Link>
            <CursoList cursos={cursos} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
};

export default ListagemCursos;
