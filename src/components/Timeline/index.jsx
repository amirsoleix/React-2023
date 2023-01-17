import React from 'react';

import './Timeline.scss';

class TimelineItem extends React.Component {
  render() {
    const { date, title, body, direction } = this.props;

    return (
      <div className='timeline-item'>
        <div className={'timeline-item__content' + { direction }}>
          <h2 className='timeline-item__content__title'>{title}</h2>
          <span className='timeline-item__content__date'>{date}</span>
          <p className='timeline-item__content__body'>{body}</p>
        </div>
      </div>
    );
  }
}

class Timeline extends React.Component {
  render() {
    const { title, items } = this.props;

    return (
      <div className='timeline'>
        <div className='timeline__container'>
          <div className='timeline__content'>
            <h2 className='timeline__content__title'>{title}</h2>
            <div className='timeline__content__items'>
              {items.map((item, index) => (
                <TimelineItem
                  key={index}
                  date={item.date}
                  title={item.title}
                  body={item.body}
                  direction={item.direction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
