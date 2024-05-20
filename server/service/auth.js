const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

async function signUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secretKey);
}

async function userVerify(token) {
    if (!token) { return null; }
    return jwt.verify(token, secretKey);
}

module.exports={
    signUser,
    userVerify
};