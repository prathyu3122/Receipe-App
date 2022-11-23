import React from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';


export default function NavBar() {
    return (

        // Navigation Bar links are taken
        <div>
            <ul className="navigation-container">
                <NavLink>
                    <li><Link to="/adddishes">Add Dishes</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li> 
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signin">Sign up</Link></li>
                </NavLink>
            </ul>
        </div>
    )
}
