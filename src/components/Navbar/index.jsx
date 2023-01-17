import React from 'react';

import Button from '../Button';

import logo from 'src/assets/images/resana.png';

import './Navbar.scss';

class Navbar extends React.Component {
  renderButton(props) {
    return (
      <Button
        key={props[1]}
        children={props[0]}
        iconName={props[1]}
        buttonType={props[2]}
        onClick={(i) => this.props.onClick(i)}
      />
    );
  }

  render() {
    let list = this.props.buttons;
    let buttons = list.map((row) => {
      return this.renderButton(row);
    });

    return (
      <div className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__right-section'>{buttons}</div>
          <div className='navbar__left-section'>
            <img src={logo} className='navbar-logo' alt={'Resana Logo'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
