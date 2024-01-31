import React from 'react'


// destructing props
function List03({fruits}) {
  return (
    <div>
      <h3>I have {fruits.name} and its color is {fruits.color}.</h3>
    </div>
  )
}

export default List03