import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MessageInputView, MessageTextInput} from './style';

const MessageInput = ({setNewMessage, addNewMessage}) => {
  return (
    <MessageInputView>
      <TouchableOpacity>
        <MaterialCommunityIcons name="plus" color={'#fff'} size={40} />
      </TouchableOpacity>
      <MessageTextInput
        onChangeText={text => setNewMessage(text)}
        placeholder="Message..."
      />
      <TouchableOpacity onPress={addNewMessage}>
        <MaterialCommunityIcons name="send" color={'#fff'} size={40} />
      </TouchableOpacity>
    </MessageInputView>
  );
};

export default MessageInput;
