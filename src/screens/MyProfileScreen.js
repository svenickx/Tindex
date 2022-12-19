import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  CenteredView,
  DescriptionBlack,
  PaddingView,
  TitleBlack,
} from '../../public/style/styleComponents';
import {MAIN_COLOR, PROFILE_ID} from 'react-native-dotenv';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import Picture from '../components/picture';
import PeopleInfo from '../components/peopleInfo';
import Question from '../components/question';

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
    return (
      <CenteredView>
        <ActivityIndicator size="large" color={MAIN_COLOR} />
      </CenteredView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={changePicture}>
          <Picture src={person.pictures[pictureIndex]} />
        </TouchableOpacity>
        <PaddingView>
          <PeopleInfo person={person} />
          <TitleBlack>Votre description</TitleBlack>
          <DescriptionBlack>{person.description}</DescriptionBlack>
        </PaddingView>
        <PaddingView>
          <TitleBlack>Vos questions</TitleBlack>
          {person.questions.map((q, i) => {
            return <Question key={i} question={q} />;
          })}
        </PaddingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;
