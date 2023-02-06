import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Registration.scss';

function Registration({
  title,
  titleColor,
  content,
  contentColor,
  btnText,
  btnColor,
  btnBackgroundColor,
  backgroundUrl,
  className: classNameProp,
}) {
  const className = classNames('registration', classNameProp);

  return (
    <div className={className}>
      <div className='registration__title'>
        <h2>{title}</h2>
      </div>
      <div className='registration__content'>
        <div> حضوری </div>
        <div> مجازی </div>
      </div>
    </div>
  );
}

Registration.defaultProps = {
  title: '',
  titleColor: '',
  content: '',
  contentColor: '',
  btnText: '',
  btnColor: '',
  btnBackgroundColor: '',
  backgroundUrl: '',
  className: undefined,
};

Registration.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  btnBackgroundColor: PropTypes.string,
  backgroundUrl: PropTypes.string,
  className: undefined,
};

export default Registration;