// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const { User } = require('./models/user');

// // // Passport serialization and deserialization

// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//     done(null, obj);
// });

// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: process.env.FACEBOOK_CALLBACK_URI,
//     profileFields: ['id', 'displayName', 'photos', 'email']
// },
//     async function (accessToken, refreshToken, profile, done) {     
//         console.log("Facebook Profile is: ", profile);
//         return done(null, profile);
//     }
// ));