import React from 'react';
import dateSvg from '../assets/date.svg';
import messageSvg from '../assets/message.svg';

function AddExpense({ avatar, handleAvatarChange, amount, handleAmount, description, handleDescription, category, handleCategory, handleSubmitExpense, totalExpenses, expenses }) {
    return (
        <>
            <div className="w-full lg:w-[60%] mt-4 space-y-4 mb-4 p-4 flex justify-center border border-gray-300 rounded-lg sm:rounded-3xl shadow-md hover:shadow-lg transition duration-200">
                <div className="text-2xl font-bold text-purple-800">
                    Total Expense : <span className="text-red-500 text-2xl">&#8377;{totalExpenses}</span>
                </div>
            </div>

            <div className="w-full max-w-md flex flex-col items-center space-y-4 rounded-lg p-4 lg:max-w-lg xl:max-w-xl">
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Amount"
                    onChange={handleAmount}
                    className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                    required
                />

                <input
                    type="text"
                    id="description"
                    name="FirstName"
                    placeholder="Description"
                    onChange={handleDescription}
                    className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                />

                <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Category"
                    onChange={handleCategory}
                    className="bg-white h-[50px] px-4 mt-1 block w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-md"
                    required
                />

                <button
                    type="submit"
                    onClick={handleSubmitExpense}
                    className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-400 transition duration-200 flex items-center justify-center hover:shadow-md"
                >
                    <span className="mr-2 text-2xl leading-none">+</span>
                    <span className="text-xl">Add Expense</span>
                </button>
            </div>

            <div className="w-full lg:w-[60%] mt-4 space-y-4 overflow-y-auto overflow-hidden hide-scrollbar">
                {expenses.reverse().slice(0, 3).map((expense, index) => (
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
                        </div>
                    </div>
                ))}
            </div>

            {/* <style jsx>{`
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .hide-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }`}
                </style> */}

        </>
    )
}

export default AddExpense