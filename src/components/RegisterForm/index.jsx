import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RegisterFormComponent from './registerForm';

import './RegisterForm.scss';
// import './registerForm.jsx';

function RegisterForm({
  title,
  className: classNameProp,
}) {
  const className = classNames('registerForm', classNameProp);

  return (
    <div className={className} id='register-app'>
      <RegisterFormComponent />
      {/* <div className='registerForm__title'>
        <h2>{title}</h2>
      </div>
      <div className='registerForm__content'>
        <div className='field'>
          <p> first name </p>
          <input placeholder='first name'></input>
        </div>
        <div className='field'>
          <p> last name </p>
          <input></input>
        </div>
        <div className='field'>
          <p> gender </p>
          <div className='div-flex-row'>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="gender" value="male" />
              <p className='text-align-center'> male </p>
            </label>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="gender" value="female" />
              <p className='text-align-center'> female </p>
            </label>
          </div>
        </div> */}
        {/* <div className='field'>
          <p> birth </p>
          <input></input>
        </div>
        <div className='field'>
          <p> phone </p>
          <input></input>
        </div>
        <div className='field'>
          <p> email </p>
          <input></input>
        </div>
        <div className='field'>
          <p> tel id </p>
          <input></input>
        </div>
        <div className='field'>
          <p> Are you from Sharif University? </p>
          <div className='div-flex-row'>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="issharif" value="yes" />
              <p className='text-align-center'> Yes </p>
            </label>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="ishsarif" value="no" />
              <p className='text-align-center'> No </p>
            </label>
          </div>
        </div>
        <div className='field'>
          <p> University </p>
          <input></input>
        </div>
        <div className='field'>
          <p> Degree </p>
          <div className='div-flex-row'>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="degree" value="master" />
              <p className='text-align-center'> Master </p>
            </label>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="degree" value="PhD" />
              <p className='text-align-center'> PhD </p>
            </label>
          </div>
        </div>
        <div className='field'>
          <p> field </p>
          <div className='div-flex-row'>
            <label className='div-flex-row'>
              <input className='radio-input' type="checkbox" />
              <p className='text-align-center'> EE </p>
            </label>
            <label className='div-flex-row'>
              <input className='radio-input' type="checkbox" />
              <p className='text-align-center'> CS </p>
            </label>
          </div>
        </div>
        <div className='field'>
          <p> what is your pepose to join this event? </p>
          <input></input>
        </div>
        <div className='field'>
          <p> lunch </p>
          <div className='div-flex-row'>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="lunch" value="none" />
              <p className='text-align-center'> no lunch </p>
            </label>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="lunch" value="day1" />
              <p className='text-align-center'> day 1 </p>
            </label>
          </div>
          <div className='div-flex-row'>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="lunch" value="day2" />
              <p className='text-align-center'> day 2 </p>
            </label>
            <label className='div-flex-row'>
              <input className='radio-input' type="radio" name="lunch" value="both" />
              <p className='text-align-center'> both </p>
            </label>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

RegisterForm.defaultProps = {
  title: '',
  className: undefined,
};

RegisterForm.propTypes = {
  title: PropTypes.string,
  className: undefined,
};

export default RegisterForm;