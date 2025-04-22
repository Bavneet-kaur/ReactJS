import React from 'react'

function DisplayComponent({ value }) {
    return <p className="text-lg mt-4">You typed: <strong>{value}</strong></p>;
  }
  
  export default DisplayComponent;
  