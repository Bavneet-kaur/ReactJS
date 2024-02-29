import React from "react";

function Fragments() {
  return (
    //! <h1>Fragments Demo</h1>
    //! <p>Lorem ipsum dolor sit amet.</p>---> error: because JSX requires one parent element
    //? to solve this error we can use either "<> </> OR <React.Fragment></React.Fragment>" --fragments or "<div> </div>"
    //* we can use <div> tag inside fragments
    <React.Fragment>
      <h1>Fragments Demo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe!
      </p>
      <div>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          aperiam ad nam dolore! Quis ipsum voluptate, recusandae maiores nisi
          tempora a. Quod ab ut animi accusamus nisi. Quas laudantium
          praesentium minima veniam fugit quaerat deserunt? Modi similique odit
          placeat, laboriosam, voluptatum nemo, voluptatem quam magni veniam sed
          commodi quasi voluptas.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Fragments;
