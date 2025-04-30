import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]) //? if count varibale is not here, then it would not have done/perform calculations
    return (
        <div className='inline-flex items-center justify-between text-lg'>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)} className='bg-lime-500 text-white text-center text-3xl m-6 font-bold px-3 py-1'>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    )
}

export default Effect
