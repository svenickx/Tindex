import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginInput from '../LoginInput/LoginInput';
import Logo from '../logo/logo';
import {SplashView} from './style';

const LoginView = () => {
  return (
    <SafeAreaView>
      <SplashView>
        <Logo />
        <LoginInput />
      </SplashView>
    </SafeAreaView>
  );
};

export default LoginView;
