import React from "react";
export default ({funcaoDec, funcaoInc}) => {
    return (
        <>
            <button onClick={funcaoDec}>-</button>
            <button onClick={funcaoInc}>+</button>
        </>
    )
}