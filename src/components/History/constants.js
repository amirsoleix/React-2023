import 'src/profiles';

import baniasadi_narges from 'src/assets/speakers2020/baniasadi-narges/profile.jpeg';
import hamzeloui_sara from 'src/assets/speakers2020/hamzeloui-sara/profile.jpeg';
import heydaribeni_nasimeh from 'src/assets/speakers2020/heydaribeni-nasimeh/profile.jpeg';
import imany_poolad from 'src/assets/speakers2020/imany-poolad/profile.jpeg';
import maddahali_mohammad from 'src/assets/speakers2020/maddahali-mohammad/profile.jpg';
import mazaheri_mohammadhossein from 'src/assets/speakers2020/mazaheri-mohammadhossein/profile.jpeg';
import mohammad_sendi from 'src/assets/speakers2020/mohammad-sendi/profile.jpg';

let FOLDERS = [
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

let SPEAKERS2020 = FOLDERS.map((speaker) => ({
  imgUrl: speaker['figure'],
  title: speaker['name']
    .split('-')
    .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  redText: 'More info',
}));

export { SPEAKERS2020 };
