import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../assets/twitterBW.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

function Home() {
  return (
    <div className="text-white min-h-screen bg-gradient-to-r from-white via-gray-200 to-white flex flex-col w-full">

      <div className="flex-grow flex flex-col justify-center items-center md:flex-row w-full p-4">

        <div className="md:w-[60%] flex flex-col items-center justify-center gap-y-4 p-4">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center transition-all duration-300 mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Paisa Patrol: Simplify Expense Tracking!
            </h1>
            <p className=" text-gray-600 text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-center transition-all duration-300">
              Introducing Paisa Patrol: Your all-in-one tool for effortless expense tracking. Join us today and take control of your finances with ease and precision!
            </p>
          </div>
          <div className='flex flex-col sm:flex-col md:flex-row gap-5 mt-6'>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg transition-all duration-300">
              <Link to={"/login"}>Create an Account</Link>
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg transition-all duration-300">
              <Link to={"/about"}>Learn More</Link>
            </button>
          </div>
        </div>

        {/* Uncomment and adjust the image div if needed
        <div className="md:w-[40%] flex justify-center items-center p-4">
          <img src={homeImage} alt="Home" className="w-full h-auto md:max-w-md lg:max-w-lg rounded-lg transition-all duration-300" />
        </div>
        */}
      </div>

      <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-white py-8 mt-auto w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-lg sm:text-xl">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-left text-sm sm:text-base text-black">© {new Date().getFullYear()} Paisa Patrol. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4 md:mb-0">
            <a href="https://x.com/imgirish_07?t=YboCggNXpjvOHfxgWy2QZA&s=08" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="h-8 sm:h-10" />
            </a>
            <a href="https://www.instagram.com/imgirish_07?utm_source=qr&igsh=OXY3Z2VydGpsdXgz" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="h-8 sm:h-10" />
            </a>
            <a href="https://www.linkedin.com/in/girish-kumar-b63b52252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="h-8 sm:h-10" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="h-8 sm:h-10" />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-lg sm:text-xl font-bold text-black">Paisa Patrol</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
