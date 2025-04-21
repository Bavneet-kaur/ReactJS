import React, { useState } from 'react';

function Likes() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked); // toggle between true and false
  };

  return (
    <div className='ml-6 flex items-center space-x-6'>
      <button
        className='border-2 border-gray-300 px-4 py-2 rounded transition hover:bg-gray-100'
        onClick={handleLike}
      >
        {liked ? '❤️ Liked' : '🩶 Like'}
      </button>
    </div>
  );
}

export default Likes;
