import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li><Link to="/" className=' link active'>בית</Link></li>
        <li><Link to="#" className='link' >אודות</Link></li>
      </ul>
      
    </nav>
  )
}

export default Navbar