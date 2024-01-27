import React from 'react'

function ParentChildComp(props) {
  return (
    <div>
      <button onClick = {() => props.greetHandler('Bavneet')}>Greet Parent</button>
    </div>
  )
}

export default ParentChildComp