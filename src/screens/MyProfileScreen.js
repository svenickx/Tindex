import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

const MyProfileScreen = () => {
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <Button
          title="Logout"
          onPress={() => {
            AsyncStorage.getItem('jwtToken').then(res =>
              AsyncStorage.removeItem('jwtToken').then(() => {
                nav.navigate('Login');
              }),
            );
          }}
        />
      ),
    });
  });
  return (
    <View>
      <Text>My Profile</Text>
    </View>
  );
};

export default MyProfileScreen;
