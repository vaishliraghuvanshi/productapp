const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usercontroller=require('../controller/usercontroller');
const JWT=require(jsonwebtoken);

router.post('/signup',
    usercontroller.signup
    );

router.post('/signin',
    usercontroller.signin
   );    

    module.exports=router;