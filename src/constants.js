import 'src/profiles';

import amirparviz_babak from 'src/assets/speakers/amirparviz-babak/profile.jpg';
import azimian_kooshiar from 'src/assets/speakers/azimian-kooshiar/profile.jpg';
import jarrahi_mona from 'src/assets/speakers/jarrahi-mona/profile.jpg';
import talasaz_amirali from 'src/assets/speakers/talasaz-amirali/profile.jpg';
import bayati_mohsen from 'src/assets/speakers/bayati-mohsen/profile.jpg';
import valaee_shahrokh from 'src/assets/speakers/valaee-shahrokh/profile.jpg';
import babadi_behtash from 'src/assets/speakers/babadi-behtash/profile.jpg';
import karbasi_amin from 'src/assets/speakers/karbasi-amin/profile.png';
import minaee_shervin from 'src/assets/speakers/minaee-shervin/profile.png';
import tefagh_mojtaba from 'src/assets/speakers/tefagh-mojtaba/profile.jpg';

import nourian_ali from 'src/assets/staff/nourian-ali.jpg';
import soleimanifar_amir from 'src/assets/staff/soleimanifar-amir.jpg';
import chitsaz_amirhossein from 'src/assets/staff/chitsaz-amirhossein.jpg';
import unknown_yasin from 'src/assets/staff/unknown-yasin.jpg';
import rafiei_ainaz from 'src/assets/staff/rafiei-ainaz.jpg';

let FOLDERS = [
  {
    name: 'amirparviz-babak',
    figure: amirparviz_babak,
    location: 'Amazon',
    field: 'Grand Challenge Project',
  },
  {
    name: 'azimian-kooshiar',
    figure: azimian_kooshiar,
    location: 'FaceBook Inc.',
    field: 'Disruptive Technologies',
  },
  {
    name: 'jarrahi-mona',
    figure: jarrahi_mona,
    location: 'UCLA',
    field: 'Terahertz Technology',
  },
  {
    name: 'talasaz-amirali',
    figure: talasaz_amirali,
    location: 'Guardant Health',
    field: 'Cancer Therapeutics',
  },
  {
    name: 'bayati-mohsen',
    figure: bayati_mohsen,
    location: 'Stanford',
    field: 'Machine-learning in Healthcare',
  },
  {
    name: 'valaee-shahrokh',
    figure: valaee_shahrokh,
    location: 'University of Toronto',
    field: 'Wireless Systems',
  },
  {
    name: 'babadi-behtash',
    figure: babadi_behtash,
    location: 'University of Maryland',
    field: 'Neural Functional Networks',
  },
  {
    name: 'karbasi-amin',
    figure: karbasi_amin,
    location: 'Yale University',
    field: 'Adaptive Stochastic Optimization',
  },
  {
    name: 'minaee-shervin',
    figure: minaee_shervin,
    location: 'Ericsson Inc.',
    field: 'Wireless Communications',
  },
  {
    name: 'tefagh-mojtaba',
    figure: tefagh_mojtaba,
    location: 'Sharif University of Technology',
    field: 'Genome Network Construction',
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
