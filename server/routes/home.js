const express= require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log('Hello Im Home page');
    return res.send('Hello Im Home page');
})


module.exports= router;