import React, { useState } from 'react';
import '../DarkMode/DarkMode.css';

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme}>
        {isDarkMode ? '🌙' : '☀️'} 
      </button>
    </div>
  );
};

export default DarkMode;
