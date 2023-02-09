import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter === 0 ? 0 : counter-1 ); // operatore ternario invece di usare if else
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Incrementa</button>
            <button onClick={decrement}>Decrementa</button>
            <button onClick={reset}>Resetta</button>
        </div>
    )
}

export default Counter