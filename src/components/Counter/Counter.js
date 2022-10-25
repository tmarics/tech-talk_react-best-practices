import React, { useEffect, useState } from "react";

function Counter() {
    const [ counter, setCounter ] = useState(0)

    const increment = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(prevState => prevState + 1)
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        const { signal } = controller
        fetch('http://localhost:7000/post/2', { signal })
        console.log(counter)

        return () => {
            controller.abort()
        }
    }, [counter])

    return (
        <>
            {counter}
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter