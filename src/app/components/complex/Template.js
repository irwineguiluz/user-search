import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../../config/theme';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
  MuiThemeProvider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';

const Template = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid container color="primary" spacing={3}>
          <Grid item xs={12}>
            <CssBaseline />
              <AppBar className="app-bar">
                <Toolbar className="tool-bar">
                  <div className="main-title__wrapper">
                    <GitHubIcon edge="start" />
                    <Typography variant="h6" component="h1" className="main-title" edge="start">
                      {props.title}
                    </Typography>
                  </div>
                  {props.homeButton && <div className="home-button">
                    <Link to="/"><HomeIcon /></Link>
                  </div>}
                </Toolbar>
              </AppBar>
              <Container className="general__container">
                {props.children}
              </Container>
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  )
}

export default Template;