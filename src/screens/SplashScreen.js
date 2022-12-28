import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Splash from '../components/splash/splash';

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

  return <Splash />;
};

export default SplashScreen;
