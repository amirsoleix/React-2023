import React from 'react';
import Proptypes from 'prop-types';

import Speaker from '../Speaker';

function SpeakerPanel({ posts, className }) {
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
        />
      );
    });

  return <div className={className}>{renderPosts()}</div>;
}

SpeakerPanel.defaultProps = {
  posts: [],
};

SpeakerPanel.propTypes = {
  posts: Proptypes.instanceOf(Array),
};

export default SpeakerPanel;
