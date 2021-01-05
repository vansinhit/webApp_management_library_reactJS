import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios'
import makeToast from '../../Toast.js';
import {HashLink as Link} from 'react-router-hash-link';

import Navbar from '../Nvabar/Nvarbar.js';


const Login = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:5000/user/login", {
        email,
        password,
      })
      .then((response) => {
        makeToast("success", response.data.message);
        localStorage.setItem("CC_Token", response.data.token);
        props.history.push("/home");
      })
      .catch((err) => {
       
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };

  const registerUser = () => {
    props.history.push("/register");
  }
  return (
        <Container>
            <Navbar /> 
            
            <div className = "card">
              <div className = "cardHeader">Login</div>
              <div className = "cardBody">
                <div className = "inputGroup">
                  <label htmlFor = "email">Email</label>
                  <input type = "email" name = "email" id="email" placeholder = "abc@gmail.com" ref={emailRef}/>
                </div>
                <div className = "inputGroup">
                  <label htmlFor = "password">Password</label>
                  <input type = "password" name = "password" id="password" placeholder = "Your Password" ref={passwordRef}/>
                </div>
                <button onClick={loginUser}>Login</button>
                <button onClick={registerUser} >Register</button>
              </div>
            </div>
        </Container>
  );
};

export default Login;