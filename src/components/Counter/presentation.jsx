import React from 'react'

const Counter = ({
    counter,
    add,
    reset
}) => (
    <div>
        <h2>Counter</h2>
        <p>counter = {counter.value}</p>
        <p>{counter.message}</p>
        <button onClick={() => add(1)}>+1</button>
        <button onClick={() => add(-1)}>-1</button>
        <button onClick={() => reset()}>reset</button>
    </div>
)

export default Counter