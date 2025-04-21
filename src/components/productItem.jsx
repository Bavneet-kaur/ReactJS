// ProductItem.js
import React, { useState } from 'react';

function ProductItem({ name, price, image }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-lime-100 p-4 rounded-xl shadow-md w-72 text-center m-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700 mb-2">₹{price}</p>
      <button
        onClick={toggleLike}
        className="text-2xl hover:scale-110 transition-all"
      >
        {liked ? '❤️' : '🩶'}
      </button>
    </div>
  );
}

export default ProductItem;
