import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getModifiers } from '../../utils/component';

import { BLOCK_CLASS_NAME, VALID_SIZES } from './constants';

import './Icon.scss';

class Icon extends PureComponent {
  render() {
    const {
      name,
      url,
      color,
      size: sizeProp,
      className: classNameProp,
      ...attrs
    } = this.props;

    // To have size backward compatibility.
    const size = sizeProp ? String(sizeProp).toUpperCase() : undefined;

    const className = classNames(
      BLOCK_CLASS_NAME,
      {
        [`${BLOCK_CLASS_NAME}-${name}`]: !url && name,
      },
      getModifiers(BLOCK_CLASS_NAME, {
        [VALID_SIZES[size]]:
          Object.keys(VALID_SIZES).includes(size) && size !== VALID_SIZES.MD,
      }),
      classNameProp
    );

    const style = {};

    if (url) {
      style.backgroundImage = `url("${url}")`;
    } else {
      style.color = color;
    }

    return <i className={className} style={style} {...attrs} />;
  }
}

Icon.defaultProps = {
  name: undefined,
  url: undefined,
  className: undefined,
  color: undefined,
  size: VALID_SIZES.MD,
};
Icon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm', 'xs', ...Object.values(VALID_SIZES)]),
};

Icon.SIZES = VALID_SIZES;

export default Icon;
