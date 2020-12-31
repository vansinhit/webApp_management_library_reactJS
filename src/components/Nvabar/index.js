import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import { Container } from '@material-ui/core';

import Navbar from './Nvarbar';


const index = (props) => {
  React.useEffect(()=>{
    const token = localStorage.getItem("CC _Token");
    console.log(token);
    if(!token){
      props.history.push('/login');
    }  else  {
      props.history.push('/home');
    }
  }, [0]);
  return (
    <Container maxWidth="lg">
        <Navbar />
    </Container>
  );
};

export default index;