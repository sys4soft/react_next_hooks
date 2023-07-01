import React, { useState } from "react";

export default () => {

    const [text, setText] = useState("Texto inicial")

    return (
        <>
            <h3>Input data</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <p>{text}</p>
            <h3>{text}</h3>
            <p>O texto inserido é {text}</p>
        </>
    )
}