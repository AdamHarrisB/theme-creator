import AdamColorInput from "./Adam ColorInput";

//1. create a component that creates a color form
//2. make the component dynamic
//3. it needs to have an input element

export default function AdamColorForm({
    onSubmitColor,
    initialData = { role: "Enter role", hex: "#HEX", contrastText: "#HEX"},
}){ function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Button works!");
    onSubmitColor(data);
}
  return(
  <div>
          <h2>Add a Color</h2>
          <form id="colorForm" onSubmit={handleSubmit}>
            <span id="roleInfo">
                <label className="colorLabel" htmlFor="newRole">Role: </label>
                <input className="colorInput" id="newRole" type="text" defaultValue={initialData.role}></input>
            </span>
            <span className="colorBar">
                <label className="colorLabel" htmlFor="newHex">Hex: </label>
                <AdamColorInput id="hex" defaultValue={initialData.hex} />
                
            </span>
            <span className="colorBar">
                <label className="colorLabel" htmlFor="newContrast">Contrast: </label>
                <AdamColorInput id="contrastText" defaultValue={initialData.contrastText} />
            </span>
            <button type="submit" form="colorForm" value="Submit" data-js="addColor">Add Color</button>
          </form>
        </div>);}

