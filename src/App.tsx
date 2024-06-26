import { useState } from "react";
import './App.css'



function App() {
  const [hexColor, setHexColor] = useState(`${'#'}`);
  const [rgbColor, setRgbColor] = useState("Введите цвет");
  const [error, setError] = useState('')

  const convertHexToRgb = () => {
   
    let hex = hexColor.replace("#", "");
    
    
    let red = parseInt(hex.substring(0, 2), 16);
    let green = parseInt(hex.substring(2, 4), 16);
    let blue = parseInt(hex.substring(4, 6), 16);

   
    setRgbColor(`RGB(${red}, ${green}, ${blue})`);
  };



const validate = (e) => {

  setHexColor(e.target.value)

  const result = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i;
  if (e.target.value.length < 7 ) {
    setRgbColor("")
    setError('введите цвет')
    return error
  }
  if (!result.test(e.target.value)) {
    setRgbColor("")
    setError('Ошибка');
    return error;
  } else {
    setError('');
    return error;
  }
  
}
  return (
    <div className="container"
    style={{ backgroundColor: rgbColor }}>
   
   
    
      <input
        type="text"
        id="hexColorInput"
        className="hex-color-input"
        value={hexColor}
        onChange={validate}
        onInput={convertHexToRgb}
      />
      <div className="result">
      <label className="label">{(!error) ? rgbColor : error}</label>
      </div>
    </div>
  );

}
export default App

