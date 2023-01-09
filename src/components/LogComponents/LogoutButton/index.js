import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LogoutView} from './style';

const LogoutButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity>
      <LogoutView>
        <MaterialCommunityIcons
          onPress={() => {
            AsyncStorage.multiRemove([
              'myQuestions',
              'matches',
              'jwtToken',
            ]).then(() => {
              nav.navigate('Login');
            });
          }}
          name="logout"
          color={'white'}
          size={25}
        />
      </LogoutView>
    </TouchableOpacity>
  );
};

export default LogoutButton;
