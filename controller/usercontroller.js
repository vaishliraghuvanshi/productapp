const { response } = require('express');
const user=require('../model/user');
const { validationResult } = require('express-validator');

exports.signup = (request, response) => {
 

    user.create({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        return response.status(500).json({err:"internal server error"});
    });

}
exports.signin= (request,response) =>{
    user.findOne({
        email: request.body.email,
        password: request.body.password
    })
        .then(result => {
            if (result) {
                console.log(result);
                return response.status(200).json({status:"login success",currentuser:result});
            }
        }).catch(err => {
            return response.status(500).json({ status:"login failed" });
        })
}
    
