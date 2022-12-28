import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from './style';

const MatchPicture = ({src, profileId}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile', {id: profileId})}>
      <Image source={{uri: src}} />
    </TouchableOpacity>
  );
};

export default MatchPicture;
