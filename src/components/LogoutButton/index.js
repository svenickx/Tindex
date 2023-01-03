import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LogoutButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        onPress={() => {
          AsyncStorage.multiRemove(['matches', 'jwtToken', 'myQuestions']).then(
            () => {
              nav.navigate('Login');
            },
          );
        }}
        style={{textAlign: 'center', marginRight: 15}}
        name="logout"
        color={'white'}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default LogoutButton;
