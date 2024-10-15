import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Fotter from './Fotter';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, LogOut } = useContext(UserContext);


    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const logOut = () => {
        if (user) {
            LogOut();
        }
    }

    return (
        <>
        <nav className="top-0 w-full border-b bg-white backdrop-blur-xl">
        <div className="mx-auto max-w-screen-2xl px-3  lg:px-5 lg:pl-3">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
            <div className="flex items-center justify-start rtl:justify-end">
                <button onClick={toggleNav} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-400 focus:outline-none">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <Link to="/" className="flex items-center ms-2 md:me-24" >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="27" viewBox="0 0 48 48">
                    <path fill="#42A5F5" d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"></path><path fill="#42A5F5" d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"></path><path fill="#1E88E5" d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"></path>
                </svg>
                
                <h2 className="font-semibold text-xl">
                    Apple
                    <span className="text-blue-500"> Store</span>
                </h2>
                </Link>
            </div>
            <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li>
                    <Link to="/" onClick={toggleNav} className="block py-2 items-center text-gray-900 hover:text-gray-600">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={toggleNav} className="block py-2 items-center text-gray-900 hover:text-gray-600">
                    Products
                    </Link>
                </li>
                {user ?
                    <>
                     
                    <li>
                        <Link to="/" onClick={logOut} className="block py-2 items-center text-gray-900 hover:text-gray-600">
                        Logout
                        </Link>
                    </li>
                    </> :
                    <>
                    <li>
                        <Link to="/login" onClick={toggleNav} className="block py-2 items-center text-gray-900 hover:text-gray-600">
                        Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" onClick={toggleNav} className="block py-2 items-center text-gray-900 hover:text-gray-600">
                        Signup
                        </Link>
                    </li>
                    </>
                }
               
                </ul>
            </div>
            <div className={`flex space-x-2 items-center pt-4 md:pt-0 md:flex ${isOpen ? 'block' : 'hidden'}`}>
                {user?
                <>
                <Link to="/checkout" className="block py-2 items-center text-gray-800 hover:text-">
                <svg className="size-7" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="shopping-bag">
                    <g>
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M25.8716,28.9377H8.0341c-1.0475,0-1.9292-0.7839-2.0519-1.8242L4.3781,13.7176
                    c-0.1448-1.2284,0.8149-2.308,2.0519-2.308h21.0458c1.237,0,2.1967,1.0796,2.0519,2.308l-1.6042,13.3959
                    C27.8008,28.1538,26.9191,28.9377,25.8716,28.9377z"></path>
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M11.3279,15.4096v-6.515c0-3.1066,2.5184-5.625,5.625-5.625h0c3.1066,0,5.625,2.5184,5.625,5.625v6.515"></path>
                    </g>
                </svg>
                </Link>
                <div className="flex items-center bg-gray-500 rounded-full w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                </div>
                <span className="text-sm font-medium ml-2">
                    {user.name}
                    <p className="text-sm font-normal">{user.email}</p>
                </span>
                </> : 
                <span className="text-slate-800 font-medium">
                    Not Logged In
                </span>
                }
                
            </div>
        </div>

        
        </div>
        </nav>

        <Outlet/>
        <Fotter />
    </>
    );
};

export default Layout;
