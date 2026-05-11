import React, { useState } from 'react';

function App() {
  // 1. Initialize the state with the provided array of objects
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // 2. Create the function to increase votes
  const vote = (index) => {
    // We create a copy of the current state to avoid direct mutation
    const newLanguages = [...languages];
    // Increment the vote of the specific language clicked
    newLanguages[index].votes++;
    // Update the state with the new array
    setLanguages(newLanguages);
  };

  // --- JSX Styling ---
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    title: {
      color: '#333',
      fontSize: '2rem',
      marginBottom: '20px'
    },
    languageList: {
      width: '100%',
      maxWidth: '500px'
    },
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fffae6', // yellowish background like the demo
      border: '1px solid #ecc94b',
      padding: '15px 25px',
      margin: '10px 0',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    voteCount: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      flex: '0.2'
    },
    name: {
      fontSize: '1.2rem',
      fontWeight: '500',
      flex: '1',
      textAlign: 'left',
      paddingLeft: '20px'
    },
    button: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#2d3748',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      textDecoration: 'underline'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Vote Your Language!</h1>
      
      <div style={styles.languageList}>
        {languages.map((lang, index) => (
          <div key={index} style={styles.card}>
            {/* Display Vote Count */}
            <span style={styles.voteCount}>{lang.votes}</span>
            
            {/* Display Language Name */}
            <span style={styles.name}>{lang.name}</span>
            
            {/* Clickable Action to trigger vote function */}
            <button 
              style={styles.button} 
              onClick={() => vote(index)}
            >
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;