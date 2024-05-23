import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuopen, setisMobileMenuOpen] = useState(false);
    const handleMobileMenu = () => {
        // this will make false
        setisMobileMenuOpen(!isMobileMenuopen);
    }
    return (
        <nav className=" bg-[#272727] w-[100%] overflow-didden p-4">
            <div className=" mx-0 flex justify-between items-center">
                <div className="text-white text-2xl font-semibold ml-4">
                    <Link to={"/"}>XpenseTracker</Link>
                </div>
                <div className="hidden md:flex space-x-7">
                    <Link to={"/"} className="text-white text-xl hover:text-red-700">HOME</Link>

                    <Link to={"/about"} className="text-white text-xl hover:text-red-700">ABOUT US</Link>

                    <Link to={"/contact"} className="text-white text-xl hover:text-red-700">CONTACT</Link>
                </div>
                <div className="text-white mr-4">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <Link to={"/login"}>LOGIN</Link>
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={handleMobileMenu} className="text-white outline-none mobile-menu-button">
                        {/* for the first svg when isMobileMenuopen is false */}
                        <svg
                            className={`w-6 h-6 ${!isMobileMenuopen ? 'block' : 'hidden'} `}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>

                        {/* for the first svg when isMobileMenuopen is ftrue */}
                        <svg className={`w-6 h-6 ${isMobileMenuopen ? 'block' : 'hidden'} text-red-500" `}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`mobile-menu ${isMobileMenuopen ? 'block' : 'hidden'} transition-opacity ease-in duration-150  md:hidden `}  >
                <ul className="">
                    <li className="active">
                        <Link to={"/"} className="block px-2 py-4 text-white text-xl hover:text-red-500 ">HOME</Link></li>

                    <li>
                        <Link to={"/about"} className="block px-2 py-4 text-white text-xl hover:text-red-500">ABOUT US</Link></li>

                    <li>
                        <Link to={"/contact"} className="block px-2 py-4 text-white text-xl hover:text-red-500">CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
