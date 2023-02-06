import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './AboutEvent.scss';

function AboutEvent({
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
  const className = classNames('about-event', classNameProp);

  return (
    <div className={className}>
      <div className='about-event__title'>
        <h2>{title}</h2>
      </div>
      <div className='about-event__content'>
        <div> More Than 20 Interactive talks </div>
        <div> Pannel Discussion </div>
        <div> Exhibition with Related Startups </div>
      </div>
    </div>
  );
}

AboutEvent.defaultProps = {
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

AboutEvent.propTypes = {
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

export default AboutEvent;