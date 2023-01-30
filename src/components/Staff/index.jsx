import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import placeholder from 'src/assets/images/placeholder.png';

import './Staff.scss';

function Staff({
  mainTitle,
  imgUrl,
  imgAlt,
  subtitle,
  className: classNameProp,
}) {
  const renderImage = () => {
    const url = imgUrl || placeholder;

    return (
      <div className='staff-card__image-container'>
        <div className='staff-card__image'>
          <img src={url} alt={imgAlt} />
        </div>
      </div>
    );
  };

  function renderSubtitle(subtitle) {
    return (
      subtitle && (
        <p className='staff-card__subtitle hide-overflow'>{subtitle}</p>
      )
    );
  }

  const className = classNames('staff-card', classNameProp);

  return (
    <div className={className}>
      <div className='staff-card__container'>
        <div className='staff-card__content'>
          <div className='staff-card__title'>
            <h2>{mainTitle}</h2>
          </div>
          <div className='staff-card__detail'>{renderSubtitle(subtitle)}</div>
        </div>
        {renderImage()}
      </div>
    </div>
  );
}

Staff.defaultProps = {
  mainTitle: '',
  imgUrl: '',
  imgAlt: '',
  subtitle: '',
  className: undefined,
};

Staff.propTypes = {
  mainTitle: PropTypes.string,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default Staff;
