// /src/pages/CadastroAluno.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import CursoForm from '../components/CursoForm';

const CadastroCurso = () => {
    const { id } = useParams();  // Pega o id do aluno da URL
    const navigate = useNavigate();
    const [editingCurso, setEditingCurso] = useState(null);  // Estado para o aluno a ser editado

    useEffect(() => {
        if (id) {
            // Se houver um ID, busca os dados do aluno para edição
            api.get(`/alunos/${id}`).then(response => {
                const curso = response.data[0];  // Pega o aluno específico
                setEditingCurso(curso);
            });
        }
    }, [id]);

    const handleFormSubmit = (curso) => {
        if (editingCurso) {
            // Atualiza o aluno existente
            api.put(`/alunos/insert/${id}`, curso).then(() => {
                alert('Aluno atualizado com sucesso!');
                navigate('/');  // Redireciona para a lista de alunos
            });
        } else {
            // Cria um novo aluno
            api.post('/alunos/insert', curso).then(() => {
                alert('Aluno cadastrado com sucesso!');
                navigate('/');  // Redireciona para a lista de alunos
            });
        }
    };

    return (
        <div>
            <h2>{editingCurso ? 'Editar Curso' : 'Cadastrar Curso'}</h2>
            <CursoForm onSubmit={handleFormSubmit} editingCurso={editingCurso} />
            <Link to="/">
                <button>Voltar para a Listagem</button>
            </Link>
        </div>
    );
};

export default CadastroCurso;
