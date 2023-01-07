import React, {useState} from 'react';
import CustomTextInput from '../../customTextInput';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LoginButton,
  LoginButtonText,
  LoginButtonView,
  LoginInputView,
} from './style';
import {useNavigation} from '@react-navigation/core';

const LoginInput = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const apiCall = async () => {
    if (username.length < 3 || password.length < 8) {
      return;
    }

    await axios
      .post('https://login.hikkary.com/users/login', {
        username,
        password,
      })
      .then(async res => {
        try {
          await AsyncStorage.setItem('jwtToken', res.headers['x-access-token']);
        } catch (err) {
          console.error(err);
          return;
        }
      })
      .catch(err => {
        console.error(err);
      });

    navigation.navigate('Root', {screen: 'Home'});
  };

  return (
    <LoginInputView>
      <CustomTextInput value="Username" onInputChange={setUsername} />
      <CustomTextInput value="Password" onInputChange={setPassword} />
      <LoginButtonView>
        <LoginButton onPress={() => apiCall()}>
          <LoginButtonText>Se connecter</LoginButtonText>
        </LoginButton>
      </LoginButtonView>
    </LoginInputView>
  );
};

export default LoginInput;
