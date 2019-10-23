import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm">
      <Grid container color="primary" spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="standard-search"
            label="Search Github User"
            type="search"
            margin="normal"
            color="primary"
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
