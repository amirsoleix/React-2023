import * as React from 'react';
// import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Proptypes from 'prop-types';

import Speaker from '../Speaker';
import './SpeakerPanel.scss';

// import babazadeh from 'src/assets/information/babazadeh.jpg';
// import kalantari from 'src/assets/information/kalantari.jpg';

// import farshi from 'src/assets/information/Farshi.jpg';
// import khaligh from 'src/assets/information/Khaligh.jpg';
// import khosravi from 'src/assets/information/Khosravi.jpg';
// import momeni from 'src/assets/information/Momeni.jpg';
// import rohban from 'src/assets/information/Rohban.jpg';
// import sabzevari from 'src/assets/information/Sabzevari.jpg';
// import shahidehpour from 'src/assets/information/shahidehpour.jpg';
// import alahi from 'src/assets/information/Alahi.jpg';

const infoHash = {
  // 'Amin Babazadeh': babazadeh,
  // 'Kousha Kalantari': kalantari,
};

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SpeakerPanel({ posts, className, title = 'Speakers', window }) {
  const [open, setOpen] = React.useState(false);
  const [pic, setPic] = React.useState(undefined);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    if (newOpen === false) {
      setTimeout(() => {
        // Set display of swipeable to none
        document.getElementById('swipeable').style.display = 'none';
      }, 500);
    }
  };

  const handleClick = (mainTitle) => {
    if (infoHash[mainTitle]) {
      setPic(infoHash[mainTitle]);
      // Set display of swipeable to block
      document.getElementById('swipeable').style.display = 'block';
      setOpen(true);
    } else {
      setPic(undefined);
    }
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderPosts = () =>
    posts.map((data) => {
      const {
        bottomDescription,
        hasChat,
        imgUrl,
        redText,
        title,
        topDescription,
      } = data;
      return (
        <Speaker
          key={title}
          mainTitle={title}
          imgUrl={imgUrl}
          imgAlt={title}
          subtitle1={topDescription}
          subtitle2={bottomDescription}
          captionRed={redText}
          chat={hasChat}
          onClick={(mainTitle) => handleClick(mainTitle)}
        />
      );
    });

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <Root>
          <CssBaseline />
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                maxHeight: '75%',
                height: `min(75vh, fitcontent)`,
                maxWidth: '1080px',
                margin: 'auto',
                overflow: 'visible',
              },
            }}
          />
          <Box sx={{ textAlign: 'center', pt: 1 }} className={className}>
            {renderPosts()}
          </Box>
          <SwipeableDrawer
            id='swipeable'
            class='drawer'
            container={container}
            anchor='bottom'
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography sx={{ p: 2, color: 'text.secondary' }}>
                More Information
              </Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
              }}
            >
              <img src={pic} className='moreInfo' alt='pic'/>
            </StyledBox>
          </SwipeableDrawer>
        </Root>
      </div>
    </div>
  );
}

SpeakerPanel.defaultProps = {
  posts: [],
};

SpeakerPanel.propTypes = {
  posts: Proptypes.instanceOf(Array),
};

export default SpeakerPanel;
