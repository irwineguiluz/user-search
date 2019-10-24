import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const ErrorMessage = (props) => (
  <Snackbar
    open
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">{props.message}</span>}
    className="custom__snackbar"
  />
);

export default ErrorMessage;