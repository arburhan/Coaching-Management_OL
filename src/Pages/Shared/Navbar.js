import React from 'react';
import navbarImage from '../../Media/Images/shikho-logo.svg';

const Navbar = () => {
    const navtabs =
        <>
            <li><a>হোম </a></li>
            <li><a>কোর্স </a></li>
            <li tabIndex={0}>
                <a className="justify-between">লার্নিং
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className='z-10 bg-white' >
                    <li><a>অ্যানিমেটেড লেসনস</a></li>
                    <li><a>অনলাইন কোচিং</a></li>
                    <li><a>স্কিলস</a></li>
                </ul>
            </li>
            <li><a>উদ্যোক্তা </a></li>
            <li><a>ব্লগ </a></li>
            <li><a>বহুব্রীহি </a></li>
            <li><a>আমাদের সম্পর্কে</a> </li>
        </>;
    return (
        <nav>
            <div className="navbar text-black bg-white px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 hover:text-pink-600 ">
                            {navtabs}
                        </ul>
                    </div>
                    <img className='w-[120px] hover:text-pink-600' src={navbarImage} alt="dsf" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navtabs}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#233071] text-white text-[15px] hover:bg-pink-600 border-0">লগ ইন/সাইন আপ</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;