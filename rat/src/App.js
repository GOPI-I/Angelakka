import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import gsap, { Power3 } from 'gsap';

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null)

  useEffect(() => {
    gsap.to(logoItem.current, {
      opacity: 1,
      y: -20,
      duration: 0.1,
      ease: Power3.easeOut,
    });
    gsap.to(textItem.current, {
      opacity: 1,
      y: -20,
      duration: 2,
      ease: Power3.easeOut,
      delay : .4
    });
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={logoItem}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p ref={textItem}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
