import HowToRegIcon from '@mui/icons-material/HowToReg';
import EmailIcon from '@mui/icons-material/Email';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

let events = [
  {
    name: 'Registration',
    date: 'March 1st - 15th, 2023',
    text: 'Registration will be open to everyone during this time period.',
    icon: <HowToRegIcon />,
    color: 'secondary',
  },
  {
    name: 'Coordination Email',
    date: 'March 20th, 2023',
    text: 'An email containing your login information will be sent.',
    icon: <EmailIcon />,
    color: 'primary',
  },
  {
    name: 'Opening',
    date: 'March 22nd, 2023',
    text: 'The conference will officially open.',
    icon: <FlagCircleIcon />,
    color: 'success',
  },
  {
    name: 'Speakers Timeline',
    date: 'March 22nd - 26th, 2023',
    text: 'Speakers will be presenting their research.',
    icon: <CoPresentIcon />,
    color: 'warning',
  },
  {
    name: 'Closing',
    date: 'March 26th, 2023',
    text: 'The conference will officially close.',
    icon: <PauseCircleFilledIcon />,
    color: 'error',
  },
];

export default events;
