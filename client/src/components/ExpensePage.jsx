import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:8000';

function ExpensePage() {
    const [username, setUsername] = useState('John Doe');
    const [avatar, setAvatar] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleAvatarChange = (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    const navigate = useNavigate();
    const handleCallback = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_GOOGLE_SUCCESS_LOGIN_URI}`, {
                withCredentials: true,
            });
            const data = res.data;
            const boolValue = data.boolValue;
            if (boolValue) {
                console.log("User Data received in frontend", data);
            }
        } catch (error) {
            console.log("Error is : ", error);
        }
    }

    const handleAmount = (e) => {
        const value = e.target.value;
        setAmount(value);
    }
    const handleDescription = (e) => {
        const value = e.target.value;
        setDescription(value);
    }
    const handleCategory = (e) => {
        const value = e.target.value;
        setCategory(value);
    }

    const handleSubmitExpense = async () => {
        try {
            const res = await axios.post(`${baseUrl}/addexpense`, {
                Amount: amount,
                Description: description,
                Category: category,
            },
                { withCredentials: true }
            );
            const expenseData = res.data;
            console.log("Expense data ", expenseData);

        } catch (error) {
            console.log("Error : ", error);
        }
    }

    useEffect(() => {
        handleCallback();
        fetchExpenses();
    }, [navigate]); // Removed `expenses` from dependencies

    const fetchExpenses = async () => {
        try {
            const res = await axios.get(`${baseUrl}/user/expenses`);
            const userData = res.data;
            const newExpense = userData.expenses;
            setExpenses([...expenses, newExpense]);
            console.log(" Expense Data of USer : ", newExpense);

            console.log("Fetched Expenses:", expenses);
        } catch (error) {
            console.log("Error fetching expenses:", error);
        }
    }

    return (
        <div className="flex flex-wrap min-h-screen">
            <div className="w-full sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 flex flex-col">
                <div className="flex flex-col items-center mb-4">
                    <div className="mb-2">
                        <input type="file" onChange={handleAvatarChange} className="hidden" id="avatar" />
                        <label htmlFor="avatar" className="cursor-pointer">
                            <img
                                src={avatar || 'https://cdn.pixabay.com/photo/2023/02/01/09/25/cristiano-ronaldo-7760045_960_720.png'}
                                alt="Avatar"
                                className="rounded-full w-24 h-24"
                            />
                        </label>
                    </div>
                    <h2 className="text-lg font-semibold">{username}</h2>
                </div>
                <nav className="flex-grow">
                    <ul>
                        <li className="mb-2"><a href="/add-expenses" className="text-blue-500">Add Expenses</a></li>
                        <li className="mb-2"><a href="/dashboard" className="text-blue-500">Dashboard</a></li>
                        <li className="mb-2"><a href="/history" className="text-blue-500">History</a></li>
                        <li className="mb-2"><a href="/contacts" className="text-blue-500">Contacts</a></li>
                    </ul>
                </nav>
                <button className="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
            </div>
            <div className="w-full sm:w-2/3 lg:w-3/4 p-4">
                <div className="flex flex-row space-x-4">
                    <div className="w-1/2">
                        <div className="space-y-4">
                            <div>
                                <input type="number" id="amount" name="amount" placeholder='Amount' onChange={handleAmount} className='bg-transparent  h-[40px] px-[10px] mt-1 block w-full border border-gray-300 rounded-md p-2' required />
                            </div>
                            <div>
                                <input type="text" id="description" name="FirstName" placeholder="Description" onChange={handleDescription} className='bg-transparent  h-[40px] px-[10px] mt-1 block w-full border border-gray-300 rounded-md p-2' />
                            </div>
                            <div>
                                <input type="text" id="category" name="category" placeholder="Category" onChange={handleCategory} className='bg-transparent  h-[40px] px-[10px] mt-1 block w-full border border-gray-300 rounded-md p-2' required />
                            </div>
                            <div>
                                <label htmlFor="contacts" className="block text-sm font-medium text-gray-700">Contacts (Optional)</label>
                                <input type="text" id="contacts" name="contacts" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <button type="submit" onClick={handleSubmitExpense} className="w-full bg-blue-500 text-white p-2 rounded">Add Expense</button>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-2">
                        {expenses.map((expense, index) => (
                            <div key={expense._id} className="p-4 border border-gray-300 rounded-md">
                                <div><strong>Amount:</strong> ${expense.Amount}</div>
                                <div><strong>Category:</strong> {expense.Category}</div>
                                <div><strong>Date:</strong> {new Date(expense.createdAt).toLocaleDateString()}</div>
                                <div><strong>Description:</strong> {expense.Description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpensePage;
