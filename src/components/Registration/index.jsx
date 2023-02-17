import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as React from 'react';

// import { createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import './Registration.scss';

// import inpersonImage from 'src/assets/images/inperson.jpg';
import onlineImage from 'src/assets/images/online.jpg';
// import calenderIcon from 'src/assets/images/calender-icon.png';
import PopupRegister from 'src/components/PopupRegister';

function Registration({ title, className: classNameProp }) {
  const className = classNames('registration', classNameProp);

  const [open, setOpen] = React.useState(false);
  const [online, setOnline] = React.useState(false);
  // const online = true;

  const handleClickOpen = (state) => {
    setOpen(true);
    if (state === 'online') {
      setOnline(true);
    } else {
      setOnline(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={className}>
      <div className='registration__title'>
        <h2>{title}</h2>
      </div>
{/*       
      <div className='registration__content'>
        <div className='registration__content__description'>
          <p className='first-description-p'> ReACT 2023 In-Person Ticket: </p>
          <p className='sec-description-p'> - Participating in the event in-person at Sharif University of Technology on Feb 22nd & 23rd </p>
          <p className='sec-description-p'> - Access to the online platform of the event on Feb 24th </p>
          <p className='sec-description-p'> - Time-limited access to the recorded videos of ReACT 2021 </p>
          <p className='sec-description-p'> - Ability to reserve lunch for the event days </p>
          <p className='sec-description-p'> - Related Exhibitions and Panel Discussion </p>
        </div>
        <div className='registration__item'>
          <img
            className='registration_item__inperson-img'
            src={inpersonImage}
            alt='inperson'
          ></img>
          <h3 className='registration__item__title'> In person </h3>
          <div className='registration__item__description'>
            <p> Join the Event in-person </p>
          </div>
          <button className='registration__item__button' onClick={() => handleClickOpen('in-person')}> Register Now! </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <PopupRegister onClose={handleClose} className={'test'} />
          </Dialog>
        </div>
      </div> */}

      <div className='registration__content reverse-flex-row'>
      <div className='registration__content__description'>
          <p className='first-description-p'> ReACT 2023 Online Ticket: </p>
          <p className='sec-description-p'> Enjoy your moment with ReACT! </p>
          <p className='sec-description-p'> - Access to the online platform of the event on Feb 22nd - 24th </p>
          <p className='sec-description-p'> - Time-limited access to the recorded videos of ReACT 2021 </p>
        </div>
        <div className='registration__item'>
          <img
            className='registration_item__online-img'
            src={onlineImage}
            alt='online'
          ></img>
          <h3 className='registration__item__title'> Online </h3>
          <div className='registration__item__description'>
            {/* <img src={calenderIcon} alt='calender'></img>
            <p> From Feb 6-17th 2013 </p> */}
            <p> Watch the Event Online </p>
          </div>
          <button className='registration__item__button' onClick={() => handleClickOpen('online')}> Register Now! </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <PopupRegister onClose={handleClose} online={online} className={'test'} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

Registration.defaultProps = {
  title: '',
  className: undefined,
};

Registration.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Registration;
    