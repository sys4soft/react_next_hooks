import React from "react";
import './UseState_04.css';
import UseState_04a from "./UseState_04a";

export default () => {
    return (
        <>
            <h4>Exercício 02</h4>
            <div className="layout">
                <UseState_04a unidades={1} />
                <UseState_04a unidades={5} />
                <UseState_04a unidades={10} />
            </div>
        </>
    )
}