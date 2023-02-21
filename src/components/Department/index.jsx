// Import react
// import { head } from 'lodash';
import * as React from 'react';
import Staff from 'src/components/Staff';
import shahbazian_mohammadhasan from 'src/assets/staff/hasan-shahbazian.jpg';
import nourian_ali from 'src/assets/staff/ali-nourian.jpg';
import mostaghis_amirali from 'src/assets/staff/amirali-mostaghis.jpg';
import mousavi_yasin from 'src/assets/staff/yasin-mousavi.jpg';
import eghlimi_mohammadamin from 'src/assets/staff/mohammadamin-eghlimi.jpg';
import heidari_mahdi from 'src/assets/staff/mahdi-heidari.jpg';
import toumari_parisa from 'src/assets/staff/parisa-toumari.jpg';
import mehtash_shervin from 'src/assets/staff/shervin-mehrtash.jpg';
import taji_mehrshad from 'src/assets/staff/mehrshad-taji.jpg';
import soltani_ali from 'src/assets/staff/ali-soltani.jpg';
import rajabi_melika from 'src/assets/images/placeholder.png';
import velae_amirreza from 'src/assets/staff/amirreza-velae.jpg';
import masoumizadeh_masoud from 'src/assets/staff/masoud-masoumizadeh.jpg';
import hadi_amirabbas from 'src/assets/images/placeholder.png';
import memari_taha from 'src/assets/staff/taha-memari.jpeg';
import alikhani_mohammadali from 'src/assets/staff/mohammadali-alikhani.jpeg';
import mansouri_ali from 'src/assets/staff/ali-mansouri.jpg';
import kaveai_roham from 'src/assets/staff/roham-kaveie.jpg';
import hatami_hanieh from 'src/assets/staff/hanieh-hatami.jpg';
import lotafalikhani_arman from 'src/assets/staff/arman-lotfalikhani.jpg';
import safaei_artin from 'src/assets/images/placeholder.png';
import shirvani_fatemeh from 'src/assets/images/placeholder.png';
import rahmati_zahra from 'src/assets/images/placeholder.png';
import amiri_atousa from 'src/assets/images/placeholder.png';
import rafiei_ainaz from 'src/assets/images/placeholder.png';
import karimi_sara from 'src/assets/images/placeholder.png';
import chitsaz_amirhossein from 'src/assets/images/placeholder.png';
import soleimanifar_amir from 'src/assets/staff/amir-soleimanifar.jpg';
import alizade_mahdi from 'src/assets/staff/mahdi-alizade.jpg';
import moshtaghi_mohammad from 'src/assets/images/placeholder.png';
import iraji_forouzan from 'src/assets/images/placeholder.png';
import erfan_narges from 'src/assets/staff/narges-erfan.jpeg';
import charkas_soraia from 'src/assets/images/placeholder.png';
import akbari_ali from 'src/assets/staff/ali-akbari.jpg';
import razi_amirali from 'src/assets/images/placeholder.png';
import mobasheri_amirhossein from 'src/assets/staff/amirhossein-mobasheri.jfif';
import ayati_danial from 'src/assets/staff/danial-ayati.jpg';
import gargoorimotlagh_alireza from 'src/assets/staff/alireza-gargoori.jpg';
import abbasbeygi_mohammadali from 'src/assets/images/placeholder.png';
import shahbipour_mahdieh from 'src/assets/staff/mahdieh-shahbi.jpg';
import moradi_mahshad from 'src/assets/images/placeholder.png';
import maheronnaghsh_mohammadjavad from 'src/assets/staff/mohammadjavad-maheronnaghsh.jpg';
import babaei_mohammadhosein from 'src/assets/staff/mohammadhosein-babaei.jpg';
import shirvand_iliya from 'src/assets/staff/iliya-shirvand.jpeg';
import khodabandeh_borna from 'src/assets/staff/borna-khodabandeh.jpeg';
import kalantarian_mineh from 'src/assets/staff/mineh-kalantarian.jpeg';
import memarzadeh_emad from 'src/assets/staff/emad-memarzadeh.jpg';
import zahedifar_zahra from 'src/assets/staff/zahra-zahedifar.jpg';

import './Department.scss';

const hash = {
  zahedifar_zahra: zahedifar_zahra,
  shahbazian_mohammadhasan: shahbazian_mohammadhasan,
  nourian_ali: nourian_ali,
  memarzadeh_emad: memarzadeh_emad,
  mostaghis_amirali: mostaghis_amirali,
  mousavi_yasin: mousavi_yasin,
  eghlimi_mohammadamin: eghlimi_mohammadamin,
  heidari_mahdi: heidari_mahdi,
  toumari_parisa: toumari_parisa,
  mehtash_shervin: mehtash_shervin,
  taji_mehrshad: taji_mehrshad,
  soltani_ali: soltani_ali,
  rajabi_melika: rajabi_melika,
  velae_amirreza: velae_amirreza,
  masoumizadeh_masoud: masoumizadeh_masoud,
  hadi_amirabbas: hadi_amirabbas,
  memari_taha: memari_taha,
  alikhani_mohammadali: alikhani_mohammadali,
  mansouri_ali: mansouri_ali,
  kaveai_roham: kaveai_roham,
  hatami_hanieh: hatami_hanieh,
  lotafalikhani_arman: lotafalikhani_arman,
  safaei_artin: safaei_artin,
  shirvani_fatemeh: shirvani_fatemeh,
  rahmati_zahra: rahmati_zahra,
  amiri_atousa: amiri_atousa,
  rafiei_ainaz: rafiei_ainaz,
  karimi_sara: karimi_sara,
  chitsaz_amirhossein: chitsaz_amirhossein,
  soleimanifar_amir: soleimanifar_amir,
  alizade_mahdi: alizade_mahdi,
  moshtaghi_mohammad: moshtaghi_mohammad,
  iraji_forouzan: iraji_forouzan,
  erfan_narges: erfan_narges,
  charkas_soraia: charkas_soraia,
  akbari_ali: akbari_ali,
  khodabandeh_borna: khodabandeh_borna,
  kalantarian_mineh: kalantarian_mineh,
  razi_amirali: razi_amirali,
  mobasheri_amirhossein: mobasheri_amirhossein,
  ayati_danial: ayati_danial,
  gargoorimotlagh_alireza: gargoorimotlagh_alireza,
  abbasbeygi_mohammadali: abbasbeygi_mohammadali,
  shahbipour_mahdieh: shahbipour_mahdieh,
  moradi_mahshad: moradi_mahshad,
  maheronnaghsh_mohammadjavad: maheronnaghsh_mohammadjavad,
  babaei_mohammadhosein: babaei_mohammadhosein,
  shirvand_iliya: shirvand_iliya,
};

export default function NestedGrid(props) {
  const { headTitle, headImgUrl, headSub, departmentName, staffNames } = props;
  function render() {
    if (departmentName === 'Event Head') {
      return (
        <div className='department'>
          <h2 className='department__title'>{'Event Directors'}</h2>
          <Staff
            mainTitle={headTitle[0]}
            imgUrl={headImgUrl[0]}
            imgAlt={headTitle[0]}
            subtitle={'Co-director of Event'}
          />
          <Staff
            mainTitle={headTitle[1]}
            imgUrl={headImgUrl[1]}
            imgAlt={headTitle[1]}
            subtitle={'Co-director of Event'}
          />
          <Staff
            mainTitle={headTitle[2]}
            imgUrl={headImgUrl[2]}
            imgAlt={headTitle[2]}
            subtitle={'Director of Resana'}
          />
          <Staff
            mainTitle={headTitle[3]}
            imgUrl={headImgUrl[3]}
            imgAlt={headTitle[3]}
            subtitle={'Scientific Head of Resana'}
          />
        </div>
      );
    } else {
      return (
        <div className='department'>
          <h2 className='department__title'>{departmentName}</h2>
          <Staff
            mainTitle={headTitle}
            imgUrl={headImgUrl}
            imgAlt={headTitle}
            subtitle={headSub}
          />
          {staffNames
            ? staffNames.map((name) => (
                <Staff
                  mainTitle={name.name}
                  imgUrl={hash[name['imageUrl']]}
                  imgAlt={name.name}
                  subtitle={'Member'}
                />
              ))
            : ''}
        </div>
      );
    }
  }

  return render();
}

// } else {
//   return (
//     <div className='department'>
//       <h2 className='department__title'>{departmentName}</h2>
//       <Staff
//         mainTitle={headTitle}
//         imgUrl={headImgUrl}
//         imgAlt={headTitle}
//         subtitle={headSub}
//       />
//       <div>
//         <h4 className='lightBlack'>
//           {staffNames.length !== 0 ? 'Members' : ''}
//         </h4>
//         <ul className='department__ul'>
//           {staffNames
//             ? staffNames.map((name) => (
//                 <li>
//                   <Staff
//                     mainTitle={name.name}
//                     imgUrl={name.imgUrl}
//                     imgAlt={name.name}
//                   />
//                 </li>
//               ))
//             : ''}
//         </ul>
//       </div>
//     </div>
//   );
// }
