import React from 'react';

import Button from '../Button';

import './Navbar.scss';

class Navbar extends React.Component {
  renderButton(props) {
    return (
      <Button
        children={props[0]}
        iconName={props[1]}
        buttonType={props[2]}
        onClick={(i) => this.props.onClick(i)}
      />
    );
  }

  render() {
    let list = this.props.buttons;
    console.log(list);
    let buttons = list.map((row) => {
      return this.renderButton(row);
    });

    return (
      <div className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__right-section'>{buttons}</div>
          <div className='navbar__left-section'>{'ReAct'}</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
