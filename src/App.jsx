import React,{useState} from "react";
import './App.css'

function App(){

  const [formData, setFormData] = useState({
    text:'',
    checkbox: false,
    radio:'',
    select:''
  });

  const handleChange = (e) => {

  };

  return(
    <div className="form-container">
      <h1>Form Example</h1>
      <form>
        {/* Text Input */}
        <div className="form-field">
          <label>Text:</label>
          <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}>
          </input>
  

        </div>
        {/* Checkbox */}
        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}>
            </input>
            Checkbox
          </label>
        </div>
        
          
        {/* Radio Buttons */}
        <div className="form-field">
        <label>Radio:</label>
        
        <label>
        <input
          type="radio"
          name="radio"
          value='option1'
          value={formData.radio === 'option1'}
          onChange={handleChange}>
        </input>
        Option 1
        </label>

        <label>
        <input
          type="radio"
          name="radio"
          value='option2'
          value={formData.radio === 'option2'}
          onChange={handleChange}>
        </input>
        Option 2
        </label>


        {/* Dropdown */}
        <div className="form-field">
          <label>Select:</label>
          <select>
            name="select"
            value={formData.select}
            onChange={handleChange}
            <option value="">--choose an option--</option>
            <option value="Option1">--option1--</option>
            <option value="option2">--option2--</option>

          </select>

        </div> 
        </div>
      </form>
    </div>
  );
}

export default App;