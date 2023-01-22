import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Connect from './components/Connect/Connect'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Connect/>
      <Footer/>
    </>
  );
}

export default App;
