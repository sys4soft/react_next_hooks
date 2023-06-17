import React from "react";
import { useState } from "react";
import UseState_05a from "./UseState_05a";

export default () => {

    const [valor, setValor] = useState(0)

    function atualizarValor(){
        setValor(1000)
    }

    return (
        <>
            <h3>Exercício 03</h3>
            <h3>Valor: <strong>{valor}</strong></h3>
            <hr />
            <UseState_05a funcao={atualizarValor} />
        </>
    )
}