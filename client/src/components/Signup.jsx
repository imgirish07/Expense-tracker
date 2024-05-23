import React from 'react';
import { useState } from 'react';
import googleLogo from '../assets/GoogleLogo.png';
import facebookLogo from '../assets/FacebookLogo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {

  const navigate = useNavigate();

  // Implementation of Show Password
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  // onChange function
  const handleUserName = (e) => {
    const value = e.target.value;
    setUserName(value);
  }
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  }
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  // handleSubmit function
  const handleSubmit = async () => {
    try {

      const res = await axios.post(`${process.env.REACT_APP_USER_SIGNUP}`, {
        userName: userName,
        email: email,
        password: password,
      });

      const data = res.data;
      console.log(data)
      const boolValue = data.boolValue;

      if (boolValue) {
        navigate("/login");
      }

    } catch (error) {
      console.log("Error : ", error);
    }
  }

  // // Redirect to Google login page and then i can login and data will be stored in backend
  const handleGoogle = async (req, res) => {
    try {

      window.location.href = `${process.env.REACT_APP_GOOGLE_LOGIN_URI}`;

    } catch (error) {
      console.log("error : ", error);
    }
  }

  return (
    <div className='h-screen w-screen bg-[#1c1c1c]
     flex justify-center items-center'>

      <div className='border-2 rounded-xl h-[65vh] w-[80vw] flex flex-col  sm:h-[65vh] sm:w-[40vw] lg:h-[65vh] lg:w-[25vw]'>

        <div className=' text-white text-4xl font-bold h-[10%] flex items-center justify-center px-4 ' >
          Sign Up
        </div>

        <div className=' flex flex-col gap-2 my-[20px] h-[50%] px-4' >

          <input type="text" name="FirstName" placeholder="First Name" onChange={handleUserName} className='bg-transparent text-white border border-red-600 h-[40px] px-[10px]' />

          <input type="email" name="email" placeholder="Email" onChange={handleEmail} className=' bg-transparent text-white border border-red-600 h-[40px] px-[10px] ' />

          <input type={showPassword ? 'text' : 'password'}
            name="Password"
            placeholder="Password" onChange={handlePassword} className=' bg-transparent text-white border border-red-600 h-[40px] px-[10px]' />

          <button type="button" onClick={() => setShowPassword(!showPassword)} className='flex px-[12px] w-[40px] text-gray-400 font-medium '> {showPassword ? 'Hide' : 'Show'}
          </button>

        </div>

        <div className='flex justify-center items-center h-[40px] bg-[#0664D3] hover:bg-[#4d8be5] text-white font-bold mx-4 ' >
          <button type="submit" onClick={handleSubmit} >Sign Up</button>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>

          <div className=' font-medium h-[40px] w-[100%] flex items-center justify-center text-white ' >
            Or
          </div>

          <div className='flex flex-row gap-2 gap-x-7'>

            <div className='flex justify-center items-center rounded-xl h-[50px] w-[50px] border-2 border-gray-400 hover:border-orange-400'  >
              <button type="submit" onClick={handleGoogle} className="bg-no-repeat bg-cover  h-[30px] w-[30px] " style={{ backgroundImage: `url(${googleLogo})` }}></button>
            </div>

            <div className='flex justify-center items-center rounded-xl h-[50px] w-[50px] border-2 border-gray-400 hover:border-orange-400' >
              <button type="submit" style={{ height: '30px', width: '30px', backgroundImage: `url(${facebookLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></button>
            </div>

          </div>

          <div className=' font-medium text-white h-[40px] w-[100%] gap-x-1 flex items-center justify-center  ' >
            Already a member?
            <Link to="/login" className=' text-red-600 hover:text-orange-400'>Log In</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup;