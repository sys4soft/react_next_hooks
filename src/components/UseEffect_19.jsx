import React, { useState, useEffect } from 'react'

export default () => {

    const [paises, setPaises] = useState([])

    // buscar os dados da coleção de países em restcountries
    // https://restcountries.com/v3.1/all

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resposta => resposta.json())
            .then(dados => setPaises(dados))
    }, [])

    return (
        <>
            <h3>UseEffect 03 - Países</h3>
            <ul>
                {paises.map(pais => <li key={pais.cca2}>{pais.name.common}</li>)}
            </ul>
        </>
    )
}