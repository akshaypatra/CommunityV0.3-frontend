import React,{useState} from 'react'
import { SlMenu } from "react-icons/sl";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <nav className='Navbar'>
        
        <ul className={`Navbar-list ${menuOpen ? 'show' : ''}`}>
            <li>CollegeCommunity</li>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Connect</a></li>
            <li><a href='/'>NoteFusion</a></li>

        </ul>
        <div className='nav-buttons'>
            <button className="menu-toggle" onClick={toggleMenu}><SlMenu /></button>
            <button className='Signup-button'>SignUp</button>
            <button className='Login-button'>Login</button>
        </div>
    </nav>
  )
}
