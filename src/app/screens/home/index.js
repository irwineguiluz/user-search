import React, { PureComponent } from 'react';
import Template from '../../components/complex/Template';
import { TextField } from '@material-ui/core';

class Home extends PureComponent {
  render () {
    return (
      <Template>
        <TextField
          id="standard-search"
          label="Search Github User"
          type="search"
          margin="normal"
          color="primary"
          fullWidth
        />
      </Template>
    );
  }
}

export default Home;
