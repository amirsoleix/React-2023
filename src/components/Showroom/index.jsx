import React from 'react';

import './Showroom.scss';

class Showroom extends React.Component {
  render() {
    return (
      <div className='showroom'>
        <div className='showroom__container'>
          <div className='showroom__content'>
            <div className='logo__container'>
              <div className='logo__icon'>
                <div className='logo__icon__shadow'></div>
              </div>
            </div>
            <h1 className='showroom__title'>ReAct is HERE</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Showroom;
