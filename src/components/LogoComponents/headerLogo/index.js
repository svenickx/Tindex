import React from 'react';
import {HeaderView, HeaderImage} from './style';

const HeaderLogo = () => {
  return (
    <HeaderView>
      <HeaderImage
        source={require('../../../../public/images/tindex_logo_small.png')}
      />
    </HeaderView>
  );
};

export default HeaderLogo;
