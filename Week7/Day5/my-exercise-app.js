import React from 'react';

const Garage = (props) => {
    return (
        <p>Who lives in my {props.size} Garage?</p>
    );
};

export default Garage;

//car.js
import React, { useState } from 'react';
import Garage from './Garage';

const Car = (props) => {
    // Part II: useState Hook
    const [color, setColor] = useState("red");

    return (
        <header>
            <h1>This car is {color} {props.carInfo.model}</h1>
            {/* Part III: Garage */}
            <Garage size="small" />
        </header>
    );
};

export default Car;

//event.js
import React, { useState } from 'react';

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // Part I: clickMe function
    const clickMe = () => {
        alert('I was clicked');
    };

    // Part II: handleKeyDown function
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${event.target.value}`);
        }
    };

    // Part III: toggle function
    const toggleState = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>Exercise 2: Events</h2>
            {/* Part I */}
            <button onClick={clickMe}>Click Me</button>
            <br /><br />

            {/* Part II */}
            <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter key..." />
            <br /><br />

            {/* Part III */}
            <button onClick={toggleState}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default Events;

//phone .js
import React, { useState } from 'react';

const Phone = () => {
    // Part I: State variables
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState(2020);

    // Part II: changeColor function
    const changeColor = () => {
        setColor("blue");
    };

    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>Exercise 3: Phone</h2>
            <p>My phone is a <strong>{brand}</strong></p>
            <p>It is a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Phone;

//color.js
import React, { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    // useEffect is called after the component is rendered
    useEffect(() => {
        alert("useEffect reached");
    }, []); // Empty dependency array means it runs only on mount

    const changeToBlue = () => {
        setFavoriteColor("blue");
    };

    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>Exercise 4: useEffect</h2>
            <h1>My Favorite Color is <em>{favoriteColor}</em></h1>
            <button onClick={changeToBlue}>Change to Blue</button>
        </div>
    );
};

export default Color;

//app.js
import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  // Exercise 1: Object for car component
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      {/* Exercise 1 */}
      <Car carInfo={carinfo} />
      <hr />

      {/* Exercise 2 */}
      <Events />
      <hr />

      {/* Exercise 3 */}
      <Phone />
      <hr />

      {/* Exercise 4 */}
      <Color />
    </div>
  );
}

export default App;

