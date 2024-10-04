// /src/components/alunoForm.js
import React, { useState, useEffect } from 'react';

const AlunoForm = ({ onSubmit, editingAluno }) => {
    const [aluno, setaluno] = useState({
        
        nome_aluno: '',
        descricao_aluno: '',
        duracao_aluno: '',
        data_inicio: ''

    });


    useEffect(() => {
        if (editingAluno) {
            // Preenche o formulário com os dados do aluno para edição
            setaluno({
                nome_aluno: editingAluno.nome_aluno || '',
                descricao_aluno: editingAluno.descricao_aluno || '',
                duracao_aluno: editingAluno.duracao_aluno.split('T')[0] || '',
                data_inicio: editingAluno.data_inicio.split('T')[0] || ''
            });
        }
    }, [editingAluno]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setaluno({ ...aluno, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(aluno);  // Chama a função de submit, seja para criar ou editar
        setaluno({
            nome_aluno: '',
            descricao_aluno: '',
            duracao_aluno: '',
            data_inicio: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome_aluno"
                placeholder="Nome"
                value={aluno.nome_aluno}
                onChange={handleChange}
            />
            <input
                type="date"
                name="data_nascimento"
                placeholder="Data Nascimento"
                value={aluno.descricao_aluno}
                onChange={handleChange}
            />
            <input
                type="string"
                name="email_aluno"
                placeholder="Email Aluno"
                value={aluno.duracao_aluno}
                onChange={handleChange}
            />
            <input
                type="date"
                name="data_matricula"
                placeholder="Data de início"
                value={aluno.data_inicio}
                onChange={handleChange}
            />
            <button type="submit">
                {editingaluno ? 'Atualizar aluno' : 'Cadastrar aluno'}
            </button>
        </form>
    );
};

export default AlunoForm;
