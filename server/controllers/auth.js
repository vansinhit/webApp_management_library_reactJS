import mongoose from 'mongoose';
import User from '../models/user.js';
import jwt from 'jwt-then';

export const register = async (req, res) => {
    const {name, email, password} = req.body;
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com/;
    if(!emailRegex.test(email)) throw "Email not support";
    if(password.length < 6) throw "password must be atless 6 charters long";

    const userCheck = await User.findOne({
        email,
    });
    if(userCheck) throw "User with same email already exits";
    const user = new User({name , email, password});
    
        await user.save();

        res.json({
            message: "User [ " + name + " ] register successfully!",
        });
     
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
      password,
    });
  
    if (!user) throw "Email and Password did not match.";
  
    const token = await jwt.sign({ id: user.id }, process.env.SECRET);
  
    res.status(201).json({
        message: "login successfully!",
        token});
};