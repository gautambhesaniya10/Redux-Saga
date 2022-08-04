import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const chnageHandler = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={chnageHandler}>Update</button>
        </>
    )
}

export default Counter