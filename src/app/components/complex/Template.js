import React from 'react';
import { Container, Grid, MuiThemeProvider } from '@material-ui/core';
import theme from '../../../config/theme';

const Template = ({
  children,
}) => (
  <MuiThemeProvider theme={theme}>
    <Container maxWidth="sm">
      <Grid container color="primary" spacing={3}>
        <Grid item xs={12}>
          Github User Search
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  </MuiThemeProvider>
)

export default Template;