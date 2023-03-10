import 'src/profiles';

import alexandre_alahi from 'src/assets/speakers2023/alexandre-alahi/profile.jpg';
import alireza_khaligh from 'src/assets/speakers2023/alireza-khaligh/profile.jpg';
import amin_babazadeh from 'src/assets/speakers2023/amin-babazadeh/profile.jpg';
// import hesaam_esfandyarpour from 'src/assets/speakers2023/hesam-esfandiarpour/profile.jpg';
import iman_askarian from 'src/assets/speakers2023/iman-askarian/profile.jpg';
import jasmin_farshi from 'src/assets/speakers2023/jasmin-farshi/profile.jpg';
import kousha_kalantari from 'src/assets/speakers2023/kousha-kalantari/profile.jpg';
import mohammad_akbarpour from 'src/assets/speakers2023/mohammad-akbarpour/profile.jpg';
import mohammad_alizadeh from 'src/assets/speakers2023/mohammad-alizadeh/profile.jpg';
import mohammadHossein_nabian from 'src/assets/speakers2023/mohammadHossein-nabian/profile.jpg';
import mohammadHossein_rohban from 'src/assets/speakers2023/mohammadHossein-rohban/profile.jpg';
import mohammad_khosravi from 'src/assets/speakers2023/mohammad-khosravi/profile.jpg';
import mohammad_samizadeh from 'src/assets/speakers2023/mohammad-samizadeh/profile.jpg';
import mohammad_shahidehpour from 'src/assets/speakers2023/mohammad-shahidehpour/profile.jpg';
import omid_momeni from 'src/assets/speakers2023/omid-momeni/profile.jpg';
import sanaz_sabzevari from 'src/assets/speakers2023/sanaz-sabzevari/profile.jpg';
import shiva_amiri from 'src/assets/speakers2023/shiva-amiri/profile.jpg';
import mohammad_fakharzadeh from 'src/assets/speakers2023/mohammad-fakharzadeh/profile.jpg';
import masoud_malekmohammadi from 'src/assets/speakers2023/masoud-malekmohammadi/profile.jpg';
import mehran_ahmadlou from 'src/assets/speakers2023/mehran-ahmadlou/profile.jpg';

// import dehghan_niloufar from 'src/assets/staff/niloufar-dehghan.jpg';
// import asemi_parsa from 'src/assets/staff/parsa-asemi.jpg';
// import shahbazian_mohammadhasan from 'src/assets/staff/hasan-shahbazian.jpg';
// import nourian_ali from 'src/assets/staff/ali-nourian.jpg';
// import mostaghis_amirali from 'src/assets/staff/amirali-mostaghis.jpg';
// import mousavi_yasin from 'src/assets/staff/yasin-mousavi.jpg';
// import eghlimi_mohammadamin from 'src/assets/staff/mohammadamin-eghlimi.jpg';
// import heidari_mahdi from 'src/assets/staff/mahdi-heidari.jpg';
// import toumari_parisa from 'src/assets/staff/parisa-toumari.jpg';
// import mehtash_shervin from 'src/assets/staff/shervin-mehrtash.jpg';
// import taji_mehrshad from 'src/assets/staff/mehrshad-taji.jpg';
// import soleimanifar_amir from 'src/assets/staff/amir-soleimanifar.jpg';

const SPEAKERS_NAMES = [
  'jasmin-farshi',
  'mohammad-shahidehpour',
  'alexandre-alahi',
  'mohammad-samizadeh',
  'alireza-khaligh',
  'mohammad-alizadeh',
  'shiva-amiri',
  'mohammad-akbarpour',
  'mehran-ahmadlou',
  'omid-momeni',
  'mohammad-hossein-rohban',
  // 'hesaam-esfandyarpour',
  'mohammad-hossein-nabian',
  'amin-babazadeh',
  'kousha-kalantari',
  'sanaz-sabzevari',
  'iman-askarian',
  'mohammad-khosravi',
  'mohammad-fakharzadeh',
  'masoud-malekmohammadi',
];

const SPEAKER_TIMES = [
  'Feb 24, 8:00 - 9:00',
  'Feb 23, 18:00 - 19:00',
  'Feb 22, 12:50 - 13:40',
  'Feb 24, 10:00 - 11:00',
  'Feb 24, 10:00 - 10:50',
  'Feb 24, 17:00 - 17:50',
  'Feb 23, 9:00 - 10:00',
  'Feb 23, 10:00 - 11:00',
  'Feb 24, 11:00 - 12:00',
  'Feb 24, 20:00 - 20:50',
  'Feb 23, 11:00 - 12:00',
  'Feb 22, 11:50 - 12:40',
  'Feb 22, 16:30 - 17:40',
  'Feb 22, 10:15 - 11:00',
  'Feb 24, 18:00 - 18:50',
  'Feb 22, 17:50 - 18:50',
  'Feb 23, 15:40 - 16:30',
  'Feb 22, 9:15 - 10:00',
  'Feb 23, 17:00 - 18:00',
];

const SPEAKERS_IMAGES = [
  jasmin_farshi,
  mohammad_shahidehpour,
  alexandre_alahi,
  mohammad_samizadeh,
  alireza_khaligh,
  mohammad_alizadeh,
  shiva_amiri,
  mohammad_akbarpour,
  mehran_ahmadlou,
  omid_momeni,
  mohammadHossein_rohban,
  // hesaam_esfandyarpour,
  mohammadHossein_nabian,
  amin_babazadeh,
  kousha_kalantari,
  sanaz_sabzevari,
  iman_askarian,
  mohammad_khosravi,
  mohammad_fakharzadeh,
  masoud_malekmohammadi,
];

const SPEAKERS_LOCATIONS = [
  'Amazon',
  'Illinois',
  'EPFL',
  'ETH ',
  'MARYLAND',
  'MIT',
  'Pivotal Life Sciences',
  'Stanford',
  'University College London',
  'UC Davis',
  'Sharif University of Technology',
  // 'GNOS',
  'Tehran University',
  'University of Vienna',
  'Amazon',
  'KTH',
  'Sharif University of Technology',
  'Delft',
  'Sharif University of Technology',
  'Tabdeal',
];

let FOLDERS2023 = [];

for (let i = 0; i < SPEAKERS_NAMES.length; i++) {
  let obj = {
    name: SPEAKERS_NAMES[i],
    figure: SPEAKERS_IMAGES[i],
    location: SPEAKERS_LOCATIONS[i],
    time: SPEAKER_TIMES[i],
  };
  FOLDERS2023.push(obj);
}

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

let SPEAKERS2023 = FOLDERS2023.map((speaker) => ({
  imgUrl: speaker['figure'],
  title: speaker['name']
    .split('-')
    // .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  topDescription: speaker['field'],
  bottomDescription: speaker['location'],
  subtitle: speaker['time'],
  redText: 'More info',
}));

export { BUTTONS, SPEAKERS2023 };
