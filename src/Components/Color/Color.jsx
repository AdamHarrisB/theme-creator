import "./Color.css";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
    </div>
  );
}

//function creates the "color-card" elements in the color and with text outlined in the array

/*
TASK: 
Set up a React component for displaying a single color card.
Display hex value, role and contrastText on each color card. 
Style color cards to accurately represent the colors.
Done here
*/