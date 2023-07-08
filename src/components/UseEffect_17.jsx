import React, { useState, useEffect } from 'react'

export default () => {

    const [valor, setValor] = useState(0)

    function incremento() {
        setValor(valor + 1)
    }

    useEffect(() => {
        console.log('componente iniciado 01')
    },[])


    return (
        <>
            <h3>UseEffect 01</h3>
            <button onClick={incremento}>Incremento</button>
            <h3>{valor}</h3>
        </>
    )
}