import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PresentationTimeline.scss';

import day1schedule from 'src/assets/images/react-logo-black.png';
import day2schedule from 'src/assets/images/react-logo-black.png';
import day3schedule from 'src/assets/images/react-logo-black.png';

function PresentationTimeline({
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
  const className = classNames('presentation-timeline', classNameProp);

  return (
    <div className={className}>
      <div className='presentation-timeline__title'>
        <h2>{title}</h2>
      </div>
      <div className='presentation-timeline__content'>
        <img src={day1schedule} alt='day-1-schedule'></img>
        <img src={day2schedule} alt='day-2-schedule'></img>
        <img src={day3schedule} alt='day-3-schedule'></img>
      </div>
    </div>
  );
}

PresentationTimeline.defaultProps = {
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

PresentationTimeline.propTypes = {
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

export default PresentationTimeline;