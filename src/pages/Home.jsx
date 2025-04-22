// Home.jsx
import React from 'react';
import { Link, Links } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Home Page</h2>
      <nav className="mt-4 space-x-4">
        <Link to="/About" className="text-blue-500">About</Link>
        <Link to="/Contact" className="text-blue-500">Contact</Link>
      </nav>
    </div>
  );
}

export default Home;
