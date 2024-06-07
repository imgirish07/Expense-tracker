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
import AddExpense from './AddExpense';
import ContactList from './ContactList';
import History from './History';
import ContactDetails from './ContactDetails';
import ContactExpense from './ContactExpense';

const baseUrl = 'http://localhost:8000';

function Dashboard() {
    const [username, setUsername] = useState('John Doe');
    const [avatar, setAvatar] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [totalExpenses, setTotalExpenses] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    const handleAvatarChange = (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    const handleAmount = (e) => {
        const value = e.target.value;
        setAmount(value);
    };

    const handleDescription = (e) => {
        const value = e.target.value;
        setDescription(value);
    };

    const handleCategory = (e) => {
        const value = e.target.value;
        setCategory(value);
    };

    const handleSubmitExpense = async () => {
        try {
            const res = await axios.post(`${baseUrl}/addexpense`, {
                Amount: amount,
                Description: description,
                Category: category,
            }, {
                withCredentials: true,
            });
            const expenseData = res.data;
            console.log("Expense data ", expenseData);
            // Fetch the updated list of expenses after adding a new one
            fetchExpenses();
        } catch (error) {
            console.log("Error : ", error);
        }
    };

    const fetchExpenses = async () => {
        try {
            const res = await axios.get(`${baseUrl}/user/expenses`, {
                withCredentials: true,
            });
            const userData = res.data;
            console.log("User Data for testing...", userData);
            setExpenses(userData.expenses);
            setTotalExpenses(userData.expenses.reduce((acc, expense) => acc + expense.Amount, 0));
        } catch (error) {
            console.log("Error fetching expenses:", error);
        }
    };

    useEffect(() => {
        fetchExpenses();
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
                            <Link to="/dashboard" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={dashboardSvg} alt="Dashboard" className="w-8 h-8 fill-current mr-2" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-2 flex items-center justify-center w-full">
                            <Link to="/add-expense" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={moneySvg} alt="Money" className="w-8 h-8 fill-current mr-2" />
                                Add Expense
                            </Link>
                        </li>
                        <li className="mb-2 flex items-center justify-center w-full">
                            <Link to="/add-contact" className="text-gray-700 hover:text-gray-400 font-bold flex items-center justify-start border border-gray-50 hover:border-gray-300 p-4 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200 text-xl" style={{ width: "90%" }}>
                                <img src={contactSvg} alt="Contacts" className="w-8 h-8 fill-current mr-2" />
                                Contacts
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
                <div className="" >
                    THIS IS THE DASHBOARD
                </div>

                {/* {< AddExpense
                    avatar={avatar}
                    handleAvatarChange={handleAvatarChange}
                    amount={amount}
                    handleAmount={handleAmount}
                    description={description}
                    handleDescription={handleDescription}
                    category={category}
                    handleCategory={handleCategory}
                    handleSubmitExpense={handleSubmitExpense}
                    totalExpenses={totalExpenses}
                    expenses={expenses}
                />} */}

                <ContactList />

                {/* < History expenses={expenses} totalExpenses={totalExpenses}  /> */}

                {/* < ContactDetails /> */}

            </div>
        </div>
    );
}

export default Dashboard