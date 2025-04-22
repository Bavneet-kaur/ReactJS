// Signup.js
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Name: ${name}\nEmail: ${email}`);
    // You can also send this data to an API here
  };

  return (
    <form onSubmit={handleSubmit} className="m-6 space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-semibold">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Enter your email"
        />
      </div>

      <button
        type="submit"
        className="bg-lime-700 text-white px-4 py-2 rounded hover:bg-lime-900 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
