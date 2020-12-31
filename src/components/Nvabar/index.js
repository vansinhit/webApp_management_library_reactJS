import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import { Container } from '@material-ui/core';

import Navbar from './Nvarbar';


const index = (props) => {

  return (
    <Container maxWidth="lg">
        <Navbar />
    </Container>
  );
};

export default index;