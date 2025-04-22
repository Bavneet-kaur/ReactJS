import React, { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="m-6">
      <h2 className="text-xl font-semibold">
        {isLoggedIn ? "Welcome, User!" : "Please log in"}
      </h2>
      <button
        onClick={toggleLogin}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
