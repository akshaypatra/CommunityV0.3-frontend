import React,{useState} from 'react'
import { SlMenu } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <nav className='Navbar'>
        
        <ul className={`Navbar-list ${menuOpen ? 'show' : ''}`}>
            <li className='nav-header'>CollegeCommunity</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/connect'>Connect</Link></li>
            <li><Link to='/notefusion'>NoteFusion</Link></li>
            <li><Link to='/profile'>Profile</Link></li>

        </ul>
        <div className='nav-buttons'>
            <button className="menu-toggle" onClick={toggleMenu}><SlMenu /></button>
            <button className='Signup-button'><Link to="/signup" >SignUp</Link></button>
            <button className='Login-button'><Link to="/login" >Login</Link></button>
        </div>
    </nav>
  )
}
