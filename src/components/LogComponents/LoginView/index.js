import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginInput from '../LoginInput';
import Logo from '../../LogoComponents/logo';
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
