import React from 'react';
import  {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Nvabar/Home/Home.js'
import About from './components/Nvabar/About.js'
import Admin from './components/Nvabar/Admin.js'
import Login from './components/Nvabar/Login.js'
import Register from './components/Nvabar/Register.js'
import index from './components/Nvabar/index.js'

const App = () => {

  return (
    <Router>
    <>
    <Route  path = "/" component = {index} exact />
    <Switch>

        <Route path = "/about" component = {About} exact/>
        <Route  path = "/home" component = {Home} exact />
        <Route path = "/Admin" component = {Admin} exact/>
        <Route path = "/login" component = {Login} exact/>
        <Route path = "/register" component = {Register} exact/>
      </Switch>
    </>
  </Router>
    
  );
};

export default App;