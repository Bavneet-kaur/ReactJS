import React from 'react';

function Child({ handleClick }) {
  return (
    <button 
      onClick={handleClick}
      className="px-3 py-2 bg-lime-500 text-lg text-white rounded-xl hover:bg-lime-700"
    >
      Click me
    </button>
  );
}

export default Child;
