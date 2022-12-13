import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LoginButton,
  LoginButtonText,
  LoginButtonView,
  LoginInputView,
  SplashLogoImage,
  SplashLogoView,
  SplashView,
} from '../../public/style/styleComponents';
import Input from 'react-native-input-style';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const apiCall = async () => {
    await axios
      .post('https://login.hikkary.com/users/login', {
        username,
        password,
      })
      .then(async res => {
        try {
          await AsyncStorage.setItem('jwtToken', res.headers['x-access-token']);
        } catch (err) {
          console.log(err);
          return;
        }
      })
      .catch(err => {
        console.log(err);
      });

    navigation.navigate('Root', {screen: 'Home'});
  };

  return (
    <SafeAreaView>
      <SplashView>
        <SplashLogoView>
          <SplashLogoImage
            source={require('../../public/images/tindex_logo.png')}
          />
        </SplashLogoView>
        <LoginInputView>
          <Input
            id="name"
            label="Username"
            required
            minLength={3}
            maxLength={15}
            autoCapitalize="none"
            errorText="Invalid username"
            onInputChange={(id, value) => {
              setUsername(value);
            }}
            initialValue=""
            outlined
            borderColor="black"
          />
          <Input
            id="password"
            label="Password"
            required
            minLength={8}
            maxLength={30}
            autoCapitalize="none"
            errorText="Invalid password"
            onInputChange={(id, value) => {
              setPassword(value);
            }}
            initialValue=""
            outlined
            borderColor="black"
            secureTextEntry={true}
          />
          <LoginButtonView>
            <LoginButton color={'#E83D95'} onPress={() => apiCall()}>
              <LoginButtonText>Log In</LoginButtonText>
            </LoginButton>
          </LoginButtonView>
        </LoginInputView>
      </SplashView>
    </SafeAreaView>
  );
};

export default LoginScreen;
