import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Status.scss';

function Status({ className, color, children }) {
  const blockClass = classNames('status', className);

  return (
    <div className={blockClass} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

Status.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
};

Status.defaultProps = {
  className: '',
  color: '',
  children: '',
};

export default Status;
