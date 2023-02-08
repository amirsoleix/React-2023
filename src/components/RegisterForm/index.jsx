import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import RegisterFormComponent from './registerForm';
import Form from "./Forms";

import './RegisterForm.scss';
// import './registerForm.jsx';

function RegisterForm({
  title,
  online,
  className: classNameProp,
}) {
  const className = classNames('registerForm', classNameProp);

  return (
    <div className={className} id='register-app'>
      {/* <RegisterFormComponent /> */}
      <Form online={online}/>
    </div>
  );
}

RegisterForm.defaultProps = {
  title: '',
  online: undefined,
  className: undefined,
};

RegisterForm.propTypes = {
  title: PropTypes.string,
  online: PropTypes.bool,
  className: undefined,
};

export default RegisterForm;