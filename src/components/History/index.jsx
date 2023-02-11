import React from 'react';

import SpeakerPanel from '../SpeakerPanel';
// import { SPEAKERS } from 'src/constants';
import { SPEAKERS2020, SPEAKERS2021 } from './constants';

import './History.scss';

function History() {
  return (
    <div className='history__container'>
      <div className='articlePreview__title'>
        <h2>{'Introduction'}</h2>
      </div>
      <div className='articlePreview__content'>
        <p>
          ReACT is an annual scientific confrence on technology held by the
          students of Electrical Engineering department at Sharif University of
          Technology to share updates around the fields of electrical
          engineering, computer engineering and computer science. The speakers,
          include professors, managers of well-known companies and graduate
          youth of the electrical engineering، computer science fields. These
          speakers are gathered from lran and all around the world to talk about
          their career path, ideas and research concerning the mentioned topics.
        </p>
      </div>
      <div className='articlePreview__title'>
        <h2>{'History'}</h2>
      </div>
      <div className='articlePreview__content'>
        <p>
          ReACT was first held in 2020 within the student community of Sharif
          University of Technology followed by the 2021 event with a bigger
          number of audience reaching to almost 1500 people from all around the
          world.
        </p>
        <p>
          The past events were held online due to the pandemic. Speakers from
          all around the world presented either online or in person at the
          location of the event and participants watched and made good use of
          the presentations using an online platform.
        </p>
      </div>
      <div className='articlePreview__title'>
        <h2>{'ReACT 2023'}</h2>
      </div>
      <div className='articlePreview__content'>
        <p>
          ReACT 2023 will be held in person at Sharif University of Technology
          while being broadcasted online, with some related workshops and
          exhibitions for interested people from the scientific community and
          many people in top companies and startups both from Iran and the
          world.
        </p>
        <p>
          This event is especially useful for those who want to educate
          themselves on the recent progress of cutting edge technologies and get
          to know, talk in person and connect with the most reputable people in
          the mentioned fields as well as other participants.
        </p>
      </div>
      <div id='speakerPanel'>
        <SpeakerPanel
          posts={SPEAKERS2021}
          title={'Previous Speakers 2021'}
          className='speaker__main'
        />
      </div>
      <div id='speakerPanel'>
        <SpeakerPanel
          posts={SPEAKERS2020}
          title={'Previous Speakers 2020'}
          className='speaker__main'
        />
      </div>
    </div>
  );
}

export default History;
