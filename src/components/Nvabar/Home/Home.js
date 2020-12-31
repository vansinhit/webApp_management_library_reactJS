import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import { Container } from '@material-ui/core';


import Navbar from '../Nvarbar.js';
import HomePost from './HomePost';


const Home = () => {

  return (
    <Container maxWidth="lg">
        <Navbar />
        <HomePost />
    </Container>
  );
};

export default Home;