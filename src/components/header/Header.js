import React from 'react'
import '../header/header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link style={{textDecoration:"none"}}  to="/">
                <h1 style={{color:"greenyellow"}}>Movies</h1>
            </Link>
            <Link style={{textDecoration:"none"}} to="/movies/popular">
               <span>Popular</span>
            </Link>
            <Link style={{textDecoration:"none"}} to="/movies/top_rated">
                <span>Best Movies</span>
            </Link>
            <Link style={{textDecoration:"none"}} to="/movies/upcoming">
               <span> Coming </span>
            </Link>
        </div>
    </div>
  )
}

export default Header