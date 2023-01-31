import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import placeholder from 'src/assets/images/placeholder.png';

import './Speaker.scss';
// import Status from './components/Status';

function Speaker({
  mainTitle,
  imgUrl,
  imgAlt,
  subtitle1,
  subtitle2,
  captionRed,
  caption,
  status,
  statusColor,
  className: classNameProp,
}) {
  // const renderImage = () => {
  //   const url = imgUrl || placeholder;

  //   return (
  //     <div className='post-card__image-container'>
  //       <div className='post-card__image'>
  //         <img src={url} alt={imgAlt} />
  //         {status && (
  //           <Status className='post-card__status' color={statusColor}>
  //             {status}
  //           </Status>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // const renderCaption = () => {
  //   if (!captionRed) return caption;

  //   return (
  //     <>
  //       <span className='post-card__caption--red'>{captionRed}</span> {caption}
  //     </>
  //   );
  // };

  function renderSubtitle(subtitle) {
    return (
      subtitle && (
        <p className='post-card__subtitle hide-overflow'>{subtitle}</p>
      )
    );
  }

  const className = classNames('post-card', classNameProp);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className='post-card__shadow'>
        <div className='post-card__container'>
          <div className='post-card__content'>
            <div className='post-card__title'>
              <h2>{mainTitle}</h2>
            </div>
            <div className='post-card__detail'>
              {renderSubtitle(subtitle1)}
              {renderSubtitle(subtitle2)}
              <div className='post-card__footer'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Speaker.defaultProps = {
  mainTitle: '',
  imgUrl: '',
  imgAlt: '',
  subtitle1: '',
  subtitle2: '',
  captionRed: '',
  caption: '',
  className: undefined,
  status: '',
  statusColor: '',
};

Speaker.propTypes = {
  mainTitle: PropTypes.string,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  caption: PropTypes.string,
  captionRed: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.string,
  statusColor: PropTypes.string,
};

export default Speaker;
