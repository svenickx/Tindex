import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {PROFILE_ID} from 'react-native-dotenv';
import axios from 'axios';
import Loading from '../components/LoadingComponents/loading';
import MyProfileView from '../components/PeopleComponents/myProfileView';
import LogoutButton from '../components/LogComponents/LogoutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProfileScreen = () => {
  const [person, setPerson] = useState({});
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigation();

  const changePicture = () => {
    if (pictureIndex < person.pictures.length - 1) {
      setPictureIndex(pictureIndex + 1);
    } else {
      setPictureIndex(0);
    }
  };

  useEffect(() => {
    nav.setOptions({
      headerRight: () => <LogoutButton />,
    });

    axios
      .get(`http://mobile.svenckx.com/person/${PROFILE_ID}`)
      .then(res => {
        setPerson(res.data);
        AsyncStorage.setItem(
          'myQuestions',
          JSON.stringify(res.data.questions),
        ).then(() => {
          setIsLoading(false);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, [nav]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyProfileView
      person={person}
      pictureIndex={pictureIndex}
      changePicture={changePicture}
      setPerson={setPerson}
    />
  );
};

export default MyProfileScreen;
