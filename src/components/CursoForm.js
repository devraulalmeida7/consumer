// /src/components/cursoForm.js
import React, { useState, useEffect } from 'react';

const CursoForm = ({ onSubmit, editingCurso }) => {
    const [curso, setCurso] = useState({
        
        nome_curso: '',
        descricao_curso: '',
        duracao_curso: '',
        data_inicio: ''

    });


    useEffect(() => {
        if (editingCurso) {
            // Preenche o formulário com os dados do curso para edição
            setCurso({
                nome_curso: editingCurso.nome_curso || '',
                descricao_curso: editingCurso.descricao_curso || '',
                duracao_curso: editingCurso.duracao_curso.split('T')[0] || '',
                data_inicio: editingCurso.data_inicio.split('T')[0] || ''
            });
        }
    }, [editingCurso]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(curso);  // Chama a função de submit, seja para criar ou editar
        setCurso({
            nome_curso: '',
            descricao_curso: '',
            duracao_curso: '',
            data_inicio: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome_curso"
                placeholder="Nome"
                value={curso.nome_curso}
                onChange={handleChange}
            />
            <input
                type="text"
                name="descricao_curso"
                placeholder="Descrição de Curso"
                value={curso.descricao_curso}
                onChange={handleChange}
            />
            <input
                type="string"
                name="duracao_curso"
                placeholder="Duração de Curso"
                value={curso.duracao_curso}
                onChange={handleChange}
            />
            <input
                type="text"
                name="data_inicio"
                placeholder="Data de início"
                value={curso.data_inicio}
                onChange={handleChange}
            />
            <button type="submit">
                {editingCurso ? 'Atualizar curso' : 'Cadastrar curso'}
            </button>
        </form>
    );
};

export default CursoForm;
