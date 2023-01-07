import React from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {useTheme} from 'styled-components';
import {SplashLogoImage, SplashLogoView, SplashView} from './style';

const Splash = () => {
  const theme = useTheme();
  return (
    <SafeAreaView>
      <SplashView>
        <SplashLogoView>
          <SplashLogoImage
            source={require('../../../../public/images/tindex_logo.png')}
          />
        </SplashLogoView>
        <View>
          <ActivityIndicator size="large" color={theme.primary} />
        </View>
      </SplashView>
    </SafeAreaView>
  );
};

export default Splash;
