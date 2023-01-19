import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import events from './constants';
import { blue, green, yellow, orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
    success: {
      main: green,
    },
    warning: {
      main: yellow,
    },
    error: {
      main: red,
    },
  },
});

function ReActTimeline() {
  const items = events.map((event, index) => {
    return (
      <TimelineItem key={event.title}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align={index % 2 === 0 ? 'right' : 'left'}
          variant='body2'
          color='text.secondary'
        >
          {event.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color={event.color}>{event.icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant='h6' component='span'>
            {event.title}
          </Typography>
          <Typography fontSize={'14px'}>{event.text}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
  return (
    <Timeline position='alternate' theme={theme}>
      {items}
    </Timeline>
  );
}

export default ReActTimeline;
