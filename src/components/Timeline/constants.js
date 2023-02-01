import HowToRegIcon from '@mui/icons-material/HowToReg';
import EmailIcon from '@mui/icons-material/Email';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

let events = [
  {
    name: 'Speakers and Topics',
    date: 'February 5th, 2023',
    text: 'The speakers and topics will be announced.',
    icon: <EmailIcon />,
    color: 'primary',
  },
  {
    name: 'Registration',
    date: 'February 9th - 16th, 2023',
    text: 'Registration will be open to everyone during this time period.',
    icon: <HowToRegIcon />,
    color: 'secondary',
  },
  {
    name: 'Opening',
    date: 'February 22nd, 2023',
    text: 'The conference will be officially opened.',
    icon: <FlagCircleIcon />,
    color: 'success',
  },
  {
    name: 'Speakers Timeline',
    date: 'February 22nd - 24th, 2023',
    text: 'Speakers will be presenting their research.',
    icon: <CoPresentIcon />,
    color: 'warning',
  },
  {
    name: 'Closing',
    date: 'February 24th, 2023',
    text: 'The conference will be officially closed.',
    icon: <PauseCircleFilledIcon />,
    color: 'error',
  },
];

export default events;
