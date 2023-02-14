import * as React from 'react';

import Button from '../Button';
// import Tooltip from '@mui/material/Tooltip';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import RegisterForm from 'src/components/RegisterForm'
// import classNames from 'classnames';

import './PopupRegister.scss';

function PopupRegister(props) {
  // console.log(props);
  return (
    <div className={'popup-register'} style={props.online ? {height: '88vh'} : {height: '52vh'}}>
      <DialogTitle className='dialog-title'>{'Registration'}</DialogTitle>
      <DialogContent className='dialog-content-main'>
        <DialogContentText className='dialog-content'>
          <p className='first-p' style={props.online ? {display: 'none'}: {margin: '0 0 10px 0'}}>
            ReACT 2023 will be held in-person at Sharif University of Technology on Wed. & Thu. Feb 22nd, 23th.
            {/* Unfortunately we have reached the maximum capacity for the in-person tickets and we're sorry that we can't have you in person this year. */}
          </p>
          {/* <p className='first-p' style={props.online ? {display: 'none'}: {margin: '0 0 10px 0'}}>
            If you didn’t get a chance to get your ticket, join us online.
          </p> */}
          
          {/* <p className='sec-p' style={props.online ? {display: 'none'}: {}}> - Participating in the event in-person at Sharif University of Technology on Feb 22nd & 23rd </p>
          <p className='sec-p' style={props.online ? {display: 'none'}: {}}> - Access to the online platform of the event on Feb 22nd - 24th </p>
          <p className='sec-p' style={props.online ? {display: 'none'}: {}}> - Time-limited access to the recorded videos of ReACT 2021 </p>
          <p className='sec-p' style={props.online ? {display: 'none'}: {}} > - Ability to reserve lunch for the event days </p>
          <p className='sec-p' style={props.online ? {display: 'none'}: {}}> - Related Exhibitions and Panel Discussion </p> */}


          <p className='first-p' style={props.online ? {margin: '0 0 10px 0'}: {display: 'none'}}> ReACT 2023 will be held at Sharif University of Technology on Wed. & Thu. Feb 22nd, 23th. You can follow the evnet online. </p>
          {/* <p className='sec-p' style={props.online ? {}: {display: 'none'}}> Enjoy your moment with ReACT! </p>
          <p className='sec-p' style={props.online ? {}: {display: 'none'}}> - Access to the online platform of the event on Feb 22nd - 24th </p>
          <p className='sec-p' style={props.online ? {}: {display: 'none'}}> - Time-limited access to the recorded videos of ReACT 2021 </p> */}
          <RegisterForm title='registerForm' online={props.online} className=''/>
        </DialogContentText>
      </DialogContent>
      <DialogActions className='dialog-action'>
        <Button className='cancel-button' onClick={props.onClose} autofocus buttonType='brand'>
          <p> Cancel </p>
          {/* {props.online ? <p> Cancel </p> : <p> OK </p>} */}
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
  online: undefined,
  onClose: undefined,
};

PopupRegister.propTypes = {
  className: PropTypes.string,
  online: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PopupRegister;
