import React from 'react'
import './App.css'
import Homepage from './Components/Homepage'
import Contact from './Components/Contact'
import About from './Components/About'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App