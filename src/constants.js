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
import tavafoghi_hamidreza from 'src/assets/speakers/tavafoghi-hamidreza/profile.jfif';
import haghi_benyamin from 'src/assets/speakers/haghi-benyamin/profile.jpg';

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
  {
    name: 'tavafoghi-hamidreza',
    figure: tavafoghi_hamidreza,
    location: 'Google',
    field: 'Ads. Market Modeling & Optimization',
  },
  {
    name: 'haghi-Benyamin',
    figure: haghi_benyamin,
    location: 'Caltech',
    field: 'Brain Machine Interface Alghorithms',
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
    title: 'Tech. Manager',
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
    title: 'Adv. Manager',
  },
  {
    name: 'mehrtash-shervin',
    img: mehtash_shervin,
    title: 'Relations Manager',
  },
  {
    name: 'taji-mehrshad',
    img: taji_mehrshad,
    title: 'Dev. Manager',
  },
  {
    name: 'soleimanifar-amir',
    imgUrl: soleimanifar_amir,
    title: 'Web Developer',
  },
];

// For each folder import the profile picture

let BUTTONS = [
  ['Home', 'home-outline', 'default', 'home', '/', 'route'],
  ['Timeline', 'remaining-time-o', 'default', 'timeline', '/', 'inPage'],
  ['Staff', 'social-sonnat-thin', 'default', 'staff', '/staff', 'route'],
  // ['History', 'social-sonnat-thin', 'default'],
  // ['Registration', 'check-circle', 'default'],
  ['Speakers', 'mic-f', 'default', 'speakerPanel', '/', 'inPage'],
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
