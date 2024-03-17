import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    const navLinkClass = isActive =>
        isActive
            ? 'text-yellow-400 border-b-yellow-400 border-b pb-2 transition duration-300 ease-in-out'
            : 'text-white transition duration-300 ease-in-out';


    return (
        <div className="flex justify-between py-2 px-48 bg-black items-center">

            <div className="logo">
                <img src="/public/loog.png" className='h-24' />
            </div>

            <div>
                <nav className='flex gap-8 '>
                    <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>Home</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => navLinkClass(isActive)}>Statistics</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => navLinkClass(isActive)}>Blog</NavLink>

                </nav>
            </div>


        </div >
    );
};

export default Header;