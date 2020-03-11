import React from 'react';
import { Btn } from 'components/UI/btn';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from 'components/UI/icons';

const SnackbarComponent = ({ type, open, onClose, message }) => {

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
      action={
        <React.Fragment>
          <Btn 
            size="small" 
            onClick={onClose}
            style={{
              color: '#f449'
            }}
          >
            UNDO
          </Btn>
          <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
            <Icon.close size="16px" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}

export default SnackbarComponent
