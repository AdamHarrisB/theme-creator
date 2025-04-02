import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <div>
        <h2>Add a Color</h2>
        <form>
          <label htmlFor="newRole">Role</label>
          <input id="newRole" type="text"></input>
          <label htmlFor="newHex">Hex</label>
          <input id="newHex"></input>
          <input id="colorNewHex" type="color"></input>
          <label htmlFor="newContrast">Contrast Text</label>
          <input id="newContrast"></input>
          <button>Add Color</button>
        </form>
      </div>
    
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;

//imports the array of objects in colors.js and the function color in jsx

/* 
TASK: 
Map color cards for each color in the theme. 
That is done here.
*/