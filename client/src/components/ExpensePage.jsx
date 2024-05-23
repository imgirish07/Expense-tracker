import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ExpensePage() {

    // // making a useEffect so that it continuously checks for login callback
    const navigate = useNavigate();
    const handleCallback = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_GOOGLE_SUCCESS_LOGIN_URI}`, {
                withCredentials: true,
            });
            const data = res.data;

            const boolValue = data.boolValue;
            if (boolValue) {
                console.log("Data received in frontend", data);
                // navigate("/");
            }
        } catch (error) {
            console.log("Error is : ", error);
        }
    }
    useEffect(() => {
        handleCallback();
    }, [navigate]);

    return (
        <div className=' text-white h-screen w-[100%] bg-[#1c1c1c]
    flex justify-center items-center'>WELCOME TO THE EXPENSE PAGE</div>
    )

}

export default ExpensePage