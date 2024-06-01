const Contact = require('../models/Contact');
const User = require('../models/User');

// // this function is to obtain user from jwt token stored in the cookies
const GetUserFromCookies = require('../service/Get_User_from_cookies');

async function handleUserProfileInfo(req, res) {
    const user = await GetUserFromCookies(req, res);
    if (!user) {
        res.status(401).json({ message: "user not logged in" });
    }

    // res.json(user); this is the wrong way to get the user because we are getting the user stored in cookies not in DataBase

    const userId = user._id;
    // find the user in database 
    const userInDatabase = await User.findById(userId).populate({
        path: 'contacts',
        populate: {
            path: 'expenses'
        }
    });
    if (!userInDatabase) {
        res.status(401).json({ message: "User not found in DataBase" });
    }
    return res.status(200).json({ message: "user profile : ", userInDatabase });
}

async function handleGetContactInfo(req, res) {
    const user = await GetUserFromCookies(req, res);
    if (!user) {
        res.status(401).json({ message: "user not logged in" });
    }
    try {
        const details = await User.findById(user._id).populate({
            path: 'contacts',
            populate: {
                path: 'expenses'
            }
        });
        res.json({ contactList: details });
    }
    catch (error) {
        console.log(error);
    }
}

async function handleGetExpenseInfo(req, res) {
    const user = await GetUserFromCookies(req, res);
    if (!user) {
        res.status(401).json({ message: "user not logged in" });
    }
    try {
        const expenseDetails = await User.findById(user._id).populate('expenses');
        if (!expenseDetails) {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { handleUserProfileInfo, handleGetContactInfo, handleGetExpenseInfo };