import React from 'react';
import Proptypes from 'prop-types';

import Staff from '../Staff';

function StaffPanel({ posts, className }) {
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

  return (
    <div>
      <h2>Staff</h2>
      <div className={className}>{renderPosts()}</div>
    </div>
  );
}

StaffPanel.defaultProps = {
  posts: [],
};

StaffPanel.propTypes = {
  posts: Proptypes.instanceOf(Array),
};

export default StaffPanel;
