import React from "react";

function List01() {
  const fruits = ["apple", "grapes", "peaches"];

  const veggies = ["Beans", "Bell Pepper", "Lemon"];
  const veggiesList = veggies.map((veggies) => (
    <h2 style={{ color: "purple" }}>{veggies}</h2>
  ));

  /**
   * * if there is duplication of data --> const colors = ["red", "green", "red"]
   * ! error --> Encountered two children with the same key, `red`. 
   * !Keys should be unique so that components maintain their identity across updates.
   * ?to solve the this issue we add index as a parameter'map(colors,index) =>{}'in a arrow frunction and
   * ?pass it as a argument to the key --> 'key = {index}'
   * *you can even check the index value, index value begins with '0'
   */
  const colors = ["red", "green", "red"];

  return (
    <div>
      {/* first method of using 'map()' method  -- fruitsList*/}
      {
      fruits.map((fruits) => (<h2 style={{ color: "blueviolet" }}>{fruits}</h2>))
      }

      <hr style={{ color: "red", border: "4px dotted" }} />

      {/* second method of using 'map()' method -- veggiesList*/}
      <div>{veggiesList}</div>

      <hr style={{ color: "blue", border: "4px dotted" }} />

      {/* keys and indexes  -- colorList*/}
      <div>
        {colors.map((colors, index) => (
          <h2 key={index}  style={{ color: "violet" }}>
            {index}-{colors}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default List01;
