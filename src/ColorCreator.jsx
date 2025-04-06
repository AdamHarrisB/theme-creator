import { useState } from 'react';
import ColorForm from './ColorForm';

function ColorCreator() {
    const [colors, setColors] = useState([]);  
    const handleSubmitColor = (colorData) => {
      // Add the new color data to the colors array
      setColors((prevColors) => [...prevColors, colorData]);
    };
  
    return (
      <div>
        <ColorForm onSubmitColor={handleSubmitColor} />
  
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{
                backgroundColor: color.hex,
                color: color.contrastText,
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <p>{color.role}</p>
              <p>{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ColorCreator;