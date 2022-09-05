
import React, { useState } from 'react';
// import { CustomLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Header.css';
import CustomLink from '../../../Components/CustomLink/CustomLink';
const Header = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <nav>
            <div class="drawer drawer-end">
                <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class="w-full navbar bg-primary text-white sticky top-0 z-50 mx-auto">
                        <div class="flex-none lg:hidden" >
                            <label for="nav-drawer" tabIndex='0' class="btn btn-square btn-ghost">
                                <FaIcons.FaBars />
                            </label>
                        </div>
                        <div class="flex-1 px-2 mx-2">SK SAW</div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                <li><CustomLink to='/' >Home</CustomLink></li>
                                <li><CustomLink to='/blogs' >Blogs</CustomLink></li>
                                <li><CustomLink to='/dashboard' >Dashboard</CustomLink></li>
                                <li><CustomLink to='/products' >All Products</CustomLink></li>
                                <li><CustomLink to='/login' >Login</CustomLink></li>
                                <li><CustomLink to='/logout' >Logout</CustomLink></li>
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="nav-drawer" class="drawer-overlay"> </label>
                    <ul onClick={() => setSidebar(!sidebar)} class="menu p-4 overflow-y-auto w-80 bg-primary text-white">
                        <li><CustomLink to='/' >Home</CustomLink></li>
                        <li><CustomLink to='/blogs' >Blogs</CustomLink></li>

                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  rounded-tr-xl rounded-tl-xl bg-primary text-white text-start">
                                Dashboard
                            </div>
                            <div className="collapse-content  rounded-br-xl rounded-bl-xl text-gray-300 ">
                                <ul>
                                    <li>
                                        <CustomLink to="/dashboard">My Orders</CustomLink>
                                    </li>
                                    <li>
                                        <CustomLink to="/dashboard/add-review" > Add A Review </CustomLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <li><CustomLink to='/login' >Login</CustomLink></li>
                        <li><CustomLink to='/products' >Add Products</CustomLink></li>
                        <li><CustomLink to='/logout' >Logout</CustomLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Header;