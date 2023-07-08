import React, { useState, useEffect } from 'react'

export default () => {

    const [valor, setValor] = useState(0)
    const [nome, setNome] = useState('')

    function incremento() {
        setValor(valor + 1)
    }

    function definirNome(){
        setNome('João Ribeiro')
    }

    useEffect(() => {
        console.log('Executar apenas no arranque do compoente')
    },[])

    useEffect(() => {
        console.log('Executar apenas na alteração do VALOR')
    }, [valor])

    useEffect(() => {
        console.log('Executar apenas na alteração do NOME')
    }, [nome])

    useEffect(() => {
        console.log('Executar sempre que VALOR e NOME sejam alterados')
    }, [valor, nome])


    return (
        <>
            <h3>UseEffect 01</h3>
            <button onClick={incremento}>Incremento</button>
            <h3>{valor}</h3>
            <button onClick={definirNome}>Definir nome</button>
            <h3>{nome}</h3>
        </>
    )
}