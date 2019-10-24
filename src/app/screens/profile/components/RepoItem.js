import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const RepoItem = (props) => (
  <a
    className="repo-item"
    target="_blank"
    rel="noopener noreferrer"
    href={props.data.html_url}
  >
    <ListItem>
      <ListItemText
        className="repo-item__detail"
        primary={props.data.name}
        secondary={props.data.description}
      />
    </ListItem>
  </a>
);

export default RepoItem;