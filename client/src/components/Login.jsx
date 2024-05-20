import React from 'react';
import { useState } from 'react';
import googleLogo from '../assets/GoogleLogo.png';
import facebookLogo from '../assets/FacebookLogo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {

    const navigate = useNavigate();

    // Implementation of Show Password
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    // onChange function

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }
    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    // handleSubmit
    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_USER_LOGIN}`, {
                email: email,
                password: password,
            }, {
                withCredentials: true
            });

            const data = res.data;

            const boolValue = data.boolValue;
            if (boolValue) {
                navigate("/")
            }
            console.log(data);

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
        <div className='h-screen w-screen flex justify-center items-center'>

            <div className='border-2 rounded-xl h-[85vh] w-[85vw] flex flex-col  sm:h-[80vh] sm:w-[50vw] lg:h-[80vh] lg:w-[35vw]'>

                <div className='text-xl font-bold h-[10%] flex items-center justify-center px-4 ' >
                    Welcome Back
                </div>

                <div className=' flex flex-col gap-2 my-[20px] h-[50%] px-4' >
                    {/* 
                    <input type="text" name="PhoneNumber" placeholder="Phone Number" className='border rounded-lg h-[40px] px-[10px] bg-[#f1f1f1]' /> */}

                    <input type="email" name="email" placeholder="Email" onChange={handleEmail} className='border rounded-lg h-[40px] px-[10px] bg-[#f1f1f1]' />

                    <input type={showPassword ? 'text' : 'password'}
                        name="Password"
                        placeholder="Password" onChange={handlePassword} className='border rounded-lg h-[40px] px-[10px] bg-[#f1f1f1]' />

                    <button type="button" onClick={() => setShowPassword(!showPassword)} className='flex px-[12px] w-[40px] text-gray-500 font-medium '> {showPassword ? 'Hide' : 'Show'}
                    </button>

                </div>

                <div className='flex justify-center items-center border-2 rounded-xl h-[40px] bg-[#79a4e3] hover:bg-[#4d8be5] text-white font-bold mx-4 ' >
                    <button type="submit" onClick={handleSubmit} >Sign In</button>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>

                    <div className=' font-medium h-[40px] w-[100%] flex items-center justify-center text-[#8a2be2] ' >
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

                    <div className=' font-medium h-[40px] w-[100%] flex items-center justify-center  ' >
                        Don’t have an account yet?
                        <Link to="/signup" className='text-[blue] hover:text-orange-400'>Create an account</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login