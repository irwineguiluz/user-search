import React, { Component } from 'react';
import Template from '../../components/complex/Template';
import ErrorMessage from '../../components/basic/ErrorMessage';
import SuggestionItem from './components/SuggestionItem';
import { List, TextField } from '@material-ui/core';
import { gitHub } from '../../../constants/app';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      keyword: '',
      suggestions: [],
      showError: false,
      errorMsg: '',
    }
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
  }

  fetchUsers = (value) => {
    fetch(`${gitHub.API_URL}/search/users?q=${value}`)
      .then(this.handleErrors)
      .then(data => {
        this.setState({
          suggestions: data.items,
          errorMsg: '',
          showError: false,
        });
      })
      .catch(error => {
        this.setState({
          suggestions: [],
          errorMsg: 'Sorry, an error has occurred.',
          showError: true,
        });
      });
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});

    if (event.target.value.length > 0) {
      this.fetchUsers(event.target.value);
    } else {
      this.setState({
        suggestions: [],
        errorMsg: '',
        showError: false,
      });
    }
  };

  render () {
    const {
      keyword,
      suggestions,
      showError,
      errorMsg,
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
              <SuggestionItem key={index} data={suggestion} />
            ))}
            </List>
          }
          {showError && <ErrorMessage message={errorMsg} />}
        </div>
      </Template>
    );
  }
}

export default Home;
