import React from 'react'
import Navbar from './component/Navbar/Navbar'
import './App.scss'
import Hero from './container/Hero/Hero'
import Work from './container/Work/Work'
import Skills from './container/Skills/Skills'
import Contact from './container/Contact/Contact'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}

export default App