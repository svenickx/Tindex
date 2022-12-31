import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

const LogoutButton = () => {
  const nav = useNavigation();
  return (
    <Button
      title="Logout"
      onPress={() => {
        AsyncStorage.removeItem('matches').then(() => {
          AsyncStorage.removeItem('jwtToken').then(() => {
            nav.navigate('Login');
          });
        });
      }}
    />
  );
};

export default LogoutButton;
