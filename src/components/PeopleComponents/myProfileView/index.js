import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import NewQuestion from '../../QuestionsComponents/newQuestion';
import PeopleInfo from '../../PeopleComponents/peopleInfo';
import Picture from '../../PeopleComponents/picture';
import Question from '../../QuestionsComponents/question';
import {DescriptionBlack, PaddingView, TitleBlack} from './style';

const MyProfileView = ({person, changePicture, pictureIndex, setPerson}) => {
  const [quetionNumber, setQuestionNumber] = useState(0);

  const addQuestion = q => {
    AsyncStorage.getItem('myQuestions').then(async val => {
      let newQuestions = [];
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
          setQuestionNumber(quetionNumber + 1);
        })
        .catch(err => console.error(err));
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
