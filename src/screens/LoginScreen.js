import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
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
import CustomTextInput from '../components/customTextInput';

const LoginScreen = ({navigation}) => {
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
          <CustomTextInput value="Username" onInputChange={setUsername} />
          <CustomTextInput value="Password" onInputChange={setPassword} />
          <LoginButtonView>
            <LoginButton onPress={() => apiCall()}>
              <LoginButtonText>Se connecter</LoginButtonText>
            </LoginButton>
          </LoginButtonView>
        </LoginInputView>
      </SplashView>
    </SafeAreaView>
  );
};

export default LoginScreen;
