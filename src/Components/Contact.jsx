import React,{useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Contact() {
  const [name, setname]= setstate()
  const navigate = useNavigate()

  
}

function Contact() {
  return (

    <>
    <h1>
      Contact
    </h1>
    <form>
        <input type="text" placeholder="Your Name" style={CSS}/>
    </form>
      
    </>
    
    
  )
}

export default Contact