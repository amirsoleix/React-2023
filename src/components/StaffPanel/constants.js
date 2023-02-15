// import dehghan_niloufar from 'src/assets/staff/niloufar-dehghan.jpg';
// import asemi_parsa from 'src/assets/staff/parsa-asemi.jpg';
import shahbazian_mohammadhasan from 'src/assets/staff/hasan-shahbazian.jpg';
import nourian_ali from 'src/assets/staff/ali-nourian.jpg';
import mostaghis_amirali from 'src/assets/staff/amirali-mostaghis.jpg';
import mousavi_yasin from 'src/assets/staff/yasin-mousavi.jpg';
import eghlimi_mohammadamin from 'src/assets/staff/mohammadamin-eghlimi.jpg';
import heidari_mahdi from 'src/assets/staff/mahdi-heidari.jpg';
import toumari_parisa from 'src/assets/staff/parisa-toumari.jpg';
import mehtash_shervin from 'src/assets/staff/shervin-mehrtash.jpg';
import taji_mehrshad from 'src/assets/staff/mehrshad-taji.jpg';

let TEAM = [
  {
    name: 'shahbazian-hasan',
    imgUrl: shahbazian_mohammadhasan,
    title: 'Human Resources',
    list: ['Ali Soltani', 'Melika Rajabi', 'Amir Reza Velaei'],
  },
  {
    name: 'heidari-mahdi',
    imgUrl: heidari_mahdi,
    title: 'Content Creation',
    list: [
      'Masoud Masoumizadeh',
      'Amirabbas Hadi',
      'Taha Memari',
      'Mohammad Ali Alikhani',
      'Ali Mansouri',
      'Roham Kaveai',
      'Hanieh Hatami',
      'Arman Lotafali Khani',
      'Artin Safaei',
      'Fatemeh Shirvani',
    ],
  },
  {
    name: 'mousavi-yasin',
    imgUrl: mousavi_yasin,
    title: 'Sponsoring Team',
    list: [
      'Zahra Rahmati',
      'Atousa Amiri',
      'Ainaz Rafiei',
      'Sara Karimi',
      'Amirhossein Chitsaz',
      'Amirmahdi Soleimanifar',
      'Mahdi Alizadeh',
    ],
  },
  {
    name: 'nourian-ali',
    imgUrl: nourian_ali,
    title: 'Technical Team',
    list: [
      'Amirmahdi Soleimanifar',
      // 'Mohammad Moshtaghi',
      'Forouzan Iraji',
      // 'Ainaz Rafiei',
    ],
  },

  {
    name: 'toumari-parisa',
    imgUrl: toumari_parisa,
    title: 'Advertisement Team',
    list: [
      'Narges Erfan',
      'Soraia Charkas',
      'Ali Akbari',
      'Borna Khodabandeh',
      'Mineh Kalantarian',
    ],
  },

  {
    name: 'taji-mehrshad',
    imgUrl: taji_mehrshad,
    title: 'Development Team',
    list: [
      'Amirali Razi',
      'Amirhossein Mobasheri',
      'Danial Ayati',
      'Alireza Gargoori Motlagh',
      'Mohammad Ali Abbasbeygi',
      'Mahdieh Shahbipour',
    ],
  },
  {
    name: 'mehrtash-shervin',
    imgUrl: mehtash_shervin,
    title: 'Public Relations',
    list: ['Mahshad Moradi', 'Mohammad Javad Maherolnaghsh'],
  },
  {
    name: 'mostaghis-amirali',
    imgUrl: mostaghis_amirali,
    title: 'Executive Team',
    list: ['Mohammad Hossein Babaei', 'Ilia Shirvand'],
  },
  {
    name: 'eghlimi-amin',
    imgUrl: eghlimi_mohammadamin,
    title: 'Financial Management',
    list: [],
  },
];

let STAFF = TEAM.map((staff) => ({
  title: staff['name']
    .split('-')
    .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  imgUrl: staff.imgUrl,
  subtitle: staff['title'],
  list: staff.list,
}));

export { STAFF };
