import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Loading from '../components/loading/loading';
import {PROFILE_ID} from 'react-native-dotenv';
import MessageView from '../components/messageView';

const MessageScreen = ({route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [discussion, setDiscussion] = useState({});
  const [person, setPerson] = useState();
  const [newMessage, setNewMessage] = useState('');

  const addNewMessage = () => {
    const message = {
      senderId: PROFILE_ID,
      content: newMessage,
    };
    setDiscussion([...discussion, message]);
    setNewMessage('');
  };

  useEffect(() => {
    axios
      .get(`http://mobile.svenckx.com/messages/${route.params.id}`)
      .then(res => {
        setDiscussion(res.data.messages);
        setPerson(res.data.person);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [route.params.id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MessageView
      discussion={discussion}
      personId={person.id}
      setNewMessage={setNewMessage}
      addNewMessage={addNewMessage}
    />
  );
};

export default MessageScreen;
