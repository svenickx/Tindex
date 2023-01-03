import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import NewQuestion from '../newQuestion/newQuestion';
import PeopleInfo from '../peopleInfo';
import Picture from '../picture';
import Question from '../question';
import {DescriptionBlack, PaddingView, TitleBlack} from './style';

const MyProfileView = ({person, changePicture, pictureIndex, setPerson}) => {
  const addQuestion = q => {
    AsyncStorage.getItem('myQuestions').then(async val => {
      let newQuestions = [];
      console.log(val);
      if (val !== null) {
        const currentQ = JSON.parse(val);
        newQuestions = [...currentQ, q];
      } else {
        newQuestions = [q];
      }
      AsyncStorage.setItem('myQuestions', JSON.stringify(newQuestions))
        .then(() => {
          person.questions = newQuestions;
          setPerson(person);
        })
        .catch(err => console.log(err));
    });
  };

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
        <NewQuestion person={person} setPerson={addQuestion} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfileView;
