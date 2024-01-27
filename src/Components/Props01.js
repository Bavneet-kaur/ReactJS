import React from "react";

/**
 ** using props with functional components
 */

/*by default we use props keyword but we can use any word */
function Car(props) {
  //props used as an argument
  return (
    /* round braces are required to write HTML in multiple lines while using JSX */
    <div> {/*instead of div we can also use fragments '<> </>' */}
      {/**top element are neccessary while using JSX */}
      <h3>
        {/* always use "{}" braces for getting props values */}
        I have{props.name} whose model is {props.model}
      </h3>
      {props.children}
    </div>
  );
}

export default Car;
