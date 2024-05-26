import React from 'react';
import homeImage from "../assets/home.jpeg";
import { Link } from 'react-router-dom';
import twitter from '../assets/twitterBW.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

function Home() {
  return (
    <div className="text-white min-h-screen bg-[#1c1c1c] flex flex-col">

      <div className="flex-grow flex flex-col md:flex-row md:border md:border-red-50 bg-yellow-500">

        <div className="md:w-[60%] flex flex-col items-center justify-center gap-y-4 p-4">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center transition-all duration-300 mb-6">
              Paisa Patrol: Simplify Expense Tracking!
            </h1>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-center transition-all duration-300">
              Introducing Paisa Patrol: Your all-in-one tool for effortless expense tracking. Join us today and take control of your finances with ease and precision!
            </p>
          </div>
          <div className='flex gap-x-5 mt-6'>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300">
              <Link to={"/login"}>Create an Account</Link>
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300">
              <Link to={"/about"}>Learn More</Link>
            </button>
          </div>
        </div>

        <div className="md:w-[40%] flex justify-center items-center p-4">
          <img src={homeImage} alt="Home" className="w-full h-auto md:max-w-md lg:max-w-lg rounded-lg transition-all duration-300" />
        </div>

      </div>

      <footer className="bg-gradient-to-r from-[#1F1F20] via-[#3c393f] to-[#1F1F20] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-lg sm:text-xl">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-left text-sm sm:text-base">© {new Date().getFullYear()} Paisa Patrol. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4 md:mb-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="h-8 sm:h-10" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="h-8 sm:h-10" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="h-8 sm:h-10" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="h-8 sm:h-10" />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-lg sm:text-xl font-bold">Paisa Patrol</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
