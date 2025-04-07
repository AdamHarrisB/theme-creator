import AdamColorInput from "./Adam ColorInput";
import { uid } from "uid";

//1. create a component that creates a color form
//2. make the component dynamic
//3. it needs to have an input element

export default function AdamColorForm({
    onSubmitColor}) {
    const defaultFormData = { role: "Enter role", hex: "#000000", contrastText: "#000000"};
    function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor({ ...data, id: uid() });
    event.target.reset();
    event.target.role.focus();
  }


  return(
  <div>
          <h2>Add a Color</h2>
          <form id="colorForm" onSubmit={handleSubmit}>
            <span id="roleInfo">
                <label className="colorLabel" htmlFor="newRole">Role: </label>
                <input className="colorInput" id="newRole" type="text" defaultValue={defaultFormData.role}></input>
            </span>
            <span className="colorBar">
                <label className="colorLabel" htmlFor="newHex">Hex: </label>
                <AdamColorInput id="hex" defaultValue={defaultFormData.hex} />
                
            </span>
            <span className="colorBar">
                <label className="colorLabel" htmlFor="newContrast">Contrast: </label>
                <AdamColorInput id="contrastText" defaultValue={defaultFormData.contrastText} />
            </span>
            <button type="submit" form="colorForm" value="Submit" data-js="addColor">Add Color</button>
          </form>
        </div>);}

