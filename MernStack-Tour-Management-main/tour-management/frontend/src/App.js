import React, { useEffect, useState } from 'react';
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Layout from "./components/Layout/Layout";

function App() {
  // Retrieve the current theme from localStorage or default to 'light'
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  // Update the theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      {/* Pass the theme and setTheme to Navbar for theme switching */}
      <Navbar theme={theme} setTheme={setTheme} />
      <div>
        <Layout />
      </div>
    </div>
  );
}

export default App;
