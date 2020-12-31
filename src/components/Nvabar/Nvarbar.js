import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


import {HashLink as Link} from 'react-router-hash-link';
import { AppBar } from '@material-ui/core';
import useStyles from './styles.js';

import memories from '../images/thuvien.jpg';


import React from 'react';

const Nvabar = () => {

    const classes = useStyles();
    return (
      
        <AppBar className={classes.appBar} position="static" color="inherit">
            <nav className = "light-green">
                <div className = "container">
                    <div className = "nav-wrapper">
                        <Link to = '/home' className = "brand-logo">
                        <img className={classes.image} src={memories} alt="icon" height="64"></img>
                        </Link>
                        <ul className = 'right hide-on-med-and-down'>
                            <li>
                                <Link to='/home'>
                                    <i className='fas fa-home' ></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    <i className='fas fa-copy'></i> About
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin'>
                                    <i className='fas fa-address-card'></i> Admin
                                </Link>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </nav>
            </AppBar>
      
    );
  };
  
  export default Nvabar;

