import './styles/App.css';
import React, { useEffect } from "react";

// Importning components
import Loader from './components/loader';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  useEffect(() => {
    setTimeout(() => {
      const load_screen = document.querySelector('.globload');
      load_screen.style.display = 'none';
    }, 2000);
  }, []);

  return (
    <div className="App" id="main-app">
      <Loader/>
      <Hero>
        <Navbar />
      </Hero>
    </div>
  );
}

export default App;
