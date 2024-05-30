const { userVerify } = require('../service/auth')

// this function is to obtain user from jwt token stored in the cookies
async function GetUserFromCookies(req, res) {
    
    // const token = req.body.cookies.token;
    
    // // our token is in headers sent from the frontend we need to access it
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer token

    console.log("JWTtoken inside the cookie is:", token);

    if (!token) {
        return res.status(400).json({ message: "invalid token" });
    }

    const user = await userVerify(token);

    if (!user) {
        return res.status(404).json({ msg: "invalid user" });
    }
    req.user = user;
    return user;
}

module.exports= GetUserFromCookies;

// // THE TOKEN SHOULD BE STORED IN THE BODY IN THE FORMAT
// {
//     "name" : "G",
//     "number": "12364589621",
//     "cookies":{
//         "token": "XXX.JWT_TOKEN."
//     }   
// }