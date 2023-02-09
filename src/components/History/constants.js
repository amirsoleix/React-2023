import 'src/profiles';

import baniasadi_narges from 'src/assets/speakers2020/baniasadi-narges/profile.jpeg';
import hamzeloui_sara from 'src/assets/speakers2020/hamzeloui-sara/profile.jpeg';
import heydaribeni_nasimeh from 'src/assets/speakers2020/heydaribeni-nasimeh/profile.jpeg';
import imany_poolad from 'src/assets/speakers2020/imany-poolad/profile.jpeg';
import maddahali_mohammad from 'src/assets/speakers2020/maddahali-mohammad/profile.jpg';
import mazaheri_mohammadhossein from 'src/assets/speakers2020/mazaheri-mohammadhossein/profile.jpeg';
import mohammad_sendi from 'src/assets/speakers2020/mohammad-sendi/profile.jpg';

import amirparviz_babak from 'src/assets/speakers2021/amirparviz-babak/profile.jpg';
import azimian_kooshiar from 'src/assets/speakers2021/azimian-kooshiar/profile.jpg';
import jarrahi_mona from 'src/assets/speakers2021/jarrahi-mona/profile.jpg';
import talasaz_amirali from 'src/assets/speakers2021/talasaz-amirali/profile.jpg';
import bayati_mohsen from 'src/assets/speakers2021/bayati-mohsen/profile.jpg';
import valaee_shahrokh from 'src/assets/speakers2021/valaee-shahrokh/profile.jpg';
import babadi_behtash from 'src/assets/speakers2021/babadi-behtash/profile.jpg';
import karbasi_amin from 'src/assets/speakers2021/karbasi-amin/profile.png';
import minaee_shervin from 'src/assets/speakers2021/minaee-shervin/profile.png';
import tefagh_mojtaba from 'src/assets/speakers2021/tefagh-mojtaba/profile.jpg';
import tavafoghi_hamidreza from 'src/assets/speakers2021/tavafoghi-hamidreza/profile.jfif';
import haghi_benyamin from 'src/assets/speakers2021/haghi-benyamin/profile.jpg';

let FOLDERS2020 = [
  {
    name: 'baniasadi-narges',
    figure: baniasadi_narges,
  },
  {
    name: 'hamzeloui-sara',
    figure: hamzeloui_sara,
  },
  {
    name: 'heydaribeni-nasimeh',
    figure: heydaribeni_nasimeh,
  },
  {
    name: 'imany-poolad',
    figure: imany_poolad,
  },
  {
    name: 'maddahali-mohammad',
    figure: maddahali_mohammad,
  },
  {
    name: 'mazaheri-mohammadhossein',
    figure: mazaheri_mohammadhossein,
  },
  {
    name: 'mohammad-sendi',
    figure: mohammad_sendi,
  },
];

let FOLDERS2021 = [
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

let SPEAKERS2020 = FOLDERS2020.map((speaker) => ({
  imgUrl: speaker['figure'],
  title: speaker['name']
    .split('-')
    .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  redText: 'More info',
}));

let SPEAKERS2021 = FOLDERS2021.map((speaker) => ({
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

export { SPEAKERS2020, SPEAKERS2021 };
