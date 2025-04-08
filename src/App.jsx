import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import AdamColorForm from "./AdamColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleCreateColor(newColor) {
    setColors([newColor, ...colors]);
  }
  const handleRemoveColor = (id)
  return (
    <>
      <h1>Theme Creator</h1>
      <AdamColorForm onSubmitColor={handleCreateColor}/>
      {colors.map((color) => {
        <Color key={color.id} color={color} onDelete={() => handleRemoveColor(color.id)} />
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