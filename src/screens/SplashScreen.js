import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, SafeAreaView, Text, View} from 'react-native';
import {
  SplashLogoImage,
  SplashLogoView,
  SplashView,
} from '../../public/style/styleComponents';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem('jwtToken')
      .then(currentToken => {
        if (currentToken != null && currentToken !== '') {
          navigation.navigate('Root', {screen: 'Home'});
        } else {
          navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [navigation]);

  return (
    <SafeAreaView>
      <SplashView>
        <SplashLogoView>
          <SplashLogoImage
            source={require('../../public/images/tindex_logo.png')}
          />
        </SplashLogoView>
        <View>
          <ActivityIndicator size="large" color="#E83D95" />
        </View>
      </SplashView>
    </SafeAreaView>
  );
};

export default SplashScreen;
