import React from 'react';
import {ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import PeopleInfo from '../peopleInfo';
import Picture from '../picture';
import Question from '../../QuestionsComponents/question';
import ResultMatch from '../../MatchsComponents/resultMatch';
import {DescriptionBlack, PaddingView10, TitleBlack} from './style';

const ProfileView = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={props.changePicture}>
          <Picture src={props.person.pictures[props.pictureIndex]} />
        </TouchableOpacity>
        <PaddingView10>
          <PeopleInfo person={props.person} />
          <TitleBlack>Description</TitleBlack>
          <DescriptionBlack>{props.person.description}</DescriptionBlack>
        </PaddingView10>
        <PaddingView10>
          <TitleBlack>Questions de {props.person.name}</TitleBlack>
          {props.person.questions.map((q, i) => {
            return (
              <Question
                key={i}
                question={q}
                handleAnswer={props.handleAnswer}
                answer={props.answerList[i]}
              />
            );
          })}
        </PaddingView10>
        {props.allQuestionAnswered ? (
          <ResultMatch matchResult={props.matchResult} />
        ) : (
          ''
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileView;
