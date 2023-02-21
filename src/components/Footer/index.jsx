import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getModifiers } from 'src/utils/classname';
import Icon from 'src/components/Icon';
import reactIcon from 'src/assets/images/react-logo-black.png';
import yektanetLogo from 'src/assets/images/yektanet-logo.png';
import tabdilLogo from 'src/assets/images/tabdeal.png';
import academyLogo from 'src/assets/images/academy.png';
// import { VALID_SIZES } from 'src/components/Icon/constants';

import { SOCIAL_LINKS } from './constants';

import './Footer.scss';

function Footer({ hasBottomNav }) {
  // function renderLogo() {
  //   return (
  //     <a href='/' className='footer__link footer__logo'>
  //       <Icon name='social-sonnat-thin' size={VALID_SIZES.XL} />
  //     </a>
  //   );
  // }

  function renderSocial(item) {
    return (
      <a href={item.link} className='footer__social' key={item.iconName}>
        <Icon name={item.iconName} size='XL' />
      </a>
    );
  }

  function getClassname() {
    return classNames('footer', getModifiers('footer', { nav: hasBottomNav }));
  }

  return (
    <footer className={getClassname()}>
      <div className='footer__container'>
        <div className='footer__top'>
          <a id='reactLogo' href='/' rel='noreferrer'>
            <img src={reactIcon} alt='react-logo' width={'150px'}></img>
          </a>
          <a
            id='yektanetLogo'
            href='https://yektanet.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              width={'150px'}
              src={yektanetLogo}
              alt='yektanet-logo'
              // onClick={window.open('https://yektanet.com/', '_blank')}
              style={{ cursor: 'pointer' }}
            ></img>
          </a>

          <a
            id='tabdealLogo'
            href='https://tabdeal.org/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              width={'150px'}
              src={tabdilLogo}
              alt='tabdil-logo'
              // onClick={window.open('https://tabdeal.org/', '_blank')}
              style={{ cursor: 'pointer' }}
            ></img>
          </a>
          <a
            id='academyLogo'
            href='https://hamrah.academy/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              height={'150px'}
              src={academyLogo}
              alt='academy-logo'
              style={{ cursor: 'pointer' }}
            ></img>
          </a>
        </div>
      </div>
      <div className='footer__right'>
        <div className='footer__links'>
          <a href='https://sharif.edu' className='footer__link'>
            About Us
          </a>
          <hr className='footer__divider' />
          <a href='https://ee.sharif.edu' className='footer__link'>
            Electrical Engineering Department Official Website
          </a>
          <hr className='footer__divider' />
          <a href='https://ee.sharif.edu/~resana' className='footer__link'>
            Resana Association Website
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
