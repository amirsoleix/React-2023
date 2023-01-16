import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './Button.scss';

function Button({
  buttonType,
  disabled,
  isSubmit,
  onClick,
  children,
  iconName,
  circular,
  className: classNameProp,
}) {
  // button class names with classNames library
  const buttonClassNames = classNames(
    'button',
    { [`button--${buttonType}`]: buttonType },
    { 'button--has-icon': iconName },
    { 'button--disabled': disabled },
    { 'button--circular': circular },
    classNameProp
  );

  function handleOnClick(event) {
    if (onClick === null) {
      return;
    }
    onClick(iconName);
  }

  return (
    <button
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
      className={buttonClassNames}
      onClick={handleOnClick}
    >
      {iconName && <Icon name={iconName} />}
      {<span className='button__text'>{children}</span>}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  buttonType: 'default',
  disabled: false,
  isSubmit: false,
  onClick: null,
  children: undefined,
  isLoading: false,
  iconName: '',
  circular: false,
  className: undefined,
};

Button.propTypes = {
  buttonType: PropTypes.string,
  isSubmit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  iconName: PropTypes.string,
  circular: PropTypes.bool,
  className: PropTypes.string,
};
