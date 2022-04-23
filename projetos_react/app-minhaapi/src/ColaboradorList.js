import React, { useState } from 'react';

function ColaboradorList(props) {
    return (
        <div>
            <h4>Manutenção Colaboradores</h4>
            <button type="button" class="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.colaboradores.length > 0 ? (props.colaboradores.map((o, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{o.id}</td>
                            <td>{o.nome}</td>
                            <td>{o.email}</td>
                            <td>{o.senha}</td>
                            <td>
                                <button  onClick={() => props.editar(o.id)} className="btn btn-primary btn-sm">Alterar</button>
                                <button  type="button" onClick={() => props.excluir(o.id)} className="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum Colaborador.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default ColaboradorList;