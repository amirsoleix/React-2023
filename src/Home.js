import React from 'react';

import Showroom from 'src/components/Showroom';
import SpeakerPanel from 'src/components/SpeakerPanel';
import StaffPanel from 'src/components/StaffPanel';
import Footer from 'src/components/Footer';
import ReActTimeline from './components/Timeline';
import ArticlePreview from 'src/components/ArticlePreview';

import { BUTTONS, SPEAKERS, STAFF } from 'src/constants';
import 'src/styles/main.scss';
import './Home.scss';
import ResponsiveAppBar from 'src/components/Navbar';

class Home extends React.Component {
  handleClick(i) {
    console.log('Click by' + i);
    for (let j = 0; j < BUTTONS.length; j++) {
      if (BUTTONS[j][1] === i) {
        console.log('Got Match');
        window.scroll({
          top: document.getElementById(i).offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }

  render() {
    return (
      <>
        <ResponsiveAppBar
          buttons={BUTTONS}
          onClick={(i) => this.handleClick(i)}
        />
        <div className='home'>
          <Showroom />
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <div id='remaining-time-o'>
                  <h2>Event Timeline</h2>
                  <ReActTimeline />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='social-sonnat-thin'>
          <HistoryPreview />
        </div>
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
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

function HistoryPreview() {
  return (
    <ArticlePreview
      title='History'
      titleColor=''
      content='ReACT is an annual scientific confrence on
      technology held by the students of Electrical
      Engineering department at Sharif University of
      Technology to share updates around the fields of
      electrical engineering, computer engineering and
      computer science. The speakers, include
      professors, managers of well-known companies
      and graduate youth of the electrical engineering، computer science fields.
      These speakers are gathered from lran and
      all around the world to talk about their career
      path, ideas and research concerning the mentioned topics.'
      contentColor=''
      btnText='Read More'
      btnColor=''
      btnBackgroundColor=''
      backgroundUrl=''
      className=''
    />
  );
}

export default Home;
