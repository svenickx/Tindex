import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameLengthValid, setUsernameLengthValid] = useState(false);
  const [passwordLengthValid, setPasswordLengthValid] = useState(false);

  const apiCall = async () => {
    if (!usernameLengthValid || !passwordLengthValid) {
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

  useEffect(() => {
    const currentToken = AsyncStorage.getItem('jwtToken');
    if (currentToken != null && currentToken !== '') {
      navigation.navigate('Root', {screen: 'Home'});
    }
  });

  useEffect(() => {
    if (username.length >= 3) {
      setUsernameLengthValid(true);
    } else {
      setUsernameLengthValid(false);
    }
    if (password.length >= 8) {
      setPasswordLengthValid(true);
    } else {
      setPasswordLengthValid(false);
    }
  }, [username, password]);

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={text => setUsername(text)}
        placeholder="Username"
      />
      {!usernameLengthValid && <Text>Minimum 3 caractères</Text>}
      <TextInput
        onChangeText={text => setPassword(text)}
        placeholder="Password"
      />
      {!passwordLengthValid && <Text>Minimum 8 caractères</Text>}
      <TouchableOpacity onPress={() => apiCall()}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
