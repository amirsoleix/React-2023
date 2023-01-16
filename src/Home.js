import React from 'react';

import Navbar from './components/Navbar';
import Showroom from './components/Showroom';

import './styles/main.scss';
import './Home.scss';

let BUTTONS = [
  ['Home', 'home-outline', 'default'],
  ['Timeline', 'remaining-time-o', 'default'],
  ['Speakers', 'mic-f', 'default'],
  ['Registration', 'check-circle', 'default'],
  ['Staff', 'social-sonnat-thin', 'default'],
  ['Sponsors', 'gift-o', 'default'],
];

class Home extends React.Component {
  handleClick(i) {
    for (let j = 0; j < BUTTONS.length; j++) {
      if (BUTTONS[j][1] === i) {
        document.getElementById(i).scrollIntoView();
      }
    }
  }

  render() {
    return (
      <>
        <Helmet />
        <Navbar buttons={BUTTONS} onClick={(i) => this.handleClick(i)} />
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <Showroom />
              <div className='home__content__inside'>
                <div id='home'>
                  <h1>Home</h1>
                </div>
                <div id='check-o'>
                  <h1>About</h1>
                </div>
                <div id='contact'>
                  <h1>Contact</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </>
    );
  }
}

function Helmet() {
  return (
    <div>
      <title>ReAct</title>
    </div>
  );
}

function BottomNav() {
  return <div className='bottom-nav'></div>;
}

export default Home;
