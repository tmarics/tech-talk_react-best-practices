import React, { useState } from "react";

const ChangeColor = () => {
    const [ color, setColor ] = useState("black")
    const [ background, setBackground ] = useState("red")
    const [ obj, setObj ] = useState({ color: "black", background: "red" })
    return (
        <div>
{/*            <button onClick={() => setObj({
                ...obj,
                color: obj.color === "black" ? "red" : "black",
                background: obj.background === "red" ? "black" :"red"
            })}>Change Color
            </button>
            <h1 style={{ color: obj.color, background: obj.background }}>Test</h1>*/}

            <button onClick={() => setColor(color === "black" ? "red" : "black")}>Change Color</button>
            <button onClick={() => setBackground(background === "red" ? "black" : "red")}>Change Background</button>
            <h1 style={{ color, background }}>Test</h1>
        </div>
    )
}

export default ChangeColor