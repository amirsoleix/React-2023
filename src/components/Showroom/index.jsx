import React from 'react';

import './Showroom.scss';

class Showroom extends React.Component {
  // Set now time to state
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
  }

  // Update now time every second
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  countdown() {
    const countDownDate = new Date('March 10, 2023 15:00:00').getTime();
    const now = this.state.now;
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return (
      <div className='countdown'>
        <div className='countdown__container'>
          <div className='countdown__content'>
            <div className='countdown__content__item'>
              <div>{days}</div>
              <div>{'Days'}</div>
            </div>
            <div className='countdown__content__item'>
              <div>{hours}</div>
              <div>{'Hours'}</div>
            </div>
            <div className='countdown__content__item'>
              <div>{minutes}</div>
              <div>{'Minutes'}</div>
            </div>
            <div className='countdown__content__item'>
              <div>{seconds}</div>
              <div>{'Seconds'}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='showroom' id='home-outline'>
        <div className='showroom__container'>
          <div className='showroom__content'>
            <div className='logo__container'>
              <div className='logo__icon'>
                <div className='logo__icon__shadow'></div>
              </div>
            </div>
            <h1 className='showroom__title'>ReAct is HERE</h1>
            {this.countdown()}
          </div>
        </div>
      </div>
    );
  }
}

export default Showroom;
