import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import HamburgerMenu from './HamburgerMenu';


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='logo_container'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='menu'>
                    <ul className='menu_list'>
                        <li>
                            <Link to="#">Platform</Link>
                        </li>
                        <li>
                            <Link to="#">Advantages</Link>
                        </li>
                        <li>
                            <Link to="#">News & Resources</Link>
                        </li>
                        <li>
                            <Link to="#">Request for Demo</Link>
                        </li>
                        <button>Login</button>
                    </ul>
                </div>
                <HamburgerMenu />
            </div>
        </>
    )
}

export default Header