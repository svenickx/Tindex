import React from 'react';
import Discussion from '../../discussion';
import MessageInput from '../messageInput';
import {View} from './style';

const MessageView = props => {
  return (
    <View>
      <Discussion discussion={props.discussion} personId={props.personId} />
      <MessageInput
        setNewMessage={props.setNewMessage}
        addNewMessage={props.addNewMessage}
      />
    </View>
  );
};

export default MessageView;
