import React from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Service from './components/Service';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Doctors from './components/Doctors';



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
        <div className="services">
          <Service/>
        </div>
        <div className="doctors">
          <Doctors/>
        </div>
        <div className="blog">
          <Blogs/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </main>
    </>
  )
}

export default App