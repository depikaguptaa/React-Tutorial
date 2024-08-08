import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(1);

    useEffect(() => {
        // Run everytime when there is any changes in component
        console.log("Re-rendering: " + count);
        console.log("Re-rendering: " + input);
    }, [count, input]);

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{ input }</h1>
            <button onClick={() => setInput(input + 1)}>Increment</button>
        </div>
    )
}

export default Effect;