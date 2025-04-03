import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from './ColorForm'
import "./App.css";
import { Fragment } from "react";

function App()  
    {initialColors.map((color) => {
      return
      <fragment>
      <ColorForm />;
      <Color key={color.id} color={color} />;
      </fragment>:
    }
  );
}


export default App;


//imports the array of objects in colors.js and the function color in jsx

/* 
TASK: 
Map color cards for each color in the theme. 
That is done here.
*/

/*<>
<h1>Theme Creator</h1>
<div>
  <h2>Add a Color</h2>
  <form id="colorForm">
    <span id="roleInfo"><label className="colorLabel" htmlFor="newRole">Role: </label>
    <input className="colorInput" id="newRole" type="text" placeholder="Enter Role"></input></span>
    <span className="colorBar"><label className="colorLabel" htmlFor="newHex">Hex: </label>
    <input className="colorInput" id="newHex" placeholder="Enter Hex Code"></input>
    <input className="colorInput" id="colorNewHex" type="color"></input></span>
    <span className="colorBar"><label className="colorLabel" htmlFor="newContrast">Contrast: </label>
    <input className="colorInput" id="newContrast" placeholder="Enter Hex Code"></input>
    <input className="colorInput" id="colorNewContrast" type="color"></input></span>
  </form>
  <button type="submit" form="colorForm" value="Submit" data-js="addColor">Add Color</button>
</div>
)}
</>*/