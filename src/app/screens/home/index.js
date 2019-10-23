import React, { Component } from 'react';
import Template from '../../components/complex/Template';
import { Link } from 'react-router-dom';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@material-ui/core';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      keyword: '',
      suggestions: [],
    }
  }

  fetchUsers = (value) => {
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ suggestions: data.items })
      });
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
    this.fetchUsers(event.target.value);
  };

  render () {
    const {
      keyword,
      suggestions,
    } = this.state;

    return (
      <Template title="Github's User Search">
        <TextField
          id="standard-name"
          label="Search by username"
          value={keyword}
          onChange={this.handleChange('keyword')}
          margin="normal"
          fullWidth
        />
        <div>
          {suggestions.length > 0 && <List className="users__list">
            {suggestions.map((suggestion, index) => (
              <Link key={index} className="user__item-link" to={`/${suggestion.login}`}>
                <ListItem className="user__item">
                  <ListItemAvatar>
                    <Avatar alt={suggestion.login} src={suggestion.avatar_url} />
                  </ListItemAvatar>
                  <ListItemText primary={suggestion.login} secondary={suggestion.bio} />
                </ListItem>
              </Link>
            ))}
            </List>
          }
        </div>
      </Template>
    );
  }
}

export default Home;
