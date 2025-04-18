import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initial state is 0

  const increment = () => {
    setCount(count + 1); // Update the state
  };

  return (
    <div className='m-6 flex  item-center'>
      <p className='text-lg'>Count: {count}</p>&nbsp;
      <button className='px-5 py-1 text-lg text-center rounded-full bg-lime-900 text-white hover:bg-lime-700 transition-all duration-300'
        onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
