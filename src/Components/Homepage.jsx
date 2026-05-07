import React from 'react'
import {Route, Routes} from 'react-router-dom'

import {Link, NavLink} from 'react-router-dom'

function Homepage() {
  return (
    <>
    <div>Homepage</div>
      <ul>
        <NavLink style={({isActive})=>({color:isActive? "red":"blue"})} to="/"><li>Home</li></NavLink>
        
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </>
  )
}

export default Homepage