import { useState } from "react";
export default () => {

    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);

    function diminuir1() {
        setValor1(v => v - 1);
    }
    function aumentar1() {
        setValor1(v => v + 1);
    }

    function diminuir2() {
        setValor2(v => v - 1);
    }
    function aumentar2() {
        setValor2(v => v + 1);
    }

    return (
        <>
            <h4>useState - Exercício 1</h4>

            <p>{valor1}</p>
            <button onClick={diminuir1}>-</button>
            <button onClick={aumentar1}>+</button>
            <hr />
            <p>{valor2}</p>
            <button onClick={diminuir2}>-</button>
            <button onClick={aumentar2}>+</button>
            <hr />
            <p>O resultado de {valor1} x {valor2} = {valor1 * valor2}</p>
        </>
    )
}