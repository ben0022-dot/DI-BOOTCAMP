import React, { useState, useEffect } from 'react';
import quotesData from './quotes.json';  // Download from https://github.com/devtlv/RandomQuotesProject-JSBOOTCAMP-Week8Day5
import './App.css';

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#F8C471'
];

function App() {
  const [quote, setQuote] = useState({});
  const [prevIndex, setPrevIndex] = useState(null);
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    getNewQuote();
  }, []);

  const getRandomIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotesData.length);
    } while (newIndex === prevIndex);
    return newIndex;
  };

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const getNewQuote = () => {
    const index = getRandomIndex();
    const randomColor = getRandomColor();
    setQuote(quotesData[index]);
    setPrevIndex(index);
    setBgColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="quote-box" style={{ color: bgColor, borderColor: bgColor }}>
        <h1 className="quote-text">"{quote.quote}"</h1>
        <p className="author">- {quote.author}</p>
        <button 
          className="new-quote-btn" 
          style={{ backgroundColor: bgColor }}
          onClick={getNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;

//