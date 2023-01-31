import 'src/profiles';

import abdali_iman from 'src/assets/speakers/abdali-iman/profile.jpg';
import akbar_fatemeh from 'src/assets/speakers/akbar-fatemeh/profile.jpg';
import amini_arash from 'src/assets/speakers/amini-arash/profile.jpg';
import amirparviz_babak from 'src/assets/speakers/amirparviz-babak/profile.jpg';
import ashtiani_farid from 'src/assets/speakers/ashtiani-farshid/profile.jpg';
import azimian_kooshiar from 'src/assets/speakers/azimian-kooshiar/profile.jpg';
import babadi_behtash from 'src/assets/speakers/babadi-behtash/profile.jpg';
import babashah_hossein from 'src/assets/speakers/babashah-hossein/profile.jpg';

import dehghan_niloufar from 'src/assets/staff/niloufar-dehghan.jpg';
import asemi_parsa from 'src/assets/staff/parsa-asemi.jpg';
import shahbazian_mohammadhasan from 'src/assets/staff/hasan-shahbazian.jpg';
import nourian_ali from 'src/assets/staff/ali-nourian.jpg';
import mostaghis_amirali from 'src/assets/staff/amirali-mostaghis.jpg';
import mousavi_yasin from 'src/assets/staff/yasin-mousavi.jpg';
import eghlimi_mohammadamin from 'src/assets/staff/mohammadamin-eghlimi.jpg';
import heidari_mahdi from 'src/assets/staff/mahdi-heidari.jpg';
import toumari_parisa from 'src/assets/staff/parisa-toumari.jpg';
import mehtash_shervin from 'src/assets/staff/shervin-mehrtash.jpg';
import taji_mehrshad from 'src/assets/staff/mehrshad-taji.jpg';
import soleimanifar_amir from 'src/assets/staff/amir-soleimanifar.jpg';

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
    name: 'dehghan-niloufar',
    imgUrl: dehghan_niloufar,
    title: 'Event Head',
  },
  {
    name: 'asemi-parsa',
    imgUrl: asemi_parsa,
    title: 'Event Head',
  },
  {
    name: 'shahbazian-hasan',
    imgUrl: shahbazian_mohammadhasan,
    title: 'HR Manager',
  },
  {
    name: 'nourian-ali',
    imgUrl: nourian_ali,
    title: 'Technical Manager',
  },
  {
    name: 'mostaghis-amirali',
    imgUrl: mostaghis_amirali,
    title: 'Executive Manager',
  },
  {
    name: 'mousavi-yasin',
    img: mousavi_yasin,
    title: 'Sponsoring Manager',
  },
  {
    name: 'eghlimi-amin',
    img: eghlimi_mohammadamin,
    title: 'Financial Manager',
  },
  {
    name: 'heidari-mahdi',
    img: heidari_mahdi,
    title: 'Content Manager',
  },
  {
    name: 'toumari-parisa',
    img: toumari_parisa,
    title: 'Advertising Manager',
  },
  {
    name: 'mehrtash-shervin',
    img: mehtash_shervin,
    title: 'Relations Manager',
  },
  {
    name: 'taji-mehrshad',
    img: taji_mehrshad,
    title: 'Research Manager',
  },
  {
    name: 'soleimanifar-amir',
    imgUrl: soleimanifar_amir,
    title: 'Web Developer',
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
