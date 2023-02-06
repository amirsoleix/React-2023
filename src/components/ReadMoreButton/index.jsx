import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ReadMoreButton.scss';

function ReadMoreButton({
  btnText,
  btnColor,
  btnBackgroundColor,
  backgroundUrl,
  className: classNameProp,
}) {
  const className = classNameProp;
  return (
    <a
      className={className}
      href='https://docs.google.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Link to='/history'>
        <button className='read-more-button'>
          <span className='circle' aria-hidden='true'>
            <span className='icon arrow'></span>
          </span>
          <span className='button-text'>{btnText}</span>
        </button>
      </Link>
    </a>
  );
}

ReadMoreButton.defaultProps = {
  btnText: 'Read More',
  btnColor: '',
  btnBackgroundColor: '',
  backgroundUrl: '',
  className: undefined,
};

ReadMoreButton.propTypes = {
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  btnBackgroundColor: PropTypes.string,
  backgroundUrl: PropTypes.string,
  className: PropTypes.string,
};

export default ReadMoreButton;
