import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="links">
        <li><Link to="/" className='link active'>בית</Link></li>
        <li><Link to="#" className='link' >אודות</Link></li>
        <li><Link to="#" className='link' >דפי צביעה</Link></li>

      </ul>
      
    </nav>
  )
}

export default Navbar