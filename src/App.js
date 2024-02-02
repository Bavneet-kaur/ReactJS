import "./App.css";
import FuncComp from "./Components/FuncComp"; //imported 'FuncComp.js'component
import ClassComp from "./Components/ClassComp";
import WithJSX from "./Components/WithJSX";
import WithoutJSX from "./Components/WithoutJSX";
import Props01 from "./Components/Props01";
import CarGarage from "./Components/Props02";
import Message from "./Components/State02";
import Counter from "./Components/State01";
import FuncClick from "./Components/FuncClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComp from "./Components/ParentComp";
import CondClass from "./Components/CondClass.js";
import List01 from "./Components/List01.js";
import List02 from "./Components/List02.js";
import Stylesheets from "./Components/Stylesheets.js";
import Forms from "./Components/Forms.js";

function App() {
  return (
    <div className="App">
      {/* <h1>BAVNEET KAUR</h1> */}
      {/* to use the function 'FunComp' we simply call it by self closing html tag
      (if there is no content between them)*/}
      {/* <FuncComp name = "Destructing" control = "self"/>
      <ClassComp />
      <WithJSX />
      <WithoutJSX />
      <Props01 name="Merc" model="Mustang">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          corporis odio reiciendis. Numquam illum nulla dolor, excepturi
          voluptate expedita enim!
        </p>
      </Props01>
      <Props01 name="BMW" model="Gran Coupe" /> {/* props used as an attribute */}
      {/*<CarGarage color ="red"/>
      <Message/>
      <Counter/>
      <FuncClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComp/>
      <CondClass/> */}
      {/* <List01/>
      <List02/> */}
      {/*<Stylesheets primary = {false}/>*/} {/**o/p will be in 'black' */}
      {/**<Stylesheets primary = {true}/>*/} {/**o/p will be in 'orange' */}
      <Forms />
    </div>
  );
}

export default App;
