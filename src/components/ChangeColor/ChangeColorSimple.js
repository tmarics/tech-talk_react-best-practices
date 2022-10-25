import React, { useState } from "react";

const ChangeColorSimple = () => {
    const [ color, setColor ] = useState("black")
    return (
        <>
            <button onClick={() => setColor(color === "black" ? "red" : "black")}>Change Color</button>
            <h1 style={{ color }}>Test</h1>
        </>
    )
}

export default ChangeColorSimple