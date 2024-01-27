// functionalTest component
import React from "react";

/**function FuncComp() {
 * return <h3>Guys this is the first component</h3>;
 * }*/

// using arrow functions -precised version of normal function
const FuncComp = (props) => {
  const { name, control } = props;
  return (
    <div>
      <h3 style={{ color: "red" }}>Functional Component</h3>
      {/*normal use of props*/}
      {/*<h3 style={{ color: "green" }}>{props.name} Functional Component</h3>*/}
      {/* first way -- destructed props '{name, control}' */}
      {/* <h3 style={{ color: "blue" }}>{name} Functional Component - {control}</h3>; */}
      {/* second way -- destructed props 'const{name, control} = props' */}
      <h3 style={{ color: "purple" }}>
        {name} Functional Component - {control}
      </h3>
    </div>
  );
};

/*this will function won't render HTML(JSX) because Greets.js has no connection 
with application, to do the same we will export default 'Greets.js' and import it in 'App.js'*/
export default FuncComp;
