import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from '../Nvabar/Nvarbar.js';
import makeToast from "../../Toast.js"

import axios from 'axios';

const Register = (props) => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const registerUser = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios
        .post("http://localhost:5000/user/register",{
            name,
            email,
            password,
        })
        .then((response) => {
            makeToast("suucess", response.data.message);
            props.history.push('/login')
        })
        .catch((err) =>{
           console.log("aa");
        });

    }
  return (
        <Container>
            <Navbar /> 

            <div className = "card">
            <div className = "cardHeader">Register</div>
            <div className = "cardBody">
                <div className = "inputGroup">
                  <label htmlFor = "name">Name</label>
                  <input 
                        type = "name" 
                        name = "name" 
                        id="name" 
                        placeholder = "Tran Sinh" 
                        ref = {nameRef}/>
                </div>
                <div className = "inputGroup">
                  <label htmlFor = "email">Email</label>
                  <input 
                        type = "email" 
                        name = "email" 
                        id="email" placeholder = "abc@gmail.com" 
                        ref = {emailRef}/>
                </div>
                <div className = "inputGroup">
                  <label htmlFor = "password">Password</label>
                  <input 
                        type = "password" 
                        name = "password" 
                        id="password" 
                        placeholder = "Your Password" 
                        ref = {passwordRef}/>
                </div>
                <button onClick={registerUser}>Register</button>
                </div>
            </div>
        </Container>
  );
};

export default Register;