import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
           <nav className='navbar sticky-top'>
               <h3 className='logo'>SK SAW</h3>
               <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick={()=> setIsMobile(false)}               
               >
                   <Link to='/' className='home'>Home</Link>
                   <Link to='/blogs' className='blogs'>Blogs</Link>
                   <Link to='/aboutus' className='aboutus'>About</Link>
                   <Link to='/dashboard' className='dashboard'>Dashboard</Link>
                   <Link to='/login' className='login'>Login</Link>
               </ul>
               <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? (<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>)
                        :
                        (<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>)}

                </button>
           </nav>
           <Outlet />
        </>
    );
};

export default Header;