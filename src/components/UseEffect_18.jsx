import React, { useState, useEffect, useRef } from 'react'

export default () => {

    const [valor, setValor] = useState(0)
    const renderInicial = useRef(true)

    function incremento() { setValor(valor + 1) }

    useEffect(()=>{
        if(renderInicial.current){
            renderInicial.current = false;
        } else {
            console.log('Código executado apenas quando o VALOR é alterado')
        }
    },[valor])

    return (
        <>
            <h3>UseEffect 02</h3>
            <button onClick={incremento}>Incremento</button>
            <h3>{valor}</h3>
        </>
    )
}