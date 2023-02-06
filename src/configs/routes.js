import SpeakerPanel from 'src/components/StaffPanel';
import ReActTimeline from 'src/components/Timeline';
import StaffList from 'src/components/StaffPanel';

const routes = [
  {
    id: 'timeline',
    component: ReActTimeline,
    type: 'inPage',
    source: '/',
  },
  {
    id: 'speakerPanel',
    component: SpeakerPanel,
    type: 'inPage',
    source: '/',
  },
  {
    id: 'staff',
    component: StaffList,
    link: '/staff',
    type: 'route',
    source: '/staff',
  },
];

export default routes;
