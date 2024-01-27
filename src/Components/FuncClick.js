import React from 'react'
/*Event Handling - functional components */

function FuncClick(){
    function clickHandler(){
        console.log('Great Hit!')
    }
    return (
      <div>
        <button onClick={clickHandler}> Functional click</button>
      </div>
    )
};

export default FuncClick