import React from 'react'
import {Link} from "react-router-dom";
import './style.css'


export default function MainNav() {
  return (
    
        <div className='nav-list'>
          <a><Link  to="/">Home</Link></a>   
          <a>  <Link to="/about">About</Link></a>
      

        </div>
           
    
  )
}
