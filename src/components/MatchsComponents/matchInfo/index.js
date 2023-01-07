import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from './style';

const MatchInfo = ({matches, profile}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>{profile.name}</Text>
      <Text>
        Résulat du match:{' '}
        {matches.find(m => m.personId === profile.id).matchResult * 100}%
      </Text>
      <MaterialCommunityIcons
        onPress={() => {
          navigation.navigate('Message', {id: profile.id});
        }}
        style={{textAlign: 'center'}}
        name="message-text"
        color={'blue'}
        size={30}
      />
    </View>
  );
};

export default MatchInfo;
