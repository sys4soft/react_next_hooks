import React from "react";
import { useState } from "react";
import UseState_07a from "./UseState_07a";

export default () => {

    const [valor, setValor] = useState([0, 0, 0])

    function atualizar(indice, unidade) {
        const tmp = [...valor]
        tmp[indice] = tmp[indice] + unidade
        setValor(tmp)
    }

    function decValor1() { atualizar(0, -1) }
    function incValor1() { atualizar(0, 1) }
    function decValor2() { atualizar(1, -1) }
    function incValor2() { atualizar(1, 1) }
    function decValor3() { atualizar(2, -1) }
    function incValor3() { atualizar(2, 1) }

    return (
        <>
            <h3>Exercício 06</h3>
            <ul>
                <li>{valor[0]}</li>
                <li>{valor[1]}</li>
                <li>{valor[2]}</li>
            </ul>
            <hr />
            <UseState_07a funcaoDec={decValor1} funcaoInc={incValor1} />
            <hr />
            <UseState_07a funcaoDec={decValor2} funcaoInc={incValor2} />
            <hr />
            <UseState_07a funcaoDec={decValor3} funcaoInc={incValor3} />
        </>
    )
}