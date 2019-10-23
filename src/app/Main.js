import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Profile from './screens/profile';

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:username' component={Profile} />
        </Switch>
      </main>
    )
  }
}

export default Main;