import React from "react";
import { useState } from "react";
import UseState_06a from "./UseState_06a";

export default () => {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function decValor1() { setValor1(old => old - 5) }
    function incValor1() { setValor1(old => old + 5) }
    function decValor2() { setValor2(old => old - 10) }
    function incValor2() { setValor2(old => old + 10) }

    return (
        <>
            <h3>Exercício 04</h3>
            <h3>Adição de {valor1} + {valor2} = <strong>{}{valor1 + valor2}</strong></h3>
            <hr />
            <UseState_06a funcaoDec={decValor1} funcaoInc={incValor1}/>
            <hr />
            <UseState_06a funcaoDec={decValor2} funcaoInc={incValor2}/>
        </>
    )
}