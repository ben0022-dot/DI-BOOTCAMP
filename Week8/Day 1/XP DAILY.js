import React, { useState } from 'react';
import FormComponent from './FormComponent';

function App() {
  // Initialize state for all form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
    nutsFree: false,
    vegan: false
  });

  // handleChange function as per instructions
  const handleChange = (event) => {
    // Destructure properties from event.target
    const { name, value, type, checked } = event.target;

    // Use ternary operator to check status of checkboxes
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue
    }));
  };

  return (
    <div className="container">
      {/* Pass state and handler to child component */}
      <FormComponent 
        data={formData} 
        handleChange={handleChange} 
      />
    </div>
  );
}

export default App;


import React from 'react';

function FormComponent(props) {
  return (
    <main>
      <form method="GET">
        {/* Text Inputs */}
        <input 
          type="text" 
          name="firstName" 
          value={props.data.firstName} 
          onChange={props.handleChange} 
          placeholder="First Name"
        />
        <br />
        
        <input 
          type="text" 
          name="lastName" 
          value={props.data.lastName} 
          onChange={props.handleChange} 
          placeholder="Last Name"
        />
        <br />

        <input 
          type="number" 
          name="age" 
          value={props.data.age} 
          onChange={props.handleChange} 
          placeholder="Age"
        />
        <br />

        {/* Radio Inputs for Gender */}
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <br />

        {/* Select for Destination */}
        <label>Destination:
          <select 
            name="destination" 
            value={props.data.destination} 
            onChange={props.handleChange}
          >
            <option value="">-- Choose Destination --</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="USA">USA</option>
          </select>
        </label>
        <br />

        {/* Checkboxes for Dietary Restrictions */}
        <label>
          <input 
            type="checkbox" 
            name="lactoseFree" 
            checked={props.data.lactoseFree} 
            onChange={props.handleChange} 
          /> Lactose Free
        </label>
        <br />
        
        <label>
          <input 
            type="checkbox" 
            name="nutsFree" 
            checked={props.data.nutsFree} 
            onChange={props.handleChange} 
          /> Nuts Free
        </label>
        <br />
        
        <label>
          <input 
            type="checkbox" 
            name="vegan" 
            checked={props.data.vegan} 
            onChange={props.handleChange} 
          /> Vegan
        </label>
        <br />

        {/* Submit Button */}
        <button>Submit</button>
      </form>

      <hr />
      
      {/* Display Entered Information */}
      <h2>Entered information:</h2>
      <p><strong>First Name:</strong> {props.data.firstName}</p>
      <p><strong>Last Name:</strong> {props.data.lastName}</p>
      <p><strong>Age:</strong> {props.data.age}</p>
      <p><strong>Gender:</strong> {props.data.gender}</p>
      <p><strong>Destination:</strong> {props.data.destination}</p>
      <p><strong>Dietary Restrictions:</strong></p>
      <ul>
        <li>Lactose Free: {props.data.lactoseFree ? "Yes" : "No"}</li>
        <li>Nuts Free: {props.data.nutsFree ? "Yes" : "No"}</li>
        <li>Vegan: {props.data.vegan ? "Yes" : "No"}</li>
      </ul>
    </main>
  );
}

export default FormComponent;