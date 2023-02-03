import React from 'react';

import Showroom from 'src/components/Showroom';
import SpeakerPanel from 'src/components/SpeakerPanel';
import StaffPanel from 'src/components/StaffPanel';
import Footer from 'src/components/Footer';
import ReActTimeline from 'src/components/Timeline';
import ArticlePreview from 'src/components/ArticlePreview';
import AboutEvent from 'src/components/AboutEvent';
import Registration from 'src/components/Registration';

import { BUTTONS, SPEAKERS, STAFF } from 'src/constants';
import 'src/styles/main.scss';
import './Home.scss';
import ResponsiveAppBar from 'src/components/Navbar';
import PresentationTimeline from './components/PresentationsTimeline';
import small_background from 'src/assets/images/small-background.png';
// import background from 'src/assets/images/background.jpg';

class Home extends React.Component {
  handleClick(i) {
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
        </div>
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <HistoryPreview />
              </div>
            </div>
          </div>
        </div>
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <img className='home_content_inside_backgroud' src={small_background} alt='background'></img>
            </div>
          </div>
        </div>
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <div id='remaining-time-o'>
                  <h2>ReACT 2023 Timeline</h2>
                  <ReActTimeline />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <Presentations />
              </div>
            </div>
          </div>
        </div> */}
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <EventDetails />
              </div>
            </div>
          </div>
        </div>
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <RegistrationPart />
              </div>
            </div>
          </div>
        </div>
        <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <Speakers />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='home'>
          <div className='home__container'>
            <div className='home__content'>
              <div className='home__content__inside'>
                <StaffList />
              </div>
            </div>
          </div>
        </div> */}
        <BottomNav />
        <Footer hasBottomNav />
      </>
    );
  }
}

function Presentations() {
  return (
    <PresentationTimeline
      title='Presentation Timeline'
      titleColor=''
      content=''
      contentColor=''
      btnText=''
      btnColor=''
      btnBackgroundColor=''
      backgroundUrl=''
      className=''
    />
  );
}

function RegistrationPart() {
  return (
    <Registration
      title='Registration'
      titleColor=''
      content=''
      contentColor=''
      btnText=''
      btnColor=''
      btnBackgroundColor=''
      backgroundUrl=''
      className=''
    />
  );
}

function EventDetails() {
  return (
    <AboutEvent
      title='What We Do?'
      titleColor=''
      content=''
      contentColor=''
      btnText=''
      btnColor=''
      btnBackgroundColor=''
      backgroundUrl=''
      className=''
    />
  );
}

function HistoryPreview() {
  return (
    <ArticlePreview
      title="Resana's Annual Confrence on Technology"
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
