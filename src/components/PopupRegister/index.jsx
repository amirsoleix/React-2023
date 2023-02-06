import * as React from 'react';

import Button from '../Button';
// import Tooltip from '@mui/material/Tooltip';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PopupRegister.scss';

function PopupRegister(props) {
  console.log(props);
  return (
    <div className={'test'}>
      <DialogTitle>{'Registration will be available soon!'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ReACT 2023 has not yet opened registration. The process will begin on
          February 6th 2023. Please check back then!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autofocus buttonType='brand'>
          Okay
        </Button>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSf2wK0jIpQhgDmzsAVgdB-ui3sc5YB0SGltbimuQ-HIgnSz1A/viewform?usp=sf_link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button autofocus buttonType='brand'>
            Register
          </Button>
        </a>
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
