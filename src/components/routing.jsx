import { useNavigate } from "react-router-dom";
import React from 'react'

 export default function Routing() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return <button  className="bg-black px-6 py-2 text-white"onClick={goToHome}>Go Home</button>;
}
