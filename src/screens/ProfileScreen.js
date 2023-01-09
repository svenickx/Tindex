import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from '../components/LoadingComponents/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileView from '../components/PeopleComponents/profileView';

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

  const addMatch = async () => {
    if (matchResult < 0.5) {
      return;
    }

    const match = {
      personId: route.params.id,
      matchResult,
      answerList,
    };

    let currentMatches = await AsyncStorage.getItem('matches');
    currentMatches = JSON.parse(currentMatches);

    if (currentMatches) {
      if (!currentMatches.some(m => m.personId === match.personId)) {
        currentMatches = [...currentMatches, match];
      }
    } else {
      currentMatches = [match];
    }

    await AsyncStorage.setItem('matches', JSON.stringify(currentMatches)).catch(
      err => console.error(err),
    );
  };

  useEffect(() => {
    axios
      .get(`http://mobile.svenckx.com/person/${route.params.id}`)
      .then(res => {
        setPerson(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, [route.params.id]);

  useEffect(() => {
    if (person.name) {
      navigation.setOptions({
        title: `Profil de ${person.name}`,
      });
    } else {
      navigation.setOptions({
        title: 'Chargement du profil',
      });
    }
  }, [person.name, navigation, person]);

  useEffect(() => {
    if (person) {
      AsyncStorage.getItem('matches').then(val => {
        if (val) {
          const matches = JSON.parse(val);
          const currentResult = matches.find(
            e => e.personId === route.params.id,
          );
          if (currentResult) {
            setAllQuestionAnswered(true);
            setMatchResult(currentResult.matchResult);
            setAnswerList(currentResult.answerList);
          }
        }
      });
    }
  }, [person, route.params.id]);

  useEffect(() => {
    if (person.questions !== undefined) {
      if (answerList.length === person.questions.length) {
        setAllQuestionAnswered(true);
        setMatchResult(answerList.filter(e => e).length / answerList.length);
      }
    }
  }, [answerList, person.questions]);

  useEffect(() => {
    if (allQuestionAnswered) {
      addMatch();
    }
  }, [allQuestionAnswered]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ProfileView
      handleAnswer={handleAnswer}
      allQuestionAnswered={allQuestionAnswered}
      matchResult={matchResult}
      answerList={answerList}
      person={person}
      pictureIndex={pictureIndex}
      changePicture={changePicture}
    />
  );
};

export default ProfileScreen;
