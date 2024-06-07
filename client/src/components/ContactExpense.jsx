import React, { useEffect, useState } from 'react';
import dateSvg from '../assets/date.svg';
import messageSvg from '../assets/message.svg';
import axios from 'axios'
import deleteSvg from '../assets/delete.svg';
const baseUrl = 'http://localhost:8000';
function ContactExpense({ expenses, totalexpense, fetchExpenseList, contactId }) {
    const [oldexpenses, setOldExpenses] = useState([])
    useEffect(() => {
        setOldExpenses(expenses.reverse());
    }, [])
    const handleRemoveExpense = async (expenseId) => {
        let confirm = window.confirm(`Remove this from this Expense list`);
        if (!confirm) return;
        try {
            await axios.post(`${baseUrl}/remove-expense`,
                {
                    expenseId: expenseId,
                    contactId: contactId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            // Refresh the expense list
            await fetchExpenseList();
        } catch (error) {
            console.error("Error removing expense:", error);
        }
    };
    return (
        <>
            <div className="w-full lg:w-[60%] mt-4 space-y-4 mb-4 p-4 flex justify-center border border-gray-300 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200">
                <div className="text-2xl font-bold text-purple-800">
                    Total Expense : <span className="text-red-500 text-2xl">&#8377;{totalexpense}</span>
                </div>
            </div>
            <div className="w-full lg:w-[60%] mt-4 space-y-4 overflow-y-auto overflow-hidden hide-scrollbar">
                {oldexpenses.map((expense, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="flex justify-between w-full">
                                <span className="text-lg font-semibold uppercase text-purple-800">{expense.Category}</span>
                                <span className={`text-lg font-semibold ${expense.Amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>&#8377; {Math.abs(expense.Amount)}</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                            <div className="flex items-center">
                                <img src={dateSvg} alt="Date" className="w-6 h-6 fill-current mr-2" />
                                <span className="ml-2">{new Date(expense.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center mt-2 sm:mt-0">
                                <img src={messageSvg} alt="Message" className="w-6 h-6 fill-current mr-2" />
                                <span className="ml-2 capitalize">{expense.Description}</span>
                            </div>
                            <button onClick={() => handleRemoveExpense(expense._id)} className=" text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                <img src={deleteSvg} alt="Delete" className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {<style jsx>{`
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .hide-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }`}
            </style>}
        </>
    );
}

export default ContactExpense