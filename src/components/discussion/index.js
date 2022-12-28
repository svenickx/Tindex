import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from './style';

const Discussion = ({discussion, personId}) => {
  return (
    <ScrollView>
      {discussion.map((message, index) => {
        return (
          <View key={index} isSender={message.senderId === personId}>
            <Text>{message.content}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Discussion;
