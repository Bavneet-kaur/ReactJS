import React, { useState } from 'react';
import InputComponent from './input';
import DisplayComponent from './display';


function ParentComponent() {
  const [text, setText] = useState("");

  return (
    <div className="m-6">
      <h2 className="text-xl font-bold mb-4">Lifting State Up</h2>
      <InputComponent value={text} onChange={setText} />
      <DisplayComponent value={text} />
    </div>
  );
}

export default ParentComponent;
