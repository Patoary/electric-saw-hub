
import React, { useState } from 'react';
// import { CustomLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Header.css';
import CustomLink from '../../../Components/CustomLink/CustomLink';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <nav>
            <div class="drawer drawer-end">
                <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class="w-full navbar bg-primary text-white sticky top-0 z-50 mx-auto m-0">
                        <div class="flex-none lg:hidden" >
                            <label for="nav-drawer" tabIndex='0' class="btn btn-square btn-ghost">
                                <FaIcons.FaBars />
                            </label>
                        </div>
                        <div class="flex-1 px-5 font-bold text-2xl text-secondary">SK SAW</div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                <li><CustomLink to='/' >Home</CustomLink></li>
                                <li><CustomLink to='/blogs' >Blogs</CustomLink></li>
                                <li><CustomLink to='/products' >All Products</CustomLink></li>

                                {
                                    user && <li><CustomLink to='/dashboard' >Dashboard</CustomLink></li>
                                }

                                <li>{user ? <button onClick={logout}>Logout</button> : <CustomLink to='/login'>Login</CustomLink>}</li>
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

                        {
                            user
                            &&
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
                        }
                        <li><CustomLink to='/products' >Add Products</CustomLink></li>

                        <li>{user ? <button onClick={logout}>Logout</button> : <CustomLink to='/login'>Login</CustomLink>}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Header;