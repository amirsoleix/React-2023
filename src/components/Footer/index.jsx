import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getModifiers } from 'src/utils/classname';
import Icon from 'src/components/Icon';
import reactIcon from 'src/assets/images/react-logo-black.png'
import yektanetLogo from 'src/assets/images/yektanet.png'
import tabdilLogo from 'src/assets/images/tabdil.png'
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
      {/* <div className='footer__right'>
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
      </div> */}
      <div className='footer__top'>
        <div className='footer__top__side1'>
          <div className='footer__top__item'>
            <img className='footer__top__item__logo' src={reactIcon} alt='react-logo'></img>
          </div>
          <div className='footer__top__item'>
            <h4 className='footer__top__item__item'>
              Home
            </h4>
            <h4 className='footer__top__item__item'>
              Histoty
            </h4>
            <h4 className='footer__top__item__item'>
              Staff
            </h4>
          </div>
        </div>
        <div className='footer__top__side2'>
          <div className='footer__top__item'>
            <h4 className='footer__top__item__item'>
              Timeline
            </h4>
            <h4 className='footer__top__item__item'>
              Speakers
            </h4>
          </div>
          <div className='footer__top__item' style={{gap: '20px'}}>
            <img className='footer__top__item__logo' src={yektanetLogo} alt='yektanet-logo' style={{width: '50%'}}></img>
            <img className='footer__top__item__logo' src={tabdilLogo} alt='tabdil-logo'></img>
          </div>
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
