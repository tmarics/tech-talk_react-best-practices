import './App.css';
import Child from "./components/Child/Child";
import { createContext, useState } from "react";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import ChangeColorSimple from "./components/ChangeColor/ChangeColorSimple";
import Counter from "./components/Counter/Counter";
import React from "react";

export const AppContext = createContext(null)

function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;
