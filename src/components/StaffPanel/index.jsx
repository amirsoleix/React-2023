import React from 'react';
import Proptypes from 'prop-types';

import NestedGrid from '../Department';
import { STAFF } from './constants';

import dehghan_niloufar from 'src/assets/staff/niloufar-dehghan.jpg';
import asemi_parsa from 'src/assets/staff/parsa-asemi.jpg';
import makkyian_moein from 'src/assets/staff/moein-makkyian.jpg';
import ayati_danial from 'src/assets/staff/danial-ayati.jpg';

function StaffPanel({ className }) {
  const renderPosts = () =>
    STAFF.map((data) => {
      const { title, imgUrl, subtitle, list } = data;
      console.log('For', title, 'list is', list);
      return (
        <NestedGrid
          headTitle={title}
          headImgUrl={imgUrl}
          departmentName={subtitle}
          staffNames={list}
          headSub={'Team Leader'}
        />
      );
    });

  return (
    <div>
      <div className={className}>
        <NestedGrid
          headTitle={[
            'Niloufar Dehghan',
            'Parsa Asemi',
            'Moein Makkyian',
            'Danial Ayati',
          ]}
          headImgUrl={[
            dehghan_niloufar,
            asemi_parsa,
            makkyian_moein,
            ayati_danial,
          ]}
          departmentName={'Event Head'}
          headSub={'Team Leader'}
        />
        {renderPosts()}
      </div>
    </div>
  );
}

StaffPanel.defaultProps = {
  posts: [],
};

StaffPanel.propTypes = {
  posts: Proptypes.instanceOf(Array),
};

export default StaffPanel;
