import React from 'react'

function ProfileCard() {
  return (
    <div className='m-6'>
      <div className='max-w-3xl w-full bg-lime-200 px-4 py-8 rounded-xl text-lg'>
        <h1>Name:  Bavneet Kaur</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex maiores tempora!</p>
        <button className='px-5 py-1 text-lg text-center rounded-full bg-lime-900 text-white mt-6 hover:bg-lime-700 transition-all duration-300'>
          Follow
        </button>

      </div>
    </div>
  )
}

export default ProfileCard
