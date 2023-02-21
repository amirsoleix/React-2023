import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Showroom.scss';

import imgs from 'src/assets/slideshow/img-ss.jpg';
import img0 from 'src/assets/slideshow/img-00.jpg';
import img1 from 'src/assets/slideshow/img-01.jpg';
import img2 from 'src/assets/slideshow/img-02.jpg';
import img3 from 'src/assets/slideshow/img-03.jpg';
import img4 from 'src/assets/slideshow/img-04.jpg';
import img5 from 'src/assets/slideshow/img-05.jpg';
import img6 from 'src/assets/slideshow/img-06.jpg';
import img7 from 'src/assets/slideshow/img-07.jpg';
import img8 from 'src/assets/slideshow/img-08.jpg';
import reactLogo from 'src/assets/images/react-logo-black.png';
// import reactLogoWhite from 'src/assets/images/react-logo.png';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSRhgUyj8ThQWdkZLV8NQWC8m7sFYw1ygWGVDTa9par32ilU-at8epdU6pR5Ol5xSIyQlaQnc6XCujx/pub?output=csv';

const downloadFile = async (url) => {
  const response = await fetch(url);
  const data = await response.text();

  // Remove the first line
  const rows = data.split('\n').slice(1);
  // For each row only keep what's after ,
  const newData = rows.map((row) => row.split(',')[1]);
  return newData;
};

let slideImages = [
  {
    url: imgs,
    alt: 'imgs',
    caption: 'Image s',
  },
  {
    url: img0,
    alt: 'img0',
    caption: 'Image 0',
  },
  {
    url: img1,
    alt: 'img1',
    caption: 'Image 1',
  },
  // {
  //   url: img2,
  //   alt: 'img2',
  //   caption: 'Image 2',
  // },
  // {
  //   url: img3,
  //   alt: 'img3',
  //   caption: 'Image 3',
  // },
  // {
  //   url: img4,
  //   alt: 'img4',
  //   caption: 'Image 4',
  // },
  // {
  //   url: img5,
  //   alt: 'img5',
  //   caption: 'Image 5',
  // },
  // {
  //   url: img6,
  //   alt: 'img6',
  //   caption: 'Image 6',
  // },
  // {
  //   url: img7,
  //   alt: 'img7',
  //   caption: 'Image 7',
  // },
  // {
  //   url: img8,
  //   alt: 'img8',
  //   caption: 'Image 8',
  // },
];

downloadFile(url).then((data) => {
  // For each url in data, download the image using Google drive API
  data.forEach((url, index) => {
    // Get the file id from the url
    let fileId = url.split('=')[1];
    let picUrl = `http://drive.google.com/uc?id=${fileId}`;
    slideImages.push({
      url: picUrl,
      alt: `img${index}`,
      caption: `Image ${index}`,
    });
  });
});

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
    const countDownDate = new Date('February 22, 2023 15:00:00').getTime();
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
            <Slide {...properties}>
              {slideImages.map((image, index) => (
                <div className='each-slide' key={index}>
                  <div
                    className='slide__image'
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
            <div className='showroom__content__inside'>
              <img
                className='showroom__title'
                src={reactLogo}
                alt='react-logo'
              ></img>
              <p className='showroom__title_discription'></p>
              {this.countdown()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showroom;
