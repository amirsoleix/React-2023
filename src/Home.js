import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Showroom from 'src/components/Showroom';
import SpeakerPanel from 'src/components/SpeakerPanel';
import StaffPanel from 'src/components/StaffPanel';
import Footer from 'src/components/Footer';
import Timeline from './components/Timeline';
// import ReActTimeline from 'src/components/Timeline';
import ArticlePreview from 'src/components/ArticlePreview';
import Registration from 'src/components/Registration';
import History from 'src/components/History';

import { BUTTONS, SPEAKERS2023 } from 'src/constants';
import 'src/styles/main.scss';
import './Home.scss';
import ResponsiveAppBar from 'src/components/Navbar';
import PresentationTimeline from './components/PresentationsTimeline';
import small_background from 'src/assets/images/small-background.png';
import routes from 'src/configs/routes';
// import background from 'src/assets/images/background.jpg';

class Home extends React.Component {
  handleClick(i) {
    for (let j = 0; j < BUTTONS.length; j++) {
      if (i === 'registration') {
        let url = window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, '/');
        if (url === '/') {
          window.scroll({
            top: document.getElementById('registration').offsetTop - 75,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          window.location.href = '/';
          window.scroll({
            top: document.getElementById('registration').offsetTop - 75,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
      if (BUTTONS[j][3] === i) {
        for (let k = 0; k < routes.length; k++) {
          if (routes[k].id === i) {
            if (routes[k].type === 'inPage') {
              window.scroll({
                top: document.getElementById(i).offsetTop - 75,
                left: 0,
                behavior: 'smooth',
              });
            }
          }
        }
      }
    }
  }

  BottomNav() {
    return <div className='bottom-nav'></div>;
  }

  Presentations() {
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

  RegistrationPanel() {
    return <Registration title='Registration' />;
  }

  HistoryPreview() {
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

  Home() {
    return (
      <div className='home'>
        <Showroom />
        <div className='home__container'>
          <div className='home__content'>
            <div className='home__content__inside'>{this.HistoryPreview()}</div>
            <img
              className='home_content_inside_background'
              src={small_background}
              alt='background'
            ></img>
            <div className='home__content__inside'>
              <div id='timeline'>
                <Timeline />
              </div>
            </div>
            <div id='registration'>
              <this.RegistrationPanel />
            </div>
            <div className='home__content__inside'>
              <div id='speakerPanel'>
                <SpeakerPanel posts={SPEAKERS2023} className='speaker__main' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <ResponsiveAppBar
          key={'ResponsiveAppBar'}
          buttons={BUTTONS}
          onClick={(i) => this.handleClick(i)}
        />
        <Routes key={'Routes'}>
          <Route key={0} path='/' exact element={this.Home()} />
          <Route
            key={1}
            path='/staff'
            element={<StaffPanel className='staff__main' />}
          />
          <Route key={2} path='/history' element={<History />} />
        </Routes>
        <Footer hasBottomNav key={'Footer'} />
      </Router>
    );
  }
}

export default Home;
