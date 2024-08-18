import React,{useState} from 'react'
import { SlMenu } from "react-icons/sl";
import { Link,useNavigate } from 'react-router-dom';

export default function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove the token
        props.showAlert('Logged Out successfully','success');
        navigate('/login'); // Redirect to login page
    };

    const isLoggedIn = !!localStorage.getItem('authToken');

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
                {!isLoggedIn ? (
                    <>
                        <button className='Signup-button'><Link to="/signup">SignUp</Link></button>
                        <button className='Login-button'><Link to="/login">Login</Link></button>
                    </>
                ) : (
                    <button className='Logout-button' onClick={handleLogout}>Logout</button>
                )}
        </div>
    </nav>
  )
}
