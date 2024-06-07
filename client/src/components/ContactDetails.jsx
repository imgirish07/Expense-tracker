import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ContactExpense from './ContactExpense';

const baseUrl = 'http://localhost:8000';

const ContactDetails = ({contactId}) => {
    // const location = useLocation();
    // const { contactId } = location.state;
    const [expenses, setExpenses] = useState([])
    const [totalexpense, setTotalExpense] = useState(0);
    const [newexpense, setNewExpense] = useState({
        "amount": 0,
        "category": "food",
        "description": "",
    });

    // Expense of a contact using ContactID 
    const fetchExpenseList = async () => {
        try {
            const fetchededContact = await axios.post(`${baseUrl}/contactdetails`,
                {
                    contactId: contactId
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            setExpenses(fetchededContact.data.expenses)
            setTotalExpense(fetchededContact.data.expenses.reduce((acc, expense) => acc + expense.Amount, 0));
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    useEffect(() => {
        fetchExpenseList();
    }, []);

    // onChange function
    const handleExpenseChange = (event) => {
        setNewExpense({ ...newexpense, [event.target.name]: event.target.value });
    };

    // Add Expense of the contact
    const handleAddExpense = async () => {
        try {
            await axios.post(`${baseUrl}/addexpense`, {
                Amount: newexpense.amount,
                Category: newexpense.category,
                Description: newexpense.description,
                contactId: contactId,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            });
            // Refresh the expense list
            await fetchExpenseList();
            setNewExpense({ "amount": 0, "category": "food", "description": "" });
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };
    return (
        <>
            <div className="w-full max-w-md flex flex-col items-center space-y-4 rounded-lg p-4 lg:max-w-lg xl:max-w-xl">
                <input
                    type="number"
                    value={newexpense.amount}
                    id="amount"
                    name="amount"
                    placeholder="Amount"
                    onChange={handleExpenseChange}
                    className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                    required
                />
                <input
                    type="text"
                    id="description"
                    value={newexpense.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleExpenseChange}
                    className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                />
                <select value={newexpense.category} name="category" onChange={handleExpenseChange} className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md">
                    <option value="food">Food</option>
                    <option value="udhar">Udhar</option>
                    <option value="travel">Travel</option>
                    <option value="education">Education</option>
                    <option value="other">Others</option>
                </select>
                <button
                    onClick={handleAddExpense}
                    className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-400 transition duration-200 flex items-center justify-center hover:shadow-md"
                >
                    <span className="mr-2 text-2xl leading-none">+</span>
                    <span className="text-xl">Add Expense</span>
                </button>
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
            <ContactExpense expenses={expenses} totalexpense={totalexpense} fetchExpenseList={fetchExpenseList} contactId={contactId} />
        </>
    );
};
export default ContactDetails;