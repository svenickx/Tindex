import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Question from '../components/question';
import Picture from '../components/picture';
import {
  CenteredView,
  DescriptionBlack,
  PaddingView,
  TitleBlack,
} from '../../public/style/styleComponents';
import ResultMatch from '../components/ResultMatch';
import PeopleInfo from '../components/peopleInfo';
import {MAIN_COLOR} from 'react-native-dotenv';

const ProfileScreen = ({route, navigation}) => {
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [allQuestionAnswered, setAllQuestionAnswered] = useState(false);
  const [matchResult, setMatchResult] = useState(0);

  const changePicture = () => {
    if (pictureIndex < person.pictures.length - 1) {
      setPictureIndex(pictureIndex + 1);
    } else {
      setPictureIndex(0);
    }
  };

  const handleAnswer = isCorrect => {
    setAnswerList([...answerList, isCorrect]);
  };

  useEffect(() => {
    axios
      .get(`http://mobile.svenckx.com/person/${route.params.id}`)
      .then(res => {
        setPerson(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [route.params.id]);

  useEffect(() => {
    navigation.setOptions({
      title: `Profil de ${person.name}`,
    });
  }, [person.name, navigation]);

  useEffect(() => {
    if (person.questions !== undefined) {
      if (answerList.length === person.questions.length) {
        setAllQuestionAnswered(true);
        setMatchResult(answerList.filter(e => e).length / answerList.length);
      }
    }
  }, [answerList, person.questions]);

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
          <TitleBlack>Description</TitleBlack>
          <DescriptionBlack>{person.description}</DescriptionBlack>
        </PaddingView>
        <PaddingView>
          <TitleBlack>Questions de {person.name}</TitleBlack>
          {person.questions.map((q, i) => {
            return (
              <Question key={i} question={q} handleAnswer={handleAnswer} />
            );
          })}
        </PaddingView>
        {allQuestionAnswered ? <ResultMatch matchResult={matchResult} /> : ''}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
