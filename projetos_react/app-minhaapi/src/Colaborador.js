import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ColaboradorList from './ColaboradorList';
import ColaboradorForm from './ColaboradorForm';
import axios from 'axios';

function Colaborador() {
    axios({
        method: "get",
        url: "http://localhost:3000/api/colaboradores",
        responseType: "stream",
    }).then(function (response) {
        setColaboradores(response.data);
    });


    let colaboradorList = [
        { id: 1, nome: 'Fulano', email: 'email1@teste', senha: '1234' },
        { id: 2, nome: 'Beltrano', email: 'email2@teste', senha: '12345' },
    ]
    const [colaboradores, setColaboradores] = useState(colaboradorList)

    const initialState = { id: null, nome: '', email: '', senha: '' }
    const [colaborador, setColaborador] = useState(initialState)
    const [editando, setEditando] = useState(false)

    const inserir = () => {
        setColaborador(initialState);
        setEditando(true);
    }

    const salvar = () => {
        if (colaborador.id == null) { // inclussão
            colaborador.id = colaboradores.length + 1
            setColaboradores([...colaboradores, colaborador])
        } else { // alteração
            setColaboradores(colaboradores.map((find) => (find.id === colaborador.id ? colaborador : find)))
        }
        setEditando(false);
    }
    const cancelar = () => {
        console.log('Cancelou ...');
        setEditando(false);
    }

    const editar = (id) => {
        setColaborador(colaboradores.filter((colaborador) => colaborador.id == id)[0]);
        setEditando(true);
    }
    const excluir = (id) => {
        setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
    }

    if (!editando) {
        return (
            <div className="App">
                <ColaboradorList colaboradores={colaboradores} inserir={inserir} editar={editar} excluir={excluir} />
            </div>
        );
    } else {
        return (
            <div className="App">
                <ColaboradorForm colaborador={colaborador} setColaborador={setColaborador} salvar={salvar} cancelar={cancelar} />
            </div>
        );
    }
}
export default Colaborador;