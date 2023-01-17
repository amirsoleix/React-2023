import React from 'react';
import Proptypes from 'prop-types';

import Staff from '../Staff';

function SpeakerPanel({ posts, className }) {
  const renderPosts = () =>
    posts.map((data) => {
      const { title, imgUrl, subtitle } = data;
      return (
        <Staff
          key={title}
          mainTitle={title}
          imgUrl={imgUrl}
          imgAlt={title}
          subtitle={subtitle}
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
