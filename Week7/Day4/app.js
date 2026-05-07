import React, { Component } from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise3 from './Exercise3';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

class App extends Component {
  render() {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;

    return (
      <div className="App">
        <header className="App-header">
          {/* Exercise 1: JSX */}
          <p>Hello World!</p>
          {myelement}
          <p>React is <strong>{sum}</strong> times better with JSX</p>

          {/* Exercise 2: Object */}
          <div className="user-info">
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <UserFavoriteAnimals favAnimals={user.favAnimals} />
          </div>

          {/* Exercise 3: HTML Tags + Styling */}
          <Exercise3 />
        </header>
      </div>
    );
  }
}

export default App;


//favorite animals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals } = this.props;
    
    return (
      <div className="favorite-animals">
        <h4>Favorite Animals:</h4>
        <ul>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;


//Exercise 3.js
import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div className="exercise-container">
        {/* PART I & II: Inline styles */}
        <h1 style={style_header}>Styled Header with Object</h1>
        
        {/* PART I: Various HTML tags */}
        <h2>Regular H2 Tag</h2>
        <p className="para">This paragraph uses CSS class styling</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React Documentation</a>
        
        <form>
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        
        <img 
          src="https://via.placeholder.com/200x100/4A90E2/FFFFFF?text=React" 
          alt="React Placeholder"
          style={{ borderRadius: '8px' }}
        />
        
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;



