import React from "react";
import { GrandChild } from "../GrandChild/GrandChild";

const Child = () => {
    console.count("Count: ")
    return (
        <div>
            <GrandChild/>
        </div>
    )
}

export default Child