import React, { useState, useRef, useEffect } from 'react';

const Refer = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <div className='p-2'>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='border-2  border-lime-500 mt-6'
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </div>
    );
};

export default Refer;
