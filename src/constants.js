import 'src/profiles';

import amirparviz_babak from 'src/assets/speakers2023/amirparviz-babak/profile.jpg';

import dehghan_niloufar from 'src/assets/staff/niloufar-dehghan.jpg';
import asemi_parsa from 'src/assets/staff/parsa-asemi.jpg';
// import shahbazian_mohammadhasan from 'src/assets/staff/hasan-shahbazian.jpg';
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
  // {
  //   name: 'shahbazian-hasan',
  //   imgUrl: shahbazian_mohammadhasan,
  //   title: 'HR Manager',
  // },
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
  ['History', 'history', 'default', 'history', '/history', 'route'],
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
