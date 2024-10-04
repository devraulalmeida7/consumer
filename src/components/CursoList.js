// /src/components/cursoList.js
import React from 'react';

const CursoList = ({ cursos, onDelete, onEdit }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Duração</th>
                    <th>Data de início</th>
                </tr>
            </thead>
            <tbody>
                {cursos.map((curso) => (
                    <tr key={curso.id_curso}>
                        <td>{curso.id_curso}</td>
                        <td>{curso.nome_curso}</td>
                        <td>{curso.descricao_curso}</td>
                        <td>{curso.duracao_curso}</td>
                        <td>{curso.data_inicio}</td>
                        <td>{new Date(curso.data_matricula).toLocaleDateString('pt-BR')}</td>
                        <td>
                            <button className="edit-button" onClick={() => onEdit(curso.id_curso)}>Editar</button>
                            <button className="delete-button" onClick={() => onDelete(curso.id_curso)}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CursoList;
