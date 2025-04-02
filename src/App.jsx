import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator also messing with this to see if it displays</h1>

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