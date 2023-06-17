import React from "react";
import { useState } from "react";

export default () => {

    const tmp = {
        nome: '',
        apelido: '',
        cidade: '',
        email: ''
    }

    const [cliente, setCliente] = useState(tmp)

    return (
        <>
            <h3>Exercício 07</h3>
            <hr />
            <ul>
                <li>Nome: {cliente.nome}</li>
                <li>Apelido: {cliente.apelido}</li>
                <li>Cidade: {cliente.cidade}</li>
                <li>Email: {cliente.email}</li>
            </ul>
            <hr />
            <button onClick={() => {
                const c = { ...cliente }
                c.nome = 'Joao'
                setCliente(c)
            }}>Nome</button>


            <button onClick={() => {
                const c = { ...cliente }
                c.apelido = 'Ribeiro'
                setCliente(c)
            }}>Apelido</button>


            <button onClick={() => {
                const c = { ...cliente }
                c.cidade = 'Lisboa'
                setCliente(c)
            }}>Cidade</button>


            <button onClick={() => {
                const c = { ...cliente }
                c.email = 'joao@gmail.com'
                setCliente(c)
            }}>Email</button>
        </>
    )
}