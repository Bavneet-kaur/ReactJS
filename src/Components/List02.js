import React from "react";
import List03 from "./List03";

function List02() {
  const fruits = [
    {
      name: "apple",
      color: "red",
    },
    {
      name: "pear",
      color: "green",
    },
    {
      name: "strawberry",
      color: "pink",
    },
  ];
  const fruitsList = fruits.map((fruits) => (
    <List03 key = {fruits.name} fruits = "fruits" />
  ));
  return <div>{fruitsList}</div>;
}

export default List02;