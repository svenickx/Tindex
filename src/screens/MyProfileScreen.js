import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {PROFILE_ID} from 'react-native-dotenv';
import axios from 'axios';
import Loading from '../components/loading/loading';
import MyProfileView from '../components/myProfileView';
import LogoutButton from '../components/LogoutButton';

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
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyProfileView
      person={person}
      pictureIndex={pictureIndex}
      changePicture={changePicture}
    />
  );
};

export default MyProfileScreen;
