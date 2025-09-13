import React from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Service from './components/Service';



const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About/>
        </div>
        <div className="service">
          <Service/>
        </div>
      </main>
    </>
  )
}

export default App