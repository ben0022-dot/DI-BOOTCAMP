// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the Context
const ThemeContext = createContext();

// Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

//theme togglor.js
// src/ThemeToggler.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggler;

//theme provider.js
// src/App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import './App.css';

// A component that consumes the theme to apply styles
const Content = () => {
  const { theme } = useTheme();

  return (
    // Apply the theme as a class name to the div
    <div className={`app-container ${theme}`}>
      <h1>Current Theme: {theme}</h1>
      <p>This component changes style based on the context!</p>
      <ThemeToggler />
    </div>
  );
};

function App() {
  return (
    // Wrap the application in the Provider
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;


//character counter.js//
// src/CharacterCounter.js
import React, { useState, useRef, useEffect } from 'react';

const CharacterCounter = () => {
  // 1. Create a ref to attach to the input element
  const inputRef = useRef(null);

  // State to store the count so the UI updates when the number changes
  const [count, setCount] = useState(0);

  // 2. Event handler that listens for changes
  const handleInputChange = () => {
    // 3. Use the ref to access the current DOM node and get the value length
    const textLength = inputRef.current.value.length;
    setCount(textLength);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>Character Counter (using useRef)</h3>
      
      {/* Attach the ref to the input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something here..."
        onChange={handleInputChange} // Listen for input changes
        style={{ padding: '8px', fontSize: '16px' }}
      />
      
      <p style={{ marginTop: '10px' }}>
        Character Count: <strong>{count}</strong>
      </p>
    </div>
  );
};

export default CharacterCounter;

//app.js
// src/App.js
import React from 'react';
import CharacterCounter from './CharacterCounter';
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Character Counter App</h1>
      <CharacterCounter />
    </div>
  );
}
export default App;


