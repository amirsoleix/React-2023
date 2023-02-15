// Import react
import * as React from 'react';
import Staff from 'src/components/Staff';

import './Department.scss';

export default function NestedGrid(props) {
  const { headTitle, headImgUrl, headSub, departmentName, staffNames } = props;

  function render() {
    if (departmentName === 'Event Head') {
      return (
        <div className='department'>
          <h2 className='department__title'>{'Event Heads'}</h2>
          <Staff
            mainTitle={headTitle[0]}
            imgUrl={headImgUrl[0]}
            imgAlt={headTitle[0]}
            subtitle={'Co-head of Event'}
          />
          <Staff
            mainTitle={headTitle[1]}
            imgUrl={headImgUrl[1]}
            imgAlt={headTitle[1]}
            subtitle={'Co-head of Event'}
          />
        </div>
      );
    } else {
      return (
        <div className='department'>
          <h2 className='department__title'>{departmentName}</h2>
          <Staff
            mainTitle={headTitle}
            imgUrl={headImgUrl}
            imgAlt={headTitle}
            subtitle={headSub}
          />
          <div>
            <h4 className='lightBlack'>
              {staffNames.length !== 0 ? 'Members' : ''}
            </h4>
            <ul className='department__ul'>
              {staffNames ? staffNames.map((name) => <li>{name}</li>) : ''}
            </ul>
          </div>
        </div>
      );
    }
  }

  return render();
}
