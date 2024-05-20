const {userVerify}= require('../service/auth');

async function restrictedToLoggedinUserOnly(req,res,next){
    const token = req.cookies.token;
    console.log("JWTtoken is:", token);

    if(!token){
        res.status(400).json({message:"invalid token"});
    }

    const user= userVerify(token);

    if (!user) {
        return res.status(404).json({msg: "invalid user"});
    }

    req.user= user;
    next();
}

module.exports={
    restrictedToLoggedinUserOnly
}