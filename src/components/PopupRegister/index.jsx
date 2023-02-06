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
                {'Registration will be available soon!'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ReACT 2023 has not yet opened registration. The process will
                    begin on February 6th 2023. Please check back then!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autofocus buttonType='brand'>
                    Okay
                </Button>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2wK0jIpQhgDmzsAVgdB-ui3sc5YB0SGltbimuQ-HIgnSz1A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                    <Button autofocus buttonType='brand'>
                        Remide Me!
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