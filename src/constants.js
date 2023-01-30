import 'src/profiles';

import abdali_iman from 'src/assets/speakers/abdali-iman/profile.jpg';
import akbar_fatemeh from 'src/assets/speakers/akbar-fatemeh/profile.jpg';
import amini_arash from 'src/assets/speakers/amini-arash/profile.jpg';
import amirparviz_babak from 'src/assets/speakers/amirparviz-babak/profile.jpg';
import ashtiani_farid from 'src/assets/speakers/ashtiani-farshid/profile.jpg';
import azimian_kooshiar from 'src/assets/speakers/azimian-kooshiar/profile.jpg';
import babadi_behtash from 'src/assets/speakers/babadi-behtash/profile.jpg';
import babashah_hossein from 'src/assets/speakers/babashah-hossein/profile.jpg';

import nourian_ali from 'src/assets/staff/nourian-ali.jpg';
import soleimanifar_amir from 'src/assets/staff/soleimanifar-amir.jpg';
import chitsaz_amirhossein from 'src/assets/staff/chitsaz-amirhossein.jpg';
import unknown_yasin from 'src/assets/staff/unknown-yasin.jpg';
import rafiei_ainaz from 'src/assets/staff/rafiei-ainaz.jpg';

let FOLDERS = [
  {
    name: 'abdali-iman',
    figure: abdali_iman,
    location: 'GaN Systems Inc.',
    field: 'Age-Related Macular Degeneration',
  },
  {
    name: 'akbar-fatemeh',
    figure: akbar_fatemeh,
    location: 'Sharif University of Technology',
    field: 'Driver Assistance Systems',
  },
  {
    name: 'amini-arash',
    figure: amini_arash,
    location: 'Sharif University of Technology',
    field: 'Signals and Systems',
  },
  {
    name: 'amirparviz-babak',
    figure: amirparviz_babak,
    location: 'Amazon',
    field: 'Grand Challenge Project',
  },
  {
    name: 'ashtiani-farshid',
    figure: ashtiani_farid,
    location: 'University of Pennsylvania',
    field: 'Information Technology',
  },
  {
    name: 'azimian-kooshiar',
    figure: azimian_kooshiar,
    location: 'Facebook Inc.',
    field: 'Disruptive Technologies',
  },
  {
    name: 'babadi-behtash',
    figure: babadi_behtash,
    location: 'University of Maryland',
    field: 'Brain Functionality',
  },
  {
    name: 'babashah-hossein',
    figure: babashah_hossein,
    location: 'EPFL',
    field: 'Quantum Sensing',
  },
];

let TEAM = [
  {
    name: 'nourian-ali',
    imgUrl: nourian_ali,
    title: 'Technical Head',
  },
  {
    name: 'soleimanifar-amir',
    imgUrl: soleimanifar_amir,
    title: 'Web Developer',
  },
  {
    name: 'amini-arash',
    imgUrl: amini_arash,
    title: 'Supervisor',
  },
  {
    name: 'unknown-yasin',
    img: unknown_yasin,
    title: 'Sponsoring Head',
  },
  {
    name: 'chitsaz-amirhossein',
    img: chitsaz_amirhossein,
    title: 'Sponsoring',
  },
  {
    name: 'rafiei-ainaz',
    img: rafiei_ainaz,
    title: 'Sponsoring',
  },
];

// For each folder import the profile picture

let BUTTONS = [
  ['Home', 'home-outline', 'default'],
  ['Timeline', 'remaining-time-o', 'default'],
  ['History', 'social-sonnat-thin', 'default'],
  ['Registration', 'check-circle', 'default'],
  ['Speakers', 'mic-f', 'default'],
];

// let BUTTONS = [
//   ['Home', 'home-outline', 'default'],
//   ['Timeline', 'remaining-time-o', 'default'],
//   ['Speakers', 'mic-f', 'default'],
//   ['Registration', 'check-circle', 'default'],
//   ['Staff', 'social-sonnat-thin', 'default'],
//   ['Sponsors', 'gift-o', 'default'],
// ];

let SPEAKERS = FOLDERS.map((speaker) => ({
  imgUrl: speaker['figure'],
  title: speaker['name']
    .split('-')
    .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  topDescription: speaker['field'],
  bottomDescription: speaker['location'],
  redText: 'More info',
}));

let STAFF = TEAM.map((staff) => ({
  title: staff['name']
    .split('-')
    .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  imgUrl: staff['imgUrl'],
  subtitle: staff['title'],
}));

export { BUTTONS, SPEAKERS, STAFF };
