import React from 'react'

function InputComponent({ value, onChange }) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-4 py-2 rounded"
        placeholder="Type something..."
      />
    );
  }
  
  export default InputComponent;
  