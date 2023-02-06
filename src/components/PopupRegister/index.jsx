import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PopupRegister.scss';

function PopupRegister({
  className: classNameProp,
}) {
  const className = classNames('', classNameProp);

  return (
    <div className={className}>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
            >
            <DialogTitle>
                {'Registration for In-Persion Event'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ReACT 2023 will be held in-person as Sharif University of Technology on Wed. & Thu. Feb 22nd, 23th.

                    Note that you can reserve your lunch for these two days!
                </DialogContentText>
                
                Reserve luanch for Wed
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autofocus buttonType='brand'>
                    Cancel
                </Button>
                <a href="https://docs.google.com/" target="_blank" rel="noopener noreferrer">
                    <Button autofocus buttonType='brand'>
                        Register
                    </Button>
                </a>
            </DialogActions>
        </Dialog>
    </div>
  );
}

PopupRegister.defaultProps = {
  className: undefined,
};

PopupRegister.propTypes = {
  className: undefined,
};

export default PopupRegister;