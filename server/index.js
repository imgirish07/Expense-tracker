require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { signUser } = require('./service/auth');

// passport google and facebook
const passport = require('passport');
require('./passport');
require('./passport_facebook');
const session = require('express-session');

const { connectToMongoDB } = require('./connection');

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');
const { restrictedToLoggedinUserOnly } = require('./middlewares/auth');

// connect to MongoDB
connectToMongoDB(process.env.MONGODB_URI);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// middlewares for google authentication
app.use(session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', homeRoute);
app.use('/user', userRoute);

// app.get('/check', restrictedToLoggedinUserOnly, (req, res) => {
//     return res.json({ message: "Middleware is Working" });
// })

// // Google authentication
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }), () => {
    }
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: process.env.FAILURE_REDIRECT_URI }),
    // this function is to assign JWT Token to the user
    function (req, res) {
        user = req.user;
        const token = signUser(user);
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
        });
        // on successful Login it will be redirected to the frontend expense page
        res.redirect(process.env.EXPENSE_PAGE_REDIRECT_URI);
    }
);

app.get('/login/success', async (req, res) => {
    const user= req.user;
    console.log("THIS IS THE TEST LOGIN SUCCESSPAGE", user)
    const boolValue = true;
    return res.status(200).json({ message: "successful google login", user, boolValue });
})

// // Facebook authentication

// app.get('/auth/facebook',
//     passport.authenticate('facebook',{ scope: ['profile', 'email'] }));

// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
//     function (req, res) {
//         res.redirect('/');
//     }
// );

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} `);
})