import React from "react";
import "./Stylesheets.css";
import style from "./Stylesheets.module.css"

/**'styling' object  is created for inline styling*/
const styling = {
  fontSize: "34px",
  color: "blue",
};

function Stylesheets(props) {
  /**to apply css conditionally based on state or props */
  let className = props.primary ? "primary" : "";
  return (
    <div>
      {/**first method ---> CSS stylesheets*/}
      <div>
        <h1 className="secondary">Hi! I am working with CSS Stylesheets.</h1>
        <h2 className={className}>Hi! I am working with CSS Stylesheets.</h2>
        {/* to add multiple classes for styling */}
        <h3 className={`${className} font-xl`}>
        Hi! I am working with CSS Stylesheets.
        </h3>
      </div>

      {/**second method ---> inline styling  */}
      <div>
        <h1 style={{ color: "white", backgroundColor: "black" }}>
          First way --- I am doing inline styling
        </h1>
        <h1 style={styling}>Second Way --- I am doing inline styling</h1>
      </div>

      {/** third method ---> CSS modules */}
      {/* you need to import 'Stylesheets.module.css' in 'Stylesheets.js' component */}
      <div>
      <h1 className={style.bigblue}>I am working with CSS modules</h1>
      </div>
      
    </div>
  );
}

export default Stylesheets;
