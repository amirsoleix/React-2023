import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getModifiers } from 'src/utils/classname';
import Icon from 'src/components/Icon';
import { VALID_SIZES } from 'src/components/Icon/constants';

import { SOCIAL_LINKS } from './constants';

import './Footer.scss';

function Footer({ hasBottomNav }) {
  function renderLogo() {
    return (
      <a href='/' className='footer__link footer__logo'>
        <Icon name='social-sonnat-thin' size={VALID_SIZES.XL} />
      </a>
    );
  }

  function renderSocial(item) {
    return (
      <a href={item.link} className='footer__social' key={item.iconName}>
        <Icon name={item.iconName} />
      </a>
    );
  }

  function getClassname() {
    return classNames('footer', getModifiers('footer', { nav: hasBottomNav }));
  }

  return (
    <footer className={getClassname()}>
      <div className='footer__right'>
        {renderLogo()}
        <div className='footer__links'>
          <a href='https://sharif.edu' className='footer__link'>
            درباره ما
          </a>
          <hr className='footer__divider' />
          <a href='https://ee.sharif.edu' className='footer__link'>
            سایت رسمی دانشکده مهندسی برق
          </a>
          <hr className='footer__divider' />
          <a href='https://ee.sharif.edu/~resana' className='footer__link'>
            صفحه اصلی انجمن عملی و فرهنگی رسانا
          </a>
        </div>
      </div>
      <div>{SOCIAL_LINKS.map(renderSocial)}</div>
    </footer>
  );
}

Footer.defaultProps = {
  hasBottomNav: false,
};

Footer.propTypes = {
  hasBottomNav: PropTypes.bool,
};

export default Footer;
