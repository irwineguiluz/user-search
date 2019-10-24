import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

const SuggestionItem = (props) => (
  <Link className="user__item-link" to={`/${props.data.login}`}>
    <ListItem className="user__item">
      <ListItemAvatar>
        <Avatar alt={props.data.login} src={props.data.avatar_url} />
      </ListItemAvatar>
      <ListItemText primary={props.data.login} />
    </ListItem>
  </Link>
)

export default SuggestionItem;