import React from 'react';
import Proptypes from 'prop-types';

import Speaker from '../Speaker';

function SpeakerPanel({ posts, className, title = 'Speakers' }) {
  function handleClick() {
    console.log('Speaker clicked');
  }

  const renderPosts = () =>
    posts.map((data) => {
      const {
        bottomDescription,
        hasChat,
        imgUrl,
        redText,
        title,
        topDescription,
      } = data;
      return (
        <Speaker
          key={title}
          mainTitle={title}
          imgUrl={imgUrl}
          imgAlt={title}
          subtitle1={topDescription}
          subtitle2={bottomDescription}
          captionRed={redText}
          chat={hasChat}
          onClick={handleClick}
        />
      );
    });

  return (
    <div>
      <h2>{title}</h2>
      <div className={className}>{renderPosts()}</div>
    </div>
  );
}

SpeakerPanel.defaultProps = {
  posts: [],
};

SpeakerPanel.propTypes = {
  posts: Proptypes.instanceOf(Array),
};

export default SpeakerPanel;
