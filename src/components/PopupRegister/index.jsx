import * as React from 'react';

import Button from '../Button';
// import Tooltip from '@mui/material/Tooltip';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import './PopupRegister.scss';

function PopupRegister(props) {
  console.log(props);
  return (
    <div className={'popup-register'}>
      <DialogTitle>{'Registration'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
        {/* ReACT 2023 will be held in-person as Sharif University of Technology on Wed. & Thu. Feb 22nd, 23th.

        Note that you can reserve your lunch for these two days! */}

        <p className='first-p'>We're sorry for making you wait, the registration opening has been delayed to Feb 7th due to some technical issues,</p>

        <p className='sec-p'>Thank you for your patience.</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions className='dialog-action'>
        <Button className='cancel-button' onClick={props.onClose} autofocus buttonType='brand'>
          OK
        </Button>
        {/* <a
          href='https://docs.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button className='register-button' autofocus buttonType='brand'>
            Register
          </Button>
        </a> */}
      </DialogActions>
    </div>
  );
}

PopupRegister.defaultProps = {
  className: undefined,
  onClose: undefined,
};

PopupRegister.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default PopupRegister;
