import React from 'react';

import Navbar from 'src/components/Navbar';
import Showroom from 'src/components/Showroom';
import SpeakerPanel from 'src/components/SpeakerPanel';
import StaffPanel from 'src/components/StaffPanel';
import Footer from 'src/components/Footer';

import { BUTTONS, SPEAKERS, STAFF } from 'src/constants';
import 'src/styles/main.scss';
import './Home.scss';

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
        <Navbar buttons={BUTTONS} onClick={(i) => this.handleClick(i)} />
        <div className='home'>
          <Showroom />
          <div className='home__container'>
            <div className='home__content'>
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
                <Speakers />
                <StaffList />
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
        <Footer hasBottomNav />
      </>
    );
  }
}

function Speakers() {
  return (
    <div id='mic-f'>
      <h2>Previous Speakers</h2>
      <SpeakerPanel posts={SPEAKERS} className='speaker__main' />
    </div>
  );
}

function StaffList() {
  return (
    <div id='social-sonnat-thin'>
      <h2>Staff</h2>
      <StaffPanel posts={STAFF} className='staff__main' />
    </div>
  );
}

function BottomNav() {
  return <div className='bottom-nav'></div>;
}

export default Home;
