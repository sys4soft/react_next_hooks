import React, { useState } from "react";

export default () => {

    const [text, setText] = useState("")
    const [nomes, setNomes] = useState([])

    function inserir(){
        setNomes(prev => [...prev, text])
        setText('')
    }

    return (
        <>
            <h3>Input data -» collection</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={inserir}>Inserir</button>
            <ul>
                {
                    nomes.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))
                }
            </ul>
        </>
    )
}