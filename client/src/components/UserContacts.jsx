import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LogoutIcon } from '../assets/logout.svg';
import contactSvg from '../assets/contacts.svg';
import dashboardSvg from '../assets/dashboard.svg';
import dateSvg from '../assets/date.svg';
import historySvg from '../assets/history.svg';
import moneySvg from '../assets/money.svg';
import messageSvg from '../assets/message.svg';
import LogoutSvg from '../assets/logout.svg';
import deleteSvg from '../assets/delete.svg';

import ContactExpense from './ContactExpense';

const baseUrl = 'http://localhost:8000';

function UserContacts() {
    const [username, setUsername] = useState('John Doe');
    const [avatar, setAvatar] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [contacts, setContacts] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    const handleAvatarChange = (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    const handlePhoneNumber = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
    };

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
    };

    const handleSubmitContact = async () => {
        try {
            const res = await axios.post(`${baseUrl}/addcontact`, {
                name: name,
                number: phoneNumber,
            }, {
                withCredentials: true,
            });
            const contactData = res.data;
            console.log("Contact data ", contactData);
            // Fetch the updated list of contacts after adding a new one
            fetchContacts();
        } catch (error) {
            console.log("Error : ", error);
        }
    };

    const fetchContacts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/user/contacts`, {
                withCredentials: true,
            });
            const contactData = res.data;
            console.log("Contact Data for testing...", contactData);
            setContacts(contactData.contactList);
            console.log("Contact Data", contacts);
        } catch (error) {
            console.log("Error fetching contacts:", error);
        }
    };

    const handleDeleteContact = async (deleteId) => {
        console.log("Deleting contact with ID:", deleteId);
        try {
            const res = await axios.post(`${baseUrl}/removecontact`, {
                id: deleteId
            },
                {
                    withCredentials: true,
                });
            const Response = res.data;
            console.log("The deleted user was:", Response);
            fetchContacts();
        } catch (error) {
            console.log("Error deleting contact:", error);
        }
    }


    useEffect(() => {
        fetchContacts();
    }, [navigate]);

    return (
        <div className="flex flex-col sm:flex-row h-[92.4vh] overflow-y-auto bg-gradient-to-r from-gray-300 via-[#c595d1] to-[#d4c6d9]">

            {/* LEFT SECTION */}
            <div className="w-full border sm:border-gray-50 sm:rounded-none sm:w-[30%] lg:w-[30%] lg:mx-7 lg:my-7 p-4 bg-white bg-opacity-60 sm:bg-opacity-80 flex flex-col justify-center items-center shadow-md m-2 lg:rounded-2xl md:rounded-2xl transition duration-200">
                <div className="flex flex-col items-center mb-4">
                    <div className="mb-2">
                        <input type="file" onChange={handleAvatarChange} className="hidden" id="avatar" />
                        <label htmlFor="avatar" className="cursor-pointer">
                            <img
                                src={avatar || 'https://cdn.pixabay.com/photo/2023/02/01/09/25/cristiano-ronaldo-7760045_960_720.png'}
                                alt="Avatar"
                                className="rounded-full w-24 h-24 border-4 border-white hover:border-gray-400 transition duration-200"
                            />
                        </label>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-700 sm:text-xl">Username</h2>
                </div>
                <div className="flex-grow w-[100%]">
                    <ul className="flex flex-col items-center gap-2">
                        <li className="mb-2 flex items-center justify-center w-full">
                            <Link to="/expensepage" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={moneySvg} alt="Money" className="w-8 h-8 fill-current mr-2" />
                                Add Expense
                            </Link>
                        </li>
                        <li className="mb-2 flex items-center justify-center w-full">
                            <Link to="/addcontacts" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={contactSvg} alt="Contacts" className="w-8 h-8 fill-current mr-2" />
                                Contacts
                            </Link>
                        </li>
                        <li className="mb-2 flex items-center justify-center w-full">
                            <Link to="/dashboard" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={dashboardSvg} alt="Dashboard" className="w-8 h-8 fill-current mr-2" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-2 flex items-center justify-center w-full">
                            <Link to="/history" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={historySvg} alt="History" className="w-8 h-8 fill-current mr-2" />
                                History
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="border sm:border-gray-50 sm:rounded-none w-full sm:w-2/3 lg:w-3/4 p-4 lg:mx-7 lg:my-7 shadow-md m-2 bg-white bg-opacity-60 sm:bg-opacity-80 flex flex-col items-center lg:rounded-2xl md:rounded-2xl transition duration-200">
                <div className="w-full lg:w-[60%] mt-4 space-y-4 mb-4 p-4 flex justify-center border border-gray-300 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200">
                    <div className="text-2xl font-bold text-purple-800">
                        My Contacts
                    </div>
                </div>

                <div className="w-full max-w-md flex flex-col items-center space-y-4 rounded-lg p-4 lg:max-w-lg xl:max-w-xl">
                    <input
                        type="text"
                        id="name"
                        name="FirstName"
                        placeholder="Name"
                        onChange={handleName}
                        className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                    />

                    <input
                        type="number"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Phone Number"
                        onChange={handlePhoneNumber}
                        className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                        required
                    />

                    <button
                        type="submit"
                        onClick={handleSubmitContact}
                        className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-400 transition duration-200 flex items-center justify-center hover:shadow-md"
                    >
                        <span className="mr-2 text-2xl leading-none">+</span>
                        <span className="text-xl">Add Contact</span>
                    </button>
                </div>

                <div className="w-full lg:w-[60%] mt-4 space-y-4 overflow-y-auto overflow-hidden hide-scrollbar">
                    {contacts.map((contact, index) => (
                        <div key={index} className="p-4 border border-gray-300 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 bg-white">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-md font-semibold uppercase text-purple-800">{contact.name}</span>
                                    <span className="text-xl font-bold text-gray-600">{contact.number}</span>
                                </div>
                                <div className="flex items-center ">
                                    <button onClick={() => handleDeleteContact(contact._id)} className=" text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                        <img src={deleteSvg} alt="Delete" className="w-8 h-8" />
                                    </button>
                                </div>
                                
                            </div>

                            <ContactExpense expenses={contact.expenses} />
                        </div>
                    ))}
                </div>

                <style jsx>{`
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .hide-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }`}
                </style>

            </div>
        </div>

    );
}

export default UserContacts;
