// /src/components/alunoList.js
import React from 'react';

const AlunoList = ({ alunos, onDelete, onEdit }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Data de Matrícula</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno) => (
                    <tr key={aluno.id_aluno}>
                        <td>{aluno.id_aluno}</td>
                        <td>{aluno.nome_aluno}</td>
                        <td>{aluno.data_nascimento}</td>
                        <td>{aluno.email_aluno}</td>
                        <td>{aluno.telefone_aluno}</td>
                        <td>{aluno.data_inicio}</td>
                        <td>{new Date(aluno.data_matricula).toLocaleDateString('pt-BR')}</td>
                        <td>
                            <button className="edit-button" onClick={() => onEdit(aluno.id_aluno)}>Editar</button>
                            <button className="delete-button" onClick={() => onDelete(aluno.id_aluno)}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AlunoList;
