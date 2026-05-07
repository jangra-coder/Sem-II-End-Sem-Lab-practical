import React from 'react'
import './App.css'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<> <HomePage /></>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App