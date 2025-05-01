import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ number }) => {
  const calculateFactorial = (n) => {
    console.log('Calculating...');
    return n <= 0 ? 1 : n * calculateFactorial(n - 1);
  };

  const memoizedFactorial = useMemo(() => calculateFactorial(number), [number]);

  return <p>Factorial: {memoizedFactorial}</p>;
};

const Memo = () => {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <ExpensiveComponent number={number} />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
};

export default Memo;
