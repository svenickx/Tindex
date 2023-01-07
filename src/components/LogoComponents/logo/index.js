import React from 'react';
import {SplashLogoImage, SplashLogoView} from './style';

const Logo = () => {
  return (
    <SplashLogoView>
      <SplashLogoImage
        source={require('../../../../public/images/tindex_logo.png')}
      />
    </SplashLogoView>
  );
};

export default Logo;
