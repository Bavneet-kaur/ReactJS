import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='flex text-2xl items-center'>
      <p className='text-lime-600 '>Count: {state.count} &nbsp;</p>
      <button className='bg-lime-500 text-white text-center text-3xl font-bold px-3 py-1'onClick={() => dispatch({ type: 'increment' })}>Increment</button>&nbsp;
      <button className='bg-lime-500 text-white text-center text-3xl font-bold px-3 py-1' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Reduce;
