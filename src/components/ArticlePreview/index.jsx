import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ReadMoreButton from 'src/components/ReadMoreButton';

import './ArticlePreview.scss';

function ArticlePreview({
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
  const className = classNames('articlePreview', classNameProp);

  return (
    <div className={className}>
      <div className='articlePreview__title'>
        <h2>{title}</h2>
      </div>
      <div className='articlePreview__content'>
        <p>{content}</p>
      </div>
      <ReadMore />
      {/* <div className='articlePreview__readMoreButton'>{btnText}</div> */}
    </div>
  );
}

ArticlePreview.defaultProps = {
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

ArticlePreview.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  btnBackgroundColor: PropTypes.string,
  backgroundUrl: PropTypes.string,
  className: PropTypes.string,
};

function ReadMore() {
  return (
    <ReadMoreButton
      btnText='Read More'
      btnColor=''
      btnBackgroundColor=''
      backgroundUrl=''
      className='readMore__main'
    />
  )
}

export default ArticlePreview;
