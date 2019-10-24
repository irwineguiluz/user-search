import React, { Component } from 'react';
import { Paper, List } from '@material-ui/core';
import Template from '../../components/complex/Template';
import RepoItem from './components/RepoItem';
import { gitHub } from '../../../constants/app';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileInfo: {},
      profileRepos: {},
    }
  }

  componentDidMount() {
    fetch(`${gitHub.API_URL}/users/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          profileInfo: response,
        });
      })
      .catch(error => {
        console.log(error);
      });

    fetch(`${gitHub.API_URL}/users/${this.props.match.params.username}/repos`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          profileRepos: response,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {
      profileInfo,
      profileRepos,
    } = this.state;

    let nameToShow = profileInfo.name ? profileInfo.name : profileInfo.login;

    return (
      <Template title="Github's User Profile" homeButton>
        <Paper className="profile__wrapper">
          <div className="profile__avatar">
            <img src={profileInfo.avatar_url} alt={profileInfo.login} />
          </div>
          <div className="profile__main-info">
            <a
              className="name__link"
              target="_blank"
              rel="noopener noreferrer"
              href={profileInfo.html_url}
            >
              <h2 className="name">{nameToShow}</h2>
            </a>
            <p className="bio">{profileInfo.bio}</p>
            <div className="profile__follow">
              <div className="item">
                <span>{profileInfo.followers}</span> Followers
              </div>
              <div className="item">
                <span>{profileInfo.following}</span> Following
              </div>
              <div className="item">
                <span>{profileRepos.length}</span> Repositories
              </div>
            </div>
          </div>
        </Paper>
        <Paper className="profile__repos-wrapper">
          <h3 className="title">Repositories</h3>
          <div className="profile__repos-list">
            {profileRepos.length > 0 && <List>
              {profileRepos.map((repo, index) => (
                <RepoItem key={index} data={repo} />
              ))}
            </List>}
          </div>
        </Paper>
      </Template>
    );
  }
}

export default Profile;