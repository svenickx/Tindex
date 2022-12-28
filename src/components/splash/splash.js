import React from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {MAIN_COLOR} from 'react-native-dotenv';
import {SplashLogoImage, SplashLogoView, SplashView} from './style';

const Splash = () => {
  return (
    <SafeAreaView>
      <SplashView>
        <SplashLogoView>
          <SplashLogoImage
            source={require('../../../public/images/tindex_logo.png')}
          />
        </SplashLogoView>
        <View>
          <ActivityIndicator size="large" color={MAIN_COLOR} />
        </View>
      </SplashView>
    </SafeAreaView>
  );
};

export default Splash;
